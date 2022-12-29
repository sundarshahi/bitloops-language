import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TRegularCase } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class SwitchRegularCaseNode extends IntermediateASTNode<TRegularCase> {
  private static classNodeName = 'regularCase';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TSwitchCase, metadata, SwitchRegularCaseNode.classNodeName);
  }
}
