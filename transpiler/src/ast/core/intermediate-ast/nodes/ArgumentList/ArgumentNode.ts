import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TArgument } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'argument';

export class ArgumentNode extends IntermediateASTNode<TArgument> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TArgument, metadata, NAME);
  }
}
