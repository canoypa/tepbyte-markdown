import { Root } from "mdast";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { Processor, unified } from "unified";
import { compiler } from "../plugin/compiler";
import { remarkFrontmatter } from "../plugin/remark-frontmatter";
import { remarkRemoveComments } from "../plugin/remark-remove-comments";
import { remarkRemovePosition } from "../plugin/remark-remove-position";
import { remarkSlug } from "../plugin/remark-slug";
import { remarkToc } from "../plugin/remark-toc";

export const markdownProcessor = () => {
  const processor = (unified() as Processor<void, void, void, Root>)
    .use(remarkParse) // parse markdown text to mdast
    .use(remarkRemoveComments) // remove html comments
    .use(remarkFrontmatter) // parse frontmatter
    .use(remarkBreaks) // convert soft break in markdown to <br>
    .use(remarkGfm) // github flavored markdown
    .use(remarkSlug) // add id to headings
    .use(remarkToc) // table of contents
    .use(remarkRemovePosition) // remove position property
    .use(compiler); // compiler need to be implemented

  return {
    use: processor.use,
    parse: async (src: string) => (await processor.process(src)).result,
  };
};
