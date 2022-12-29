import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TOkErrorReturnType } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class ReturnOkErrorTypeNode extends IntermediateASTNode<TOkErrorReturnType> {
  private static classNodeName = 'returnType';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TOkErrorReturnType, metadata, ReturnOkErrorTypeNode.classNodeName);
  }
}
