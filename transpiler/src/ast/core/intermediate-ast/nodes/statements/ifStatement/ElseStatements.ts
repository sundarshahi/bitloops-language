import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TStatements } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class ElseStatementsNode extends IntermediateASTNode<{
  elseStatements: { statements: TStatements };
}> {
  private static classNodeName = 'elseStatements';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TElseStatements, metadata, ElseStatementsNode.classNodeName);
  }
}
