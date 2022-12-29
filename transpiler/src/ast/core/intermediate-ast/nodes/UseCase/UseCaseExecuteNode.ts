import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TExecute } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';
import { StatementNode } from '../statements/Statement.js';
import { StatementListNode } from '../statements/StatementList.js';

export class UseCaseExecuteNode extends IntermediateASTNode<{ execute: TExecute }> {
  private static classNodeName = 'execute';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TUseCaseExecute, metadata, UseCaseExecuteNode.classNodeName);
  }

  getStatements(): StatementNode[] {
    const statementList = this.getChildNodeByType<StatementListNode>(
      BitloopsTypesMapping.TStatements,
    );
    return statementList.statements;
  }
}
