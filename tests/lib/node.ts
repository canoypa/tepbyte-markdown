export const root = ({ children }: { children: any[] }) => {
  return expect.objectContaining({
    type: "root",
    children: expect.arrayContaining(children),
  });
};

type HeadingProps = {
  depth: number;
  children: any[];
};
export const heading = ({ depth, children }: HeadingProps) => {
  return expect.objectContaining({
    type: "heading",
    depth,
    children: expect.arrayContaining(children),
  });
};

export const text = (value: string) => {
  return expect.objectContaining({
    type: "text",
    value,
  });
};
