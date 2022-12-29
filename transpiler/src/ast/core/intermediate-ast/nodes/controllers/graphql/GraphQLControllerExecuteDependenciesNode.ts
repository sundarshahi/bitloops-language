import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { TGraphQLControllerDependencies } from '../../../../../../types.js';
import { IntermediateASTNode, TNodeMetadata } from '../../IntermediateASTNode.js';

export class GraphQLControllerExecuteDependenciesNode extends IntermediateASTNode<{
  execute: TGraphQLControllerDependencies;
}> {
  private static classNodeName = 'dependencies';

  constructor(metadata?: TNodeMetadata) {
    super(
      BitloopsTypesMapping.TGraphQLControllerExecuteDependencies,
      metadata,
      GraphQLControllerExecuteDependenciesNode.classNodeName,
    );
  }
}
