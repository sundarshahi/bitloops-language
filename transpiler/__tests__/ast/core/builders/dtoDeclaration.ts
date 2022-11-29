import { IBuilder } from '../../../../src/ast/core/intermediate-ast/builders/IBuilder.js';
import {
  TDTO,
  TDTOIdentifier,
  TVariables,
  DTOKey,
  DTOIdentifierKey,
  fieldsKey,
} from '../../../../src/types.js';

export class DTODeclarationBuilder implements IBuilder<TDTO> {
  private identifierName: TDTOIdentifier;
  private fields: TVariables;

  public withIdentifier(identifierName: TDTOIdentifier): DTODeclarationBuilder {
    this.identifierName = identifierName;
    return this;
  }

  public withVariables(fields: TVariables): DTODeclarationBuilder {
    this.fields = fields;
    return this;
  }

  public build(): TDTO {
    const dto = {
      [DTOKey]: {
        [DTOIdentifierKey]: this.identifierName,
        [fieldsKey]: this.fields,
      },
    };

    return dto;
  }
}