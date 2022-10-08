import { Heading, Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { Plugin } from "unified";
import { Node } from "unist";
import { is } from "unist-util-is";
import { visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";

declare module "mdast" {
  interface Root {
    toc?: TocItem[];
  }
}

export type TocItem = {
  id: string;
  depth: number;
  label: string;
  children?: TocItem[];
};

const getToc = (tree: Node): TocItem[] | null => {
  const toc: TocItem[] = [];

  const add = (items: TocItem[], item: TocItem) => {
    const popItem = items.at(-1);

    if (!popItem || item.depth <= popItem.depth) {
      items.push(item);
      return;
    }

    if (!popItem.children) popItem.children = [];
    add(popItem.children, item);
  };

  const visitor: Visitor<Heading> = (node) => {
    const item: TocItem = {
      id: node.id,
      depth: node.depth,
      label: toString(node),
    };

    add(toc, item);
  };
  visit(tree, "heading", visitor);

  return toc.length > 0 ? toc : null;
};

export const remarkToc: Plugin = () => {
  return (tree) => {
    if (!is<Root>(tree, "root")) return;

    const toc = getToc(tree);
    if (toc !== null) tree.toc = toc;
  };
};
