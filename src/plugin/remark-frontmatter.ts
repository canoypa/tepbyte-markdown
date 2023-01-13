import { Root, YAML } from "mdast";
import remarkFrontmatterParser from "remark-frontmatter";
import { Plugin } from "unified";
import { is } from "unist-util-is";
import { SKIP, visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";
import { parse as parseYaml } from "yaml";

declare module "mdast" {
  interface Root {
    frontmatter?: Record<string, unknown>;
  }
}

const visitor: Visitor<YAML> = (node, index, parent) => {
  const data = parseYaml(node.value);

  if (is<Root>(parent, "root")) {
    parent.frontmatter = data;
  }

  if (index !== null && is<Root>(parent, "root")) {
    parent.children.splice(index, 1);
    return [SKIP, index];
  }
};

export const remarkFrontmatter: Plugin = function (this) {
  remarkFrontmatterParser.call(this, "yaml");

  return (tree) => {
    visit(tree, "yaml", visitor);
  };
};
