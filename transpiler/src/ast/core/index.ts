import { BitloopsLanguageASTContext } from '../../index.js';
import { IntermediateASTTree } from '../../refactoring-arch/intermediate-ast/IntermediateASTTree.js';
import { TModuleName, TBoundedContextName } from '../../types.js';
import BitloopsVisitor from './BitloopsVisitor/BitloopsVisitor.js';

export type TBoundedContext = Record<TModuleName, IntermediateASTTree>;
export type TBoundedContexts = Record<TBoundedContextName, TBoundedContext>;

export interface IBitloopsIntermediateASTParser {
  parse: (ast: BitloopsLanguageASTContext) => TBoundedContexts | BitloopsIntermediateASTParserError;
}

export class BitloopsIntermediateASTParserError extends Error {}

export class BitloopsIntermediateASTParser implements IBitloopsIntermediateASTParser {
  parse(ast: BitloopsLanguageASTContext): TBoundedContexts | BitloopsIntermediateASTParserError {
    const boundedContexts: TBoundedContexts = {};
    for (const [boundedContextName, boundedContext] of Object.entries(ast)) {
      for (const [moduleName, module] of Object.entries(boundedContext)) {
        for (const [_fileId, ASTData] of Object.entries(module)) {
          const bitloopsVisitor = new BitloopsVisitor();
          bitloopsVisitor.visit(ASTData.initialAST);
          const { intermediateASTTree } = bitloopsVisitor;
          //TODO intermediateASTTree.setMetadata(_fileId, lines)

          if (boundedContexts[boundedContextName] === undefined) {
            boundedContexts[boundedContextName] = {
              [moduleName]: intermediateASTTree,
            };
          } else if (boundedContexts[boundedContextName][moduleName] === undefined) {
            boundedContexts[boundedContextName][moduleName] = intermediateASTTree;
          } else {
            // merge trees
            const existingTree = boundedContexts[boundedContextName][moduleName];
            boundedContexts[boundedContextName][moduleName] =
              existingTree.mergeWithTree(intermediateASTTree);
          }
        }
      }
    }
    return boundedContexts;
  }
}
