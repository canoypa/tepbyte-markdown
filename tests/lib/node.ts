type RootProps = {
  data?: any;
  children: any[];
};
export const Root = ({ data, children }: RootProps) => {
  return {
    type: "root",
    data: data,
    children,
  };
};

type ParagraphProps = {
  children: any[];
};
export const Paragraph = ({ children }: ParagraphProps) => {
  return {
    type: "paragraph",
    children,
  };
};

type HeadingProps = {
  depth: number;
  children: any[];
};
export const Heading = ({ depth, children }: HeadingProps) => {
  return {
    type: "heading",
    depth,
    children,
  };
};

type EmphasisProps = {
  children: any[];
};
export const Emphasis = ({ children }: EmphasisProps) => {
  return {
    type: "emphasis",
    children,
  };
};

type StrongProps = {
  children: any[];
};
export const Strong = ({ children }: StrongProps) => {
  return {
    type: "strong",
    children,
  };
};

type TextProps = string;
export const Text = (value: TextProps) => {
  return {
    type: "text",
    value,
  };
};

export const Break = () => {
  return {
    type: "break",
  };
};
