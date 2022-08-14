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

type TestNodeBuilder<N extends Node> = (props: Omit<N, "type">) => N;

export const Root: TestNodeBuilder<RootNode> = ({ data, children }) => {
  return {
    type: "root",
    data: data,
    children,
  };
};

export const Paragraph: TestNodeBuilder<ParagraphNode> = ({ children }) => {
  return {
    type: "paragraph",
    children,
  };
};

export const Heading: TestNodeBuilder<HeadingNode> = ({ depth, children }) => {
  return {
    type: "heading",
    depth,
    children,
  };
};

export const Emphasis: TestNodeBuilder<EmphasisNode> = ({ children }) => {
  return {
    type: "emphasis",
    children,
  };
};

export const Strong: TestNodeBuilder<StrongNode> = ({ children }) => {
  return {
    type: "strong",
    children,
  };
};

export const Text: TestNodeBuilder<TextNode> = ({ value }) => {
  return {
    type: "text",
    value,
  };
};

export const Break: TestNodeBuilder<BreakNode> = () => {
  return {
    type: "break",
  };
};
