import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TAppliedRule } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class AppliedRuleNode extends IntermediateASTNode<TAppliedRule> {
  private static classNodeName = 'appliedRule';
  constructor(metadata: TNodeMetadata) {
    super(BitloopsTypesMapping.TAppliedRule, metadata, AppliedRuleNode.classNodeName);
  }
}
