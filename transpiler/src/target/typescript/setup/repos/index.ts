import {
  repoSupportedTypes,
  TReposSetup,
  TRepoSupportedTypes,
  TRepoConnectionDefinition,
  RepoConnectionDefinitionKey,
  RepoConnectionExpressionKey,
  TRepoConnectionOptions,
} from '../../../../types.js';
import { modelToTargetLanguage } from '../../core/modelToTargetLanguage.js';
import { TSetupOutput } from '../index.js';
import { BitloopsTypesMapping } from '../../../../helpers/mappings.js';
import { SetupTypescriptMongoRepo } from './mongo.js';

type TCategorizedRepoConnections = Record<
  TRepoSupportedTypes,
  {
    [connectionName: string]: TRepoConnectionOptions;
  }
>;

const dependenciesMap: Record<TRepoSupportedTypes, { packageName: string; version: string }> = {
  'DB.Mongo': {
    packageName: '@bitloops/bl-boilerplate-infra-mongo',
    version: '*',
  },
  'DB.MySQL': {
    packageName: '@bitloops/bl-boilerplate-infra-mysql',
    version: '*',
  },
  'DB.Postgres': {
    packageName: '@bitloops/bl-boilerplate-infra-pg',
    version: '*',
  },
  'DB.SQLite': {
    packageName: '@bitloops/bl-boilerplate-infra-sqlite3',
    version: '*',
  },
};

export interface ISetupRepos {
  getStartupImports(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
    setupTypeMapper: Record<string, string>,
  ): string[];

  generateRepoConnections(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
    license?: string,
  ): TSetupOutput[];
  generateRepoDIImports(
    reposSetupData: Readonly<TReposSetup>,
    setupTypeMapper: Record<string, string>,
  ): string;
  generateRepoDIAdapters(
    reposSetupData: Readonly<TReposSetup>,
    // boundedContext: string,
    // module: string,
  ): string;
  getPackageJSONDependencies(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
  ): Record<string, string>;
}

export class SetupTypeScriptRepos implements ISetupRepos {
  generateRepoConnections(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
    license?: string,
  ): TSetupOutput[] {
    // if (!setupData?.repos?.connections) return [];
    const groupedConnectionsPerDb = this.groupRepoConnectionsPerDbType(repoConnectionDefinitions);
    return Object.entries(groupedConnectionsPerDb).reduce((acc, [dbType, connections]) => {
      const results = this.getDbTypeRepoConnectionsPathsAndContent(
        dbType as TRepoSupportedTypes,
        connections,
        license,
      );
      acc.push(...results);
      return acc;
    }, [] as TSetupOutput[]);
  }

  getStartupImports(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
    setupTypeMapper,
  ): string[] {
    const dbTypes = new Set<TRepoSupportedTypes>();
    const result: string[] = [];
    for (const connection of repoConnectionDefinitions) {
      const dbType = connection[RepoConnectionDefinitionKey][RepoConnectionExpressionKey].dbType;
      dbTypes.add(dbType);
    }
    dbTypes.forEach((dbType) => {
      result.push(`await import('..${setupTypeMapper[dbType]}');`);
    });

    return result;
  }

  generateRepoDIImports(
    reposSetupData: Readonly<TReposSetup>,
    setupTypeMapper: Record<string, string>,
  ): string {
    const moduleRepoAdapters = reposSetupData?.repoAdapters?.repoAdapterValues;
    if (!moduleRepoAdapters) return '';
    const connections: Record<TRepoSupportedTypes, string[]> = {
      'DB.Mongo': [],
      'DB.Postgres': [],
      'DB.MySQL': [],
      'DB.SQLite': [],
    };
    const adapterImports: string[] = [];
    for (const [adapterClassName, repoAdapterInfo] of Object.entries(moduleRepoAdapters)) {
      const { connection, dbType } = repoAdapterInfo;
      const stringConnection = modelToTargetLanguage({
        type: BitloopsTypesMapping.TExpression,
        value: connection,
      });
      connections[dbType].push(stringConnection.output);
      // const adapterClassName = getRepoAdapterClassName(repoPort, dbType);
      adapterImports.push(
        `import { ${adapterClassName} } from './repos/concretions/${adapterClassName}';`,
      );
    }

    const result = Object.entries(connections).reduce((acc, [dbType, connectionNames]) => {
      if (connectionNames.length === 0) return acc;

      const connectionImports = connectionNames
        .sort()
        .filter((item: string, pos: number) => {
          return connectionNames.indexOf(item) == pos;
        })
        .join(', ');

      acc.push(
        `import { ${connectionImports} } from '../../../..${setupTypeMapper[dbType]}config';`,
      );
      return acc;
    }, [] as string[]);
    result.push(...adapterImports);
    return result.join('\n') + '\n';
  }

  // TODO pass repo adapters here instead as param
  generateRepoDIAdapters(reposSetupData: Readonly<TReposSetup>): string {
    const repoAdapterValues = reposSetupData?.repoAdapters.repoAdapterValues;
    if (!repoAdapterValues) return '';
    const result: string[] = [];
    for (const [adapterClassName, repoAdapterInfo] of Object.entries(repoAdapterValues)) {
      const { connection, instanceIdentifier } = repoAdapterInfo;
      const stringConnection = modelToTargetLanguage({
        type: BitloopsTypesMapping.TExpression,
        value: connection,
      });

      result.push(
        `const ${instanceIdentifier} = new ${adapterClassName}(${stringConnection.output});`,
      );
    }
    return result.join('\n') + '\n';
  }

  getPackageJSONDependencies(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
  ): Record<string, string> {
    const result = {};
    for (const connectionDefinition of repoConnectionDefinitions) {
      const dbType =
        connectionDefinition[RepoConnectionDefinitionKey][RepoConnectionExpressionKey].dbType;
      const { packageName, version } = dependenciesMap[dbType];
      result[packageName] = version;
    }
    return result;
  }

  private groupRepoConnectionsPerDbType(
    repoConnectionDefinitions: TRepoConnectionDefinition[],
  ): TCategorizedRepoConnections {
    const initialStruct: TCategorizedRepoConnections = repoSupportedTypes.reduce((acc, dbType) => {
      acc[dbType] = {};
      return acc;
    }, {} as TCategorizedRepoConnections);

    const connectionsGroupedByDbType = repoConnectionDefinitions.reduce(
      (acc, repoConnectionDefinition) => {
        const connectionName = repoConnectionDefinition[RepoConnectionDefinitionKey].identifier;
        const connectionExpression =
          repoConnectionDefinition[RepoConnectionDefinitionKey][RepoConnectionExpressionKey];
        const { dbType, options } = connectionExpression;
        acc[dbType][connectionName] = { options };
        return acc;
      },
      initialStruct,
    );

    return connectionsGroupedByDbType;
  }

  private getDbTypeRepoConnectionsPathsAndContent(
    dbType: TRepoSupportedTypes,
    connections: {
      [connectionName: string]: TRepoConnectionOptions;
    },
    license?: string,
  ): TSetupOutput[] {
    let content = '';

    let indexContent = '';
    switch (dbType) {
      case 'DB.Mongo': {
        const mongoGenerator = new SetupTypescriptMongoRepo();
        const { configFileContent, indexFileContent } =
          mongoGenerator.generateConnectionConfigFile(connections);
        content = configFileContent;
        indexContent = indexFileContent;
        break;
      }
      default:
        throw new Error('Not implemented yet' + dbType);
    }
    // const dbPath = this.dbTypeToFolderMap[dbType];
    return [
      {
        fileId: 'config.ts',
        fileType: `${dbType}.Config`,
        content: (license || '') + content,
      },
      {
        fileId: 'index.ts',
        fileType: `${dbType}.Index`,
        content: (license || '') + indexContent,
      },
    ];
  }
}
