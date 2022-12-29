import { BitloopsTypesMapping, TBitloopsTypesValues } from '../../../../helpers/mappings.js';
import { IntermediateASTValidationError } from '../../types.js';

export type TNodeLineData = {
  line: number;
  column: number;
};
export type TNodeMetadata = {
  start: TNodeLineData;
  end: TNodeLineData;
  fileId?: string;
};

export const ROOT_TYPE = 'Root';
export type TNodeType = TBitloopsTypesValues | typeof ROOT_TYPE;

export class IntermediateASTNodeValidationError extends IntermediateASTValidationError {}

// eslint-disable-next-line @typescript-eslint/ban-types
export abstract class IntermediateASTNode<T extends {}> {
  protected nodeType: TNodeType;
  private children: IntermediateASTNode<T>[];
  private nextSibling: IntermediateASTNode<T>;
  private parent: IntermediateASTNode<T>;
  private metaData: TNodeMetadata;
  private value: T;
  protected classNodeName: string;

  constructor(nodeType: TNodeType, metadata: TNodeMetadata, classNodeName: string) {
    this.nodeType = nodeType;
    this.metaData = metadata;
    this.children = [];
    this.classNodeName = classNodeName;
  }

  public getValue(): T {
    return this.value;
  }

  public setValue(value: any): any {
    this.value = value;
  }

  public getNodeType(): TNodeType {
    return this.nodeType;
  }

  public setNodeType(nodeType: TBitloopsTypesValues): void {
    this.nodeType = nodeType;
  }

  public setClassNodeName(classNodeName: string) {
    this.classNodeName = classNodeName;
  }

  public getClassNodeName(): string {
    return this.classNodeName;
  }

  public getParent(): IntermediateASTNode<T> {
    return this.parent;
  }

  public getChildren(): IntermediateASTNode<T>[] {
    return this.children;
  }
  public isLeaf(): boolean {
    return this.children.length == 0;
  }

  public isRoot(): boolean {
    return this.nodeType === ROOT_TYPE;
  }

  public getMetadata(): TNodeMetadata {
    return this.metaData;
  }

  public setMetadata(metaData: TNodeMetadata) {
    this.metaData = metaData;
  }

  private setParent(parent: IntermediateASTNode<T>) {
    this.parent = parent;
  }

  public addChild(childNode: IntermediateASTNode<any>): void {
    childNode.setParent(this);
    const numOfChildren = this.children.length;
    if (numOfChildren > 0) {
      const previousSibling = this.children[numOfChildren - 1];
      previousSibling.addSibling(childNode);
    }
    this.children.push(childNode);
  }

  public removeChild(childNode: IntermediateASTNode<T>): void {
    const index = this.children.indexOf(childNode);
    if (index === -1) throw new Error('Could not find child');
    if (index > 0) {
      const previousSibling = this.children[index - 1];
      previousSibling.addSibling(null);
    }
    this.children.splice(index, 1);
  }

  public replaceChild(
    childNodeTobeReplaced: IntermediateASTNode<T>,
    newChildNode: IntermediateASTNode<T>,
  ): void {
    newChildNode.setParent(this);
    const index = this.children.indexOf(childNodeTobeReplaced);
    if (index === -1) throw new Error('Could not find child');
    if (index > 0) {
      const previousSibling = this.children[index - 1];
      previousSibling.addSibling(newChildNode);
    }
    this.children.splice(index, 1, newChildNode);
  }

  private addSibling<L extends T>(siblingNode: IntermediateASTNode<L>): void {
    this.nextSibling = siblingNode;
  }

  public getFirstChild(): IntermediateASTNode<T> {
    return this.children[0];
  }

  public getNextSibling(): IntermediateASTNode<T> | null {
    return this.nextSibling ?? null;
  }

  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  public buildArrayValue(): void {
    const children = this.getChildren();
    this.value = { [this.classNodeName]: [] };
    children.forEach((child) => {
      this.value[this.classNodeName].push(child.value);
    });
  }

  public buildLeafValue(value: T): void {
    this.value = {
      [this.classNodeName]: value,
    };
  }

  public buildObjectValue(): void {
    const children = this.getChildren();
    this.value = { [this.classNodeName]: {} };
    children.forEach((child) => {
      this.value[this.classNodeName] = { ...this.value[this.classNodeName], ...child.value };
    });
  }

  public validate(): void | IntermediateASTNodeValidationError {
    return;
  }

  // private equals(intermediateASTNode: IntermediateASTNode) {
  //   if (JSON.stringify(this.value) === JSON.stringify(intermediateASTNode.value)) {
  //     return true;
  //   }
  //   return false;
  // }

  static isIntermediateASTNodeValidationError(
    value: void | IntermediateASTNodeValidationError,
  ): value is IntermediateASTNodeValidationError {
    if (value instanceof IntermediateASTNodeValidationError) {
      return true;
    }
    return false;
  }

  IsStatementListNode(): boolean {
    return this.nodeType === BitloopsTypesMapping.TStatements;
  }

  IsEntityIdentifierNode(): boolean {
    return this.nodeType === BitloopsTypesMapping.TEntityIdentifier;
  }

  protected getChildNodeByType<T extends IntermediateASTNode>(
    nodeType: TBitloopsTypesValues,
  ): T | null {
    const children = this.getChildren();
    return (children.find((child) => child.getNodeType() === nodeType) as T) ?? null;
  }

  protected getChildrenNodesByType<T extends IntermediateASTNode>(
    nodeType: TBitloopsTypesValues,
  ): Array<T> | [] {
    const children = this.getChildren();
    return (children.filter((child) => child.getNodeType() === nodeType) as T[]) ?? null;
  }
}
