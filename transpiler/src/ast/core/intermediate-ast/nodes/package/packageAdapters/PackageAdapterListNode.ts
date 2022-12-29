import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TPackageAdapterNames } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class PackageAdapterListNode extends IntermediateASTNode<{
  adapters: TPackageAdapterNames;
}> {
  private static classNodeName = 'adapters';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TPackageAdapterList, metadata, PackageAdapterListNode.classNodeName);
  }
}
