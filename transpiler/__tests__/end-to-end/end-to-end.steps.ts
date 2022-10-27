/**
 *  Bitloops Language CLI
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
import { defineFeature, loadFeature } from 'jest-cucumber';
import { decode, d } from 'bitloops-gherkin';

import {
  BitloopsIntermediateASTParser,
  BitloopsLanguageASTContext,
  BitloopsParser,
  BitloopsParserError,
  BitloopsTargetGenerator,
} from '../../src/index.js';

const feature = loadFeature('__tests__/end-to-end/end-to-end.feature');

defineFeature(feature, (test) => {
  test('End to end transpile is valid', ({ given, when, then }) => {
    let blString: string;
    let intermediateAST;
    const formatterConfig = null;
    let transpileOutput;
    let result;

    given(/^A valid blInput (.*)$/, (arg0) => {
      blString = decode(arg0);
    });

    when('I transpile the blInput', () => {
      const parser = new BitloopsParser();
      const initialModelOutput = parser.parse([
        {
          boundedContext: 'Hello World',
          module: 'core',
          fileId: 'testFile.bl',
          fileContents: blString,
        },
      ]);
      const intermediateParser = new BitloopsIntermediateASTParser();
      if (!(initialModelOutput instanceof BitloopsParserError)) {
        intermediateAST = intermediateParser.parse(
          initialModelOutput as unknown as BitloopsLanguageASTContext,
        );
        const targetGenerator = new BitloopsTargetGenerator();
        result = targetGenerator.generate({
          intermediateAST,
          formatterConfig,
          targetLanguage: 'Typescript',
          setupData: null,
        })[1].fileContent;
      }
    });

    then(/^I should get (.*)$/, (arg0) => {
      transpileOutput = d(arg0);
      expect(result).toEqual(transpileOutput);
    });
  });
});
