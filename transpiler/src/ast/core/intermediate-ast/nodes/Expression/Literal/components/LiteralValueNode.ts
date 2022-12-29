import { BitloopsTypesMapping } from '../../../../../../../helpers/mappings.js';
import { IntermediateASTNode, TNodeMetadata } from '../../../IntermediateASTNode.js';

const NAME = 'value';

export class LiteralValueNode extends IntermediateASTNode<{ value: string }> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TLiteralValue, metadata, NAME);
  }
}
