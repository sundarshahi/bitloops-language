/**
 *  Bitloops Language
 *  Copyright (C) 2022 Bitloops S.A.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 *  For further information you can contact legal(at)bitloops.com.
 */

import { TTargetDependenciesTypeScript, TMethodCallExpression } from '../../../../../../types.js';
import { BitloopsTypesMapping } from '../../../../../../helpers/mappings.js';
import { modelToTargetLanguage } from '../../../modelToTargetLanguage.js';

export const methodCallExpressionToTargetLanguage = (
  value: TMethodCallExpression,
): TTargetDependenciesTypeScript => {
  const { methodCallExpression } = value;
  const { argumentList, expression } = methodCallExpression;

  const expressionResult = modelToTargetLanguage({
    type: BitloopsTypesMapping.TMemberDotExpression,
    value: expression,
  });

  const argumentListResult = modelToTargetLanguage({
    type: BitloopsTypesMapping.TArgumentDependencies,
    value: argumentList,
  });

  return {
    output: `${expressionResult.output}${argumentListResult.output}`,
    dependencies: [...expressionResult.dependencies, ...argumentListResult.dependencies],
  };
};
