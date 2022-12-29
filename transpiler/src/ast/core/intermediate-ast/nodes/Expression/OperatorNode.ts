import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { Toperator } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'operator';

export class OperatorNode extends IntermediateASTNode<Toperator> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.Toperator, metadata, NAME);
  }
}
