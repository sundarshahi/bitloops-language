import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDomainPrivateMethod, TDomainPrivateMethods } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class PrivateMethodDeclarationListNode extends IntermediateASTNode<{
  privateMethods: TDomainPrivateMethods;
}> {
  private static classNodeName = 'privateMethods';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TDomainPrivateMethods,
      metadata,
      PrivateMethodDeclarationListNode.classNodeName,
    );
  }
}
