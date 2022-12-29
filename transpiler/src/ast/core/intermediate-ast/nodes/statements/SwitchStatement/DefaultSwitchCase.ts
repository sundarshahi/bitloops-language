import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TDefaultCase } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class DefaultSwitchCaseNode extends IntermediateASTNode<{ defaultCase: TDefaultCase }> {
  private static classNodeName = 'defaultCase';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TDefaultCase, metadata, DefaultSwitchCaseNode.classNodeName);
  }
}
