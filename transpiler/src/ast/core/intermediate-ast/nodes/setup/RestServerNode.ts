import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class RestServerNode extends IntermediateASTNode {
  private static classNodeName = 'restServer';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TServers, metadata, RestServerNode.classNodeName);
  }
}