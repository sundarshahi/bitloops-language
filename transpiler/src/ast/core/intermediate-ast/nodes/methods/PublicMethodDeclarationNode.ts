import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDomainPublicMethod } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class PublicMethodDeclarationNode extends IntermediateASTNode<TDomainPublicMethod> {
  private static classNodeName = 'publicMethod';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TDomainPublicMethod,
      metadata,
      PublicMethodDeclarationNode.classNodeName,
    );
  }
}
