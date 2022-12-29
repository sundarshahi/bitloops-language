import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TCondition } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'isBrokenIfCondition';
export class IsBrokenConditionNode extends IntermediateASTNode<{
  isBrokenIfCondition: TCondition;
}> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TIsBrokenIfCondition, metadata, NAME);
  }
}
