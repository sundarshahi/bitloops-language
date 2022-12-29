import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDefinitionMethodInfo } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

const NAME = 'methodDefinition';
export class MethodDefinitionNode extends IntermediateASTNode<TDefinitionMethodInfo> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TDefinitionMethodInfo, metadata, NAME);
  }
}
