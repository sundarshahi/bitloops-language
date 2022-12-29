import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TArgumentList } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'argumentList';

export class ArgumentListNode extends IntermediateASTNode<TArgumentList> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TArgumentList, metadata, NAME);
  }
}
