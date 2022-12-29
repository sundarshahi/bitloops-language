import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TRestMethods } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class RESTMethodNode extends IntermediateASTNode<{ method: TRestMethods }> {
  private static classNodeName = 'method';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TRESTMethods, metadata, RESTMethodNode.classNodeName);
  }

  getRestMethodValue(): string {
    const identifierClassNodeName = this.getClassNodeName();
    const identifierValue = this.getValue();
    const dtoIdentifierName: string = identifierValue[identifierClassNodeName];
    return dtoIdentifierName;
  }
}
