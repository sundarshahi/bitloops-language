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
import {
  getLanguageFileExtension,
  isLanguageSupported,
  SupportedLanguages,
} from '../../helpers/supportedLanguages.js';
import { camelCase, pascalCase, kebabCase } from '../../helpers/caseStyles.js';
import { ClassTypes } from './commons/index.js';

const BOUNDED_CONTEXTS = 'bounded-contexts';

const getTargetFileDestination = (
  boundedContext: string,
  moduleName: string,
  classType: string,
  className: string,
  targetLanguage = SupportedLanguages.TypeScript as string,
  useCase?: string,
): { path: string; filename: string } => {
  if (!boundedContext || boundedContext.trim() === '') {
    throw new Error('Bounded context is required');
  }
  if (!moduleName || moduleName.trim() === '') {
    throw new Error('Module is required');
  }
  if (!isLanguageSupported(targetLanguage)) {
    throw new Error(`Language ${targetLanguage} is not supported`);
  }
  if ((classType === ClassTypes.Controller || classType === ClassTypes.UseCase) && !useCase) {
    throw new Error('Use case is required');
  }
  const BOUNDED_CONTEXT = {
    name: boundedContext,
    pascalCase: pascalCase(boundedContext),
    camelCase: camelCase(boundedContext),
    kebabCase: kebabCase(boundedContext),
  };
  const MODULE = {
    name: moduleName,
    pascalCase: pascalCase(moduleName),
    camelCase: camelCase(moduleName),
    kebabCase: kebabCase(moduleName),
  };
  // const USE_CASE = {
  //   name: useCase,
  //   pascalCase: useCase ? pascalCase(useCase) : undefined,
  //   camelCase: useCase ? camelCase(useCase) : undefined,
  //   kebabCase: useCase ? kebabCase(useCase) : undefined,
  // };
  const result = {
    path: '',
    filename: '',
  };
  switch (classType) {
    case ClassTypes.Aggregate:
    case ClassTypes.ValueObject:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/domain/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.DomainError:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/domain/`;
      result.filename = 'errors' + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.Props:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/domain/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.Controller:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/infra/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.UseCase:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/application/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.DTO:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/dtos/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.Package:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/packages`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.RepoPort:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/domain/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    case ClassTypes.RepoAdapter:
      result.path = `./src/${BOUNDED_CONTEXTS}/${BOUNDED_CONTEXT.kebabCase}/${MODULE.kebabCase}/infra/repos/`;
      result.filename = className + getLanguageFileExtension(targetLanguage);
      break;
    default:
      throw new Error(`Class type ${classType} is not supported`);
  }
  return result;
};

const getFilePathRelativeToModule = (
  classType: string,
  className: string,
  targetLanguage = SupportedLanguages.TypeScript as string,
): { path: string; filename: string; extension: string } => {
  const result = {
    path: '',
    filename: '',
    extension: '',
  };
  switch (classType) {
    case ClassTypes.Props:
    case ClassTypes.Aggregate:
    case ClassTypes.ValueObject:
      result.path = 'domain/';
      result.filename = className;
      break;
    case ClassTypes.DomainError:
      result.path = 'domain/';
      result.filename = 'errors';
      break;
    case ClassTypes.Controller:
      result.path = 'infra/';
      result.filename = className;
      break;
    case ClassTypes.UseCase:
      result.path = 'application/';
      result.filename = className;
      break;
    case ClassTypes.DTO:
      result.path = 'dtos/';
      result.filename = className;
      break;
    case ClassTypes.Package:
      result.path = 'packages/';
      result.filename = className;
      break;
    default:
      throw new Error(`Class type ${classType} is not supported`);
  }
  result.extension = getLanguageFileExtension(targetLanguage);
  return result;
};

export { getTargetFileDestination, getFilePathRelativeToModule };