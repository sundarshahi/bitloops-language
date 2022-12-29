import { BitloopsTypesMapping } from '../../../../helpers/mappings.js';
import { TOptional, optionalKey } from '../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from './IntermediateASTNode.js';

const NAME = 'optional';

export class OptionalNode extends IntermediateASTNode<{ [optionalKey]: TOptional }> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TOptional, metadata, NAME);
  }
}
