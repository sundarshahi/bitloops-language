import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TRegularCase } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class SwitchCasesNode extends IntermediateASTNode<{ cases: TRegularCase[] }> {
  private static classNodeName = 'cases';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TSwitchCases, metadata, SwitchCasesNode.classNodeName);
  }
}
