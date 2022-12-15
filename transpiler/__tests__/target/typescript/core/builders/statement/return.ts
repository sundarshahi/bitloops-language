import { ReturnStatementNodeBuilder } from '../../../../../../src/ast/core/intermediate-ast/builders/statements/ReturnStatementBuilder.js';
import { ArgumentNode } from '../../../../../../src/ast/core/intermediate-ast/nodes/ArgumentList/ArgumentNode.js';
import { ExpressionNode } from '../../../../../../src/ast/core/intermediate-ast/nodes/Expression/ExpressionNode.js';
import { ReturnStatementNode } from '../../../../../../src/ast/core/intermediate-ast/nodes/statements/ReturnStatementNode.js';
import { ArgumentListDirector } from '../argumentList.js';
import { ExpressionBuilderDirector } from '../expression.js';

export class ReturnStatementBuilderDirector {
  buildReturn(expr: ExpressionNode): ReturnStatementNode {
    return new ReturnStatementNodeBuilder().withExpression(expr).build();
  }

  buildThisMethodReturn(methodName: string, args: ArgumentNode[]): ReturnStatementNode {
    const methodExpr = new ExpressionBuilderDirector().buildMemberDotExpression(
      new ExpressionBuilderDirector().buildThisExpression(),
      methodName,
    );
    const method = new ExpressionBuilderDirector().buildMethodCallExpression(
      methodExpr,
      new ArgumentListDirector().buildArgumentListWithArgs(args),
    );
    return new ReturnStatementNodeBuilder().withExpression(method).build();
  }
}