import { Code as MdAstCode } from "mdast";
import { BUNDLED_LANGUAGES, getHighlighter, Lang } from "shiki";
import { Plugin } from "unified";
import { Node, Parent } from "unist";
import { u } from "unist-builder";
import { is } from "unist-util-is";
import { Test, visit, VisitorResult } from "unist-util-visit";
import { Code, RichText } from "../types";

export type AsyncVisitor = (
  node: Node,
  index: number | null,
  parent: Parent
) => Promise<VisitorResult>;

const visitAsync = async (
  tree: Node,
  matcher: Test,
  asyncVisitor: AsyncVisitor
) => {
  const promises: Promise<VisitorResult>[] = [];

  visit(tree, matcher, (...args) => {
    promises.push(asyncVisitor(...args));
  });

  await Promise.all(promises);
};

const visitor: AsyncVisitor = async (node, index, parent) => {
  if (!is<MdAstCode>(node, "code") || typeof index !== "number") return;

  const shiki = await getHighlighter({
    theme: "dark-plus",
    langs: [],
  });

  const { bg, fg } = shiki.getTheme();

  const language =
    node.lang &&
    BUNDLED_LANGUAGES.find(
      (l) => l.id === node.lang || l.aliases?.some((l) => l === node.lang)
    )?.id;

  const codeData = {
    lang: language,
    filename: node.meta,
    foregroundColor: fg,
    backgroundColor: bg,
  };

  if (!language) {
    const code: Code = u("code", codeData, [u("richText", node.value)]);
    parent.children[index] = code;
    return;
  }

  await shiki.loadLanguage(language as Lang);
  const tokens = shiki.codeToThemedTokens(node.value, language);

  const children: RichText[] = [];
  tokens.forEach((line, i, arr) => {
    line.forEach((token) => {
      const richTextData = { color: token.color };
      children.push(u("richText", richTextData, token.content));
    });

    if (i !== arr.length - 1) {
      children.push(u("richText", "\n"));
    }
  });

  const code: Code = u("code", codeData, children);
  parent.children[index] = code;
};

const shikiPlugin: Plugin = () => async (tree) => {
  await visitAsync(tree, {}, visitor);
};
export default shikiPlugin;
