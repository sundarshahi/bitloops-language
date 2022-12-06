import BitloopsParser from '../../../../parser/core/grammar/BitloopsParser.js';
import BitloopsVisitor from '../BitloopsVisitor.js';
import { parameterListVisitor } from './parameterList.js';

export const domainErrorDeclarationVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.DomainErrorDeclarationContext,
): any => {
  const errorName: string = ctx.domainErrorIdentifier().getText();
  // TEvaluationFields, TODO fix temp as any
  // const fieldsList = evaluationFieldListVisitor(thisVisitor, ctx.evaluationFieldList()) as any;
  const fieldsList = thisVisitor.visit(ctx.evaluationFieldList());
  if (fieldsList.length != 2) {
    throw new TypeError('DomainErrorDeclaration must have two fields: ErrorId and message');
  }
  const errorId =
    fieldsList.find((field) => field.name === 'errorId').expression ||
    ((): never => {
      throw new TypeError('DomainErrorDeclaration misses ErrorId field');
    })();
  const message =
    fieldsList.find((field) => field.name === 'message').expression ||
    ((): never => {
      throw new TypeError('DomainErrorDeclaration misses message field');
    })();
  return {
    DomainErrors: {
      [errorName]: {
        parameters: parameterListVisitor(thisVisitor, ctx.parameterList()),
        errorId: { expression: errorId },
        message: { expression: message },
      },
    },
  };
};
