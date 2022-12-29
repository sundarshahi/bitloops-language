import { BitloopsTypesMapping } from '../../../../../../../helpers/mappings.js';
import { TDomainEvaluationExpression } from '../../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../../IntermediateASTNode.js';

const NAME = 'props';
export class DomainEvaluationPropsNode extends IntermediateASTNode<{
  props: TDomainEvaluationExpression;
}> {
  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TDomainEvaluationProps, metadata, NAME);
  }
}
