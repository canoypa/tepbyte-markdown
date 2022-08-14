import type mdast from "mdast";
import { Node } from "unist";
import { u } from "unist-builder";

type TestNodeBuilder<N extends Node> = (props: Omit<N, "type">) => N;

export const Root: TestNodeBuilder<mdast.Root> = ({ data, children }) => {
  return u("root", { data }, children);
};

export const Paragraph: TestNodeBuilder<mdast.Paragraph> = ({ children }) => {
  return u("paragraph", children);
};

export const Heading: TestNodeBuilder<mdast.Heading> = ({
  depth,
  children,
}) => {
  return u("heading", { depth }, children);
};

export const Emphasis: TestNodeBuilder<mdast.Emphasis> = ({ children }) => {
  return u("emphasis", children);
};

export const Strong: TestNodeBuilder<mdast.Strong> = ({ children }) => {
  return u("strong", children);
};

export const Text: TestNodeBuilder<mdast.Text> = ({ value }) => {
  return u("text", value);
};

export const Break: TestNodeBuilder<mdast.Break> = () => {
  return u("break");
};
