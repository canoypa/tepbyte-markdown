/*!
 * remark-slug@7.0.1
 * MIT License | github.com/remarkjs/remark-slug/blob/main/license
 */

import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";
import Slugger from "github-slugger";
import { Plugin } from "unified";
import { Heading } from "mdast";

declare module "mdast" {
  interface Heading {
    id: string;
  }
}

const slugger = new Slugger();

const visitor: Visitor<Heading> = (node) => {
  node.id = slugger.slug(toString(node));
};

export const remarkSlug: Plugin = () => {
  return (tree) => {
    slugger.reset();

    visit(tree, "heading", visitor);
  };
};
