import { markdownParser } from "./parser";

export const parseMarkdown = async (src: string) => {
  const parsed = markdownParser.parse(src);
  const transformed = await markdownParser.run(parsed);
  return transformed;
};
