import {
  ISetupData,
  repoSupportedTypes,
  TRepoConnectionInfo,
  TReposSetup,
  TRepoSupportedTypes,
} from '../../../../types.js';
import { BitloopsTypesMapping } from '../../../../types.js';
import { modelToTargetLanguage } from '../../core/modelToTargetLanguage.js';
import { getRepoAdapterClassName } from '../../core/components/repo/helpers/repoAdapterName.js';
import { LICENSE } from '../license.js';

type TSetupOutput = { filePath: string; content: string };
type TCategorizedRepoConnections = Record<
  TRepoSupportedTypes,
  {
    [connectionName: string]: TRepoConnectionInfo;
  }
>;

const dependenciesMap: Record<TRepoSupportedTypes, { packageName: string; version: string }> = {
  mongodb: {
    packageName: 'mongodb',
    version: '^4.1.0',
  },
  mysql: {
    packageName: 'mysql2',
    version: '^2.3.0',
  },
  postgres: {
    packageName: 'pg',
    version: '^8.7.1',
  },
  sqlite: {
    packageName: 'sqlite3',
    version: '^5.0.2',
  },
};

export interface ISetupRepos {
  generateRepoConnections(setupData: Readonly<ISetupData>): TSetupOutput[];
  getStartupImports(reposSetupData: Readonly<TReposSetup>): string[];
  generateRepoDIImports(
    reposSetupData: Readonly<TReposSetup>,
    boundedContext: string,
    module: string,
  ): string;
  generateRepoDIAdapters(
    reposSetupData: Readonly<TReposSetup>,
    boundedContext: string,
    module: string,
  ): string;
  getPackageJSONDependencies(reposSetupData: Readonly<TReposSetup>): Record<string, string>;
}

export class SetupTypeScriptRepos implements ISetupRepos {
  private dbTypeToFolderMap: Record<TRepoSupportedTypes, string> = {
    mongodb: 'mongo',
    postgres: 'postgres',
    mysql: 'mysql',
    sqlite: 'sqlite',
  };

  generateRepoConnections(setupData: Readonly<ISetupData>): TSetupOutput[] {
    if (!setupData?.repos?.connections) return [];
    const groupedConnectionsPerDb = this.groupRepoConnectionsPerDbType(setupData.repos);
    return Object.entries(groupedConnectionsPerDb).reduce((acc, [dbType, connections]) => {
      const results = this.getDbTypeRepoConnectionsPathsAndContent(
        dbType as TRepoSupportedTypes,
        connections,
      );
      acc.push(...results);
      return acc;
    }, [] as TSetupOutput[]);
  }

  getStartupImports(repos: Readonly<TReposSetup>): string[] {
    const dbTypes = new Set<TRepoSupportedTypes>();
    if (!repos?.connections) return [];
    const result: string[] = [];
    for (const connectionInfo of Object.values(repos.connections)) {
      dbTypes.add(connectionInfo.dbType);
    }
    dbTypes.forEach((dbType) => {
      const dbPath = this.dbTypeToFolderMap[dbType];
      result.push(`await import('./shared/infra/db/${dbPath}');`);
    });

    return result;
  }

  generateRepoDIImports(
    reposSetupData: Readonly<TReposSetup>,
    boundedContext: string,
    module: string,
  ): string {
    // import { mongoConnection } from '../../../shared/infra/db/mongo/config';
    // import { TodoRepoPortMongodbAdapter } from './infra/repos/todoRepo';
    const moduleRepoAdapters = reposSetupData?.repoAdapters?.[boundedContext]?.[module];
    if (!moduleRepoAdapters) return '';
    const connections: Record<TRepoSupportedTypes, string[]> = {
      mongodb: [],
      postgres: [],
      mysql: [],
      sqlite: [],
    };
    const adapterImports: string[] = [];
    for (const [repoInstanceName, repoAdapterInfo] of Object.entries(moduleRepoAdapters)) {
      const { connection, dbType, repoPort } = repoAdapterInfo;
      const stringConnection = modelToTargetLanguage({
        type: BitloopsTypesMapping.TSingleExpression,
        value: connection,
      });
      connections[dbType].push(stringConnection);
      const adapterClassName = getRepoAdapterClassName(repoPort, dbType);
      adapterImports.push(
        `import { ${adapterClassName} } from './infra/repos/${repoInstanceName}';`,
      );
    }
    const result = Object.entries(connections).reduce((acc, [dbType, connectionNames]) => {
      if (connectionNames.length === 0) return acc;
      const dbPath = this.dbTypeToFolderMap[dbType as TRepoSupportedTypes];
      const connectionImports = connectionNames.join(', ');
      acc.push(`import { ${connectionImports} } from '../../../shared/infra/db/${dbPath}/config';`);
      return acc;
    }, [] as string[]);
    result.push(...adapterImports);
    return result.join('\n') + '\n';
  }

  generateRepoDIAdapters(
    reposSetupData: Readonly<TReposSetup>,
    boundedContext: string,
    module: string,
  ): string {
    // const todoRepo = new TodoRepoPortMongodbAdapter(mongoConnection);
    const moduleRepoAdapters = reposSetupData?.repoAdapters?.[boundedContext]?.[module];
    if (!moduleRepoAdapters) return '';
    const result: string[] = [];
    for (const [repoInstanceName, repoAdapterInfo] of Object.entries(moduleRepoAdapters)) {
      const { connection, dbType, repoPort } = repoAdapterInfo;
      const stringConnection = modelToTargetLanguage({
        type: BitloopsTypesMapping.TSingleExpression,
        value: connection,
      });
      const adapterClassName = getRepoAdapterClassName(repoPort, dbType);
      result.push(`const ${repoInstanceName} = new ${adapterClassName}(${stringConnection});`);
    }
    return result.join('\n') + '\n';
  }

  getPackageJSONDependencies(reposSetupData: Readonly<TReposSetup>): Record<string, string> {
    if (!reposSetupData) return {};
    const groupedConnections = this.groupRepoConnectionsPerDbType(reposSetupData);
    const result = {};
    for (const [dbType, connections] of Object.entries(groupedConnections)) {
      if (Object.keys(connections).length === 0) continue;
      const { packageName, version } = dependenciesMap[dbType as TRepoSupportedTypes];
      result[packageName] = version;
    }
    return result;
  }

  private groupRepoConnectionsPerDbType(repos: Readonly<TReposSetup>): TCategorizedRepoConnections {
    if (!repos.connections) {
      return repoSupportedTypes.reduce((acc, dbType) => {
        acc[dbType] = {};
        return acc;
      }, {} as TCategorizedRepoConnections);
    }
    const connections: {
      [connectionName: string]: TRepoConnectionInfo;
    } = JSON.parse(JSON.stringify(repos.connections));

    return Object.entries(connections).reduce((acc, [connectionName, connectionInfo]) => {
      if (!acc[connectionInfo.dbType]) {
        acc[connectionInfo.dbType] = {};
      }
      acc[connectionInfo.dbType][connectionName] = connectionInfo;
      return acc;
    }, {} as TCategorizedRepoConnections);
  }

  private getDbTypeRepoConnectionsPathsAndContent(
    dbType: TRepoSupportedTypes,
    connections: {
      [connectionName: string]: TRepoConnectionInfo;
    },
  ): TSetupOutput[] {
    let content = '';

    let indexContent = '';
    switch (dbType) {
      case 'mongodb': {
        // TODO handle mongo user, pass etc
        content += "import { MongoClient } from 'mongodb';\n";

        content += Object.entries(connections)
          .map(([connectionName, connectionInfo]) => {
            const { host, port } = connectionInfo;
            const transpiledHostExpr = modelToTargetLanguage({
              type: BitloopsTypesMapping.TSingleExpression,
              value: host,
            });
            const transpiledPortExpr = modelToTargetLanguage({
              type: BitloopsTypesMapping.TSingleExpression,
              value: port,
            });
            return (
              `const ${connectionName}Url = 'mongodb://' + ${transpiledHostExpr} + ':${transpiledPortExpr}';\n` +
              `export const ${connectionName} = new MongoClient(${connectionName}Url);\n`
            );
          })
          .join('\n');
        indexContent = this.getMongoIndexFileContent(Object.keys(connections));
        break;
      }
      default:
        throw new Error('Not implemented yet' + dbType);
    }
    const dbPath = this.dbTypeToFolderMap[dbType];
    return [
      {
        filePath: `./src/shared/infra/db/${dbPath}/config/index.ts`,
        content: LICENSE + content,
      },
      {
        filePath: `./src/shared/infra/db/${dbPath}/index.ts`,
        content: indexContent,
      },
    ];
  }

  private getMongoIndexFileContent(mongoConnectionInstances: string[]): string {
    const connectionClients = mongoConnectionInstances.join(', ');
    const connectClients =
      'await Promise.all(connections.map((connection) => connection.connect()));';
    return (
      LICENSE +
      `import { ${connectionClients} } from './config';

const connect = async () => {
  try {
    console.info('Connecting to Mongo...');
    const connections = [${connectionClients}];
    ${connectClients}
    console.info('Connected successfully to MongoDB server');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
connect();
`
    );
  }
}
