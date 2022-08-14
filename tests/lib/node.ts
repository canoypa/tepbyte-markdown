type RootProps = {
  data?: any;
  children: any[];
};
export const root = ({ data, children }: RootProps) => {
  return {
    type: "root",
    data: data,
    children,
  };
};

type ParagraphProps = {
  children: any[];
};
export const paragraph = ({ children }: ParagraphProps) => {
  return {
    type: "paragraph",
    children,
  };
};

type HeadingProps = {
  depth: number;
  children: any[];
};
export const heading = ({ depth, children }: HeadingProps) => {
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
export const text = (value: TextProps) => {
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
