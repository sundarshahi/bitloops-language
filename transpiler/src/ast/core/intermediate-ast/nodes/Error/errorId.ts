import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TErrorId } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class ErrorIdNode extends IntermediateASTNode<TErrorId> {
  private static NAME = 'errorId';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TErrorId, metadata, ErrorIdNode.NAME);
  }
}
