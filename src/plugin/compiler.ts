import { Compiler, Processor } from "unified";

const compile: Compiler = (node, file) => {
  // Set parse result to "result"
  file.result = node;

  // Return stringified results (but not used).
  return "";
};

export function compiler(this: Processor) {
  this.Compiler = compile;
}
