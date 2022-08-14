import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { remarkFrontmatter } from "../plugin/remark-frontmatter";
import { remarkRemoveComments } from "../plugin/remark-remove-comments";
import { remarkRemovePosition } from "../plugin/remark-remove-position";

export const markdownParser = unified()
  .use(remarkParse) // parse markdown text to mdast
  .use(remarkRemoveComments) // remove html comments
  .use(remarkFrontmatter) // parse frontmatter
  .use(remarkBreaks) // convert soft break in markdown to <br>
  .use(remarkRemovePosition) // remove position property
  .freeze();
