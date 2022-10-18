import { TLogicalSingleExpression } from '../../../../types.js';
import { BitloopsTypesMapping } from '../../commons/index.js';
import { modelToTargetLanguage } from '../../index.js';
import { isLogicalORExpression } from './type-guards/index.js';

export const logicalSingleExpressionToTargetLanguage = (
  expression: TLogicalSingleExpression,
  language: string,
): string => {
  if (isLogicalORExpression(expression.logicalExpression)) {
    const left = modelToTargetLanguage({
      type: BitloopsTypesMapping.TSingleExpression,
      value: expression.logicalExpression.orExpression.left,
      targetLanguage: language,
    });
    const right = modelToTargetLanguage({
      type: BitloopsTypesMapping.TSingleExpression,
      value: expression.logicalExpression.orExpression.right,
      targetLanguage: language,
    });
    return `${left} || ${right}`;
  }
  throw new Error('Type of Logical Expression not supported');
};