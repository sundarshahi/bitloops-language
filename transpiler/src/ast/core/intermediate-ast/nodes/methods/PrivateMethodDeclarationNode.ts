import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDomainPrivateMethod } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class PrivateMethodDeclarationNode extends IntermediateASTNode<TDomainPrivateMethod> {
  private static classNodeName = 'privateMethod';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TDomainPrivateMethod,
      metadata,
      PrivateMethodDeclarationNode.classNodeName,
    );
  }
}
