import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TParameterList } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';
import { ParameterNode } from './ParameterNode.js';

const NAME = 'parameters';

export class ParameterListNode extends IntermediateASTNode<TParameterList> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TParameterList, metadata, NAME);
  }

  getIdentifiers(): string[] {
    return this.getChildren().map((child: ParameterNode) => child.getIdentifier());
  }
}
