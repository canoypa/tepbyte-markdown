import {
  Break as BreakNode,
  Emphasis as EmphasisNode,
  Heading as HeadingNode,
  Paragraph as ParagraphNode,
  Root as RootNode,
  Strong as StrongNode,
  Text as TextNode,
} from "mdast";

type RootProps = {
  data?: any;
  children: any[];
};
export const Root = ({ data, children }: RootProps): RootNode => {
  return {
    type: "root",
    data: data,
    children,
  };
};

type ParagraphProps = {
  children: any[];
};
export const Paragraph = ({ children }: ParagraphProps): ParagraphNode => {
  return {
    type: "paragraph",
    children,
  };
};

type HeadingProps = {
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  children: any[];
};
export const Heading = ({ depth, children }: HeadingProps): HeadingNode => {
  return {
    type: "heading",
    depth,
    children,
  };
};

type EmphasisProps = {
  children: any[];
};
export const Emphasis = ({ children }: EmphasisProps): EmphasisNode => {
  return {
    type: "emphasis",
    children,
  };
};

type StrongProps = {
  children: any[];
};
export const Strong = ({ children }: StrongProps): StrongNode => {
  return {
    type: "strong",
    children,
  };
};

type TextProps = string;
export const Text = (value: TextProps): TextNode => {
  return {
    type: "text",
    value,
  };
};

export const Break = (): BreakNode => {
  return {
    type: "break",
  };
};
