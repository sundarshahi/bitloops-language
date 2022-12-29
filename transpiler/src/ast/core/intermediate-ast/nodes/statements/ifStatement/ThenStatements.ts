import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TStatements } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class ThenStatementsNode extends IntermediateASTNode<{
  thenStatements: { statements: TStatements };
}> {
  private static classNodeName = 'thenStatements';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TThenStatements, metadata, ThenStatementsNode.classNodeName);
  }
}
