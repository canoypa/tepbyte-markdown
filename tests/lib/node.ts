type RootProps = {
  children: any[];
};
export const root = ({ children }: RootProps) => {
  return {
    type: "root",
    children,
    position: expect.anything(),
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
    position: expect.anything(),
  };
};

type TextProps = string;
export const text = (value: TextProps) => {
  return {
    type: "text",
    value,
    position: expect.anything(),
  };
};
