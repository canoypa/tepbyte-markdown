import { markdownParser } from "./parser";

export const parseMarkdown = async (src: string) => {
  const tree = markdownParser.parse(src);
  return tree;
};
