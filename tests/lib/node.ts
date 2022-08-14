import {
  Break as BreakNode,
  Emphasis as EmphasisNode,
  Heading as HeadingNode,
  Paragraph as ParagraphNode,
  Root as RootNode,
  Strong as StrongNode,
  Text as TextNode,
} from "mdast";
import { Node } from "unist";
import { u } from "unist-builder";

type TestNodeBuilder<N extends Node> = (props: Omit<N, "type">) => N;

export const Root: TestNodeBuilder<RootNode> = ({ data, children }) => {
  return u("root", { data }, children);
};

export const Paragraph: TestNodeBuilder<ParagraphNode> = ({ children }) => {
  return u("paragraph", children);
};

export const Heading: TestNodeBuilder<HeadingNode> = ({ depth, children }) => {
  return u("heading", { depth }, children);
};

export const Emphasis: TestNodeBuilder<EmphasisNode> = ({ children }) => {
  return u("emphasis", children);
};

export const Strong: TestNodeBuilder<StrongNode> = ({ children }) => {
  return u("strong", children);
};

export const Text: TestNodeBuilder<TextNode> = ({ value }) => {
  return u("text", value);
};

export const Break: TestNodeBuilder<BreakNode> = () => {
  return u("break");
};
