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
import { TRegularCase, TDefaultCase } from './../../../../types.js';
import { SupportedLanguages } from '../../../../helpers/supportedLanguages.js';
import { modelToTargetLanguage } from '../../index.js';
import { BitloopsTypesMapping } from '../../commons/index.js';

const switchRegularCasesToTargetLanguage = (
  variable: TRegularCase[],
  targetLanguage: string,
): string => {
  const switchCases = variable.map((switchCase: TRegularCase) => {
    return modelToTargetLanguage({
      type: BitloopsTypesMapping.TRegularCase,
      value: switchCase,
      targetLanguage,
    });
  });

  const switchRegularCasesLangMapping: Record<string, (cases: string[]) => string> = {
    [SupportedLanguages.TypeScript]: (switchCases: string[]) => switchCases.join(' '),
  };
  return switchRegularCasesLangMapping[targetLanguage](switchCases);
};

const switchDefaultCaseToTargetLanguage = (
  variable: TDefaultCase,
  targetLanguage: string,
): string => {
  const defaultCase = modelToTargetLanguage({
    type: BitloopsTypesMapping.TDefaultCase,
    value: variable,
    targetLanguage,
  });

  const switchDefaultCaseLangMapping: Record<string, (defaultCase: string) => string> = {
    [SupportedLanguages.TypeScript]: (defaultCase: string) => defaultCase,
  };
  return switchDefaultCaseLangMapping[targetLanguage](defaultCase);
};

export { switchRegularCasesToTargetLanguage, switchDefaultCaseToTargetLanguage };