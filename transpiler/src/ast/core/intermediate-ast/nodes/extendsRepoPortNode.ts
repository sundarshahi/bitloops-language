import { BitloopsTypesMapping } from '../../../../helpers/mappings.js';
import { TExtendsRepoPorts } from '../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from './IntermediateASTNode.js';

const NAME = 'extendsRepoPorts';
export class ExtendsRepoPortsNode extends IntermediateASTNode<{
  extendsRepoPorts: TExtendsRepoPorts;
}> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TExtendsRepoPorts, metadata, NAME);
  }
}
