import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TDomainCreateMethod } from '../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';
import { DomainCreateParameterNode } from './DomainCreateParameterNode.js';

export class DomainCreateNode extends IntermediateASTNode<TDomainCreateMethod> {
  private static classNodeName = 'create';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TDomainCreateMethod, metadata, DomainCreateNode.classNodeName);
  }

  getParameterNode(): DomainCreateParameterNode {
    return this.getChildNodeByType<DomainCreateParameterNode>(
      BitloopsTypesMapping.TDomainConstructorParameter,
    );
  }
}
