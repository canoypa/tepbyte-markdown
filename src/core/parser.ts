import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { remarkFrontmatter } from "../plugin/remark-frontmatter";
import { remarkRemoveComments } from "../plugin/remark-remove-comments";
import { remarkRemovePosition } from "../plugin/remark-remove-position";
import { remarkSlug } from "../plugin/remark-slug";
import { remarkToc } from "../plugin/remark-toc";

export const markdownParser = unified()
  .use(remarkParse) // parse markdown text to mdast
  .use(remarkRemoveComments) // remove html comments
  .use(remarkFrontmatter) // parse frontmatter
  .use(remarkBreaks) // convert soft break in markdown to <br>
  .use(remarkGfm) // github flavored markdown
  .use(remarkSlug) // add id to headings
  .use(remarkToc) // table of contents
  .use(remarkRemovePosition) // remove position property
  .freeze();
