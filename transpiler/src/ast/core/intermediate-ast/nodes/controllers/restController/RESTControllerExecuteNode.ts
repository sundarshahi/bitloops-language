import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TRESTControllerExecute } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class RESTControllerExecuteNode extends IntermediateASTNode<TRESTControllerExecute> {
  private static classNodeName = 'execute';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TRESTControllerExecute,
      metadata,
      RESTControllerExecuteNode.classNodeName,
    );
  }
}
