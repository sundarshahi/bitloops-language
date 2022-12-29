import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TGraphQLControllerExecute } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class GraphQLControllerExecuteNode extends IntermediateASTNode<TGraphQLControllerExecute> {
  private static classNodeName = 'execute';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TGraphQLControllerExecute,
      metadata,
      GraphQLControllerExecuteNode.classNodeName,
    );
  }
}
