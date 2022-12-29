import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDomainPublicMethods } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class PublicMethodDeclarationListNode extends IntermediateASTNode<{
  publicMethods: TDomainPublicMethods;
}> {
  private static classNodeName = 'publicMethods';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TDomainPublicMethods,
      metadata,
      PublicMethodDeclarationListNode.classNodeName,
    );
  }
}
