import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class ConditionNode extends IntermediateASTNode {
  private static classNodeName = 'condition';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TCondition, metadata, ConditionNode.classNodeName);
  }
}
