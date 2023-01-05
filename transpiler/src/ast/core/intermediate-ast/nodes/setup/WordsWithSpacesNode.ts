import { BitloopsTypesMapping } from '../../../../../helpers/mappings.js';
import { IntermediateASTNode, TNodeMetadata } from '../IntermediateASTNode.js';

export class WordsWithSpacesNode extends IntermediateASTNode {
  private static classNodeName = 'wordsWithSpaces';

  constructor(metadata?: TNodeMetadata) {
    super(BitloopsTypesMapping.TWordsWithSpaces, metadata, WordsWithSpacesNode.classNodeName);
  }
}