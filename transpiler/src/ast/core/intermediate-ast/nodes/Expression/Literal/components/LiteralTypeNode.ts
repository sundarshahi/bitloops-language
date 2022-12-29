import { BitloopsTypesMapping } from '../../../../../../../helpers/mappings.js';
import { TBitloopsPrimitives, TLiteral } from '../../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../../IntermediateASTNode.js';

const NAME = 'type';

export class LiteralTypeNode extends IntermediateASTNode<{ type: TBitloopsPrimitives | 'number' }> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TLiteralType, metadata, NAME);
  }
}
