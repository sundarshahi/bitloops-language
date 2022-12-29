import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TErrorIdentifiers } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class ErrorIdentifiersNode extends IntermediateASTNode<TErrorIdentifiers> {
  private static classNodeName = 'errors';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TErrorIdentifiers, metadata, ErrorIdentifiersNode.classNodeName);
  }
}
