import { Root } from "mdast";
import { markdownParser } from "./parser";

export const parseMarkdown = async (src: string) => {
  const parsed = await markdownParser.process(src);
  return parsed.result as Root;
};
