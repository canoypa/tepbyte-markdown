import remarkParse from "remark-parse";
import { unified } from "unified";
import { remarkRemovePosition } from "../plugin/remark-remove-position";

export const markdownParser = unified()
  .use(remarkParse) // parse markdown text to mdast
  .use(remarkRemovePosition) // remove position property
  .freeze();
