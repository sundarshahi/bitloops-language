import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDefinitionMethods } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'methodDefinitionList';
export class MethodDefinitionListNode extends IntermediateASTNode<TDefinitionMethods> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TDefinitionMethods, metadata, NAME);
  }
}
