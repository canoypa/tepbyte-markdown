import remarkParse from "remark-parse";
import { unified } from "unified";

export const markdownParser = unified()
  .use(remarkParse) // parse markdown text to mdast
  .freeze();
