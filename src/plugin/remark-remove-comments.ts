/*!
 * remark-remove-comments@0.2.0
 * MIT License | github.com/alvinometric/remark-remove-comments/blob/main/LICENSE
 *
 * html-comment-regex@1.1.2
 * MIT License | github.com/stevemao/html-comment-regex/blob/master/LICENSE
 */

// 型定義が無かったので自前で

import { HTML } from "mdast";
import { Plugin } from "unified";
import { SKIP, visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";

const HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;

const visitor: Visitor<HTML> = (node, index, parent) => {
  const isComment = node.value.match(HTML_COMMENT_REGEX);

  if (isComment && index && parent) {
    parent.children.splice(index, 1);
    return [SKIP, index];
  }
};

export const remarkRemoveComments: Plugin = () => {
  return (tree) => {
    visit(tree, "html", visitor);
  };
};
