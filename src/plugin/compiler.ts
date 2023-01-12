import { Root } from "mdast";
import { Compiler, Processor } from "unified";
import { Node } from "unist";

const compile: Compiler<Node, Root> = (node) => node;

export function compiler(this: Processor) {
  this.Compiler = compile;
}
