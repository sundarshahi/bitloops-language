import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { TNodeMetadata, IntermediateASTNode } from '../IntermediateASTNode.js';
import { PropsIdentifierNode } from '../Props/PropsIdentifierNode.js';
import { TDomainCreateParameter } from '../../../../../types.js';
export class DomainCreateParameterNode extends IntermediateASTNode<TDomainCreateParameter> {
  private static classNodeName = 'domainCreateParameter';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TDomainConstructorParameter,
      metadata,
      DomainCreateParameterNode.classNodeName,
    );
  }

  public static getClassNodeName() {
    return DomainCreateParameterNode.classNodeName;
  }

  public getTypeNode(): PropsIdentifierNode {
    const identifierNode: PropsIdentifierNode = this.getChildNodeByType(
      BitloopsTypesMapping.TPropsIdentifier,
    );
    return identifierNode;
  }
}
