import { BitloopsTypesMapping } from '../../../../helpers/mappings.js';
import { TConstDeclaration, TRootEntity } from '../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from './IntermediateASTNode.js';

export class ConstDeclarationListNode extends IntermediateASTNode<{
  constants: TConstDeclaration[];
}> {
  private static classNodeName = 'constants';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TConstDeclarationList,
      metadata,
      ConstDeclarationListNode.classNodeName,
    );
  }
}
