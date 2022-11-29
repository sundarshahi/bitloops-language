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

import { LogicalExpressionBuilder } from './../../../../refactoring-arch/intermediate-ast/builders/expressions/Logical/logicalExpressionBuilder.js';
import BitloopsParser from '../../../../parser/core/grammar/BitloopsParser.js';
import BitloopsVisitor from '../BitloopsVisitor.js';
import { AdditiveExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/additiveExpresssion.js';
// import { AdditiveExpressionNode } from '../../../../refactoring-arch/intermediate-ast/nodes/Expression/AdditiveExpression.js';
import { OperatorBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/operatorBuilder.js';
import { MultiplicativeExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/multiplicativeExpression.js';
import { LeftExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/leftExpressionBuilder.js';
import { LiteralBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/literal/LiteralBuilder.js';
import { RightExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/rightExpressionBuilder.js';
import { ExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/ExpressionBuilder.js';
import { ExpressionNode } from '../../../../refactoring-arch/intermediate-ast/nodes/Expression/ExpressionNode.js';
import { ParenthesizedExpressionNodeBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/parenthesizedExprBuilder.js';
import { RelationalExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/relationalBuilder.js';
import { EqualityExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/equalityBuilderExpression.js';
import { LogicalAndExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/Logical/logicalAndExpressionBuilder.js';
import { LogicalOrExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/Logical/logicalOrExpressionBuilder.js';
import { LogicalXorExpressionBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/Logical/logicalXorExpressionBuilder.js';
import { NotExpressionNodeBuilder } from '../../../../refactoring-arch/intermediate-ast/builders/expressions/Logical/notExpression.js';

export const equalityExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.EqualityExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new EqualityExpressionBuilder()
    .withLeftExpression(left)
    .withOperator(operator)
    .withRightExpression(right)
    .build();

  const expressionNode = new ExpressionBuilder().withExpression(node).build();

  return expressionNode;
};

export const relationalExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.RelationalExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new RelationalExpressionBuilder()
    .withLeftExpression(left)
    .withOperator(operator)
    .withRightExpression(right)
    .build();

  const expressionNode = new ExpressionBuilder().withExpression(node).build();

  return expressionNode;
};

export const logicalAndExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.LogicalAndExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new LogicalAndExpressionBuilder()
    .withLeftExpression(left)
    .withOperator(operator)
    .withRightExpression(right)
    .build();

  const logicalExpression = new LogicalExpressionBuilder().withANDExpression(node).build();
  const expressionNode = new ExpressionBuilder().withExpression(logicalExpression).build();

  return expressionNode;
};

export const logicalOrExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.LogicalOrExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new LogicalOrExpressionBuilder()
    .withLeftExpression(left)
    .withOperator(operator)
    .withRightExpression(right)
    .build();

  const logicalExpression = new LogicalExpressionBuilder().withORExpression(node).build();
  const expressionNode = new ExpressionBuilder().withExpression(logicalExpression).build();

  return expressionNode;
};

export const logicalXorExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.LogicalXorExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new LogicalXorExpressionBuilder()
    .withLeftExpression(left)
    .withOperator(operator)
    .withRightExpression(right)
    .build();

  const logicalExpression = new LogicalExpressionBuilder().withXORExpression(node).build();
  const expressionNode = new ExpressionBuilder().withExpression(logicalExpression).build();

  return expressionNode;
};

export const logicalNotExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.NotExpressionContext,
): ExpressionNode => {
  const expression = thisVisitor.visit(ctx.expression());
  const notExpression = new NotExpressionNodeBuilder().withExpression(expression).build();
  const logicalExpression = new LogicalExpressionBuilder().withNOTExpression(notExpression).build();
  const expressionNode = new ExpressionBuilder().withExpression(logicalExpression).build();
  return expressionNode;
};

export const multiplicativeExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.MultiplicativeExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new MultiplicativeExpressionBuilder()
    .withLeftExpression(left)
    .withRightExpression(right)
    .withOperator(operator)
    .build();

  const expressionNode = new ExpressionBuilder().withExpression(node).build();

  return expressionNode;
};

export const additiveExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.AdditiveExpressionContext,
): ExpressionNode => {
  const leftExp = thisVisitor.visit(ctx.expression(0));
  const left = new LeftExpressionBuilder().withExpression(leftExp).build();
  const rightExp = thisVisitor.visit(ctx.expression(1));
  const right = new RightExpressionBuilder().withExpression(rightExp).build();

  const operator = new OperatorBuilder().withSymbol(ctx.op.text).build();

  const node = new AdditiveExpressionBuilder()
    .withLeftExpression(left)
    .withRightExpression(right)
    .withOperator(operator)
    .build();
  const expressionNode = new ExpressionBuilder().withExpression(node).build();

  return expressionNode;
};

export const parenthesizedExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctx: BitloopsParser.ParenthesizedExpressionContext,
) => {
  const expression = thisVisitor.visit(ctx.expression());
  const parenthesizedExpr = new ParenthesizedExpressionNodeBuilder()
    .withExpression(expression)
    .build();
  return new ExpressionBuilder().withExpression(parenthesizedExpr).build();
  // return {
  //   expression: {
  //     parenthesizedExpression: expression.expression,
  //   },
  // };
};
export const LiteralExpressionVisitor = (
  thisVisitor: BitloopsVisitor,
  ctxLiteral: BitloopsParser.LiteralExpressionContext,
): ExpressionNode => {
  const actualLiteral = thisVisitor.visit(ctxLiteral.literal());
  const literalExpr = new LiteralBuilder().withLiteral(actualLiteral).build();
  return new ExpressionBuilder().withExpression(literalExpr).build();
};
