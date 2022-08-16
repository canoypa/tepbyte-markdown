import { Root, YAML } from "mdast";
import remarkFrontmatterParser from "remark-frontmatter";
import { Plugin } from "unified";
import { Data } from "unist";
import { SKIP, visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";
import { parse as parseYaml } from "yaml";

declare module "mdast" {
  interface Root<TData extends object = Data> {
    frontmatter?: TData;
  }
}

const visitor: Visitor<YAML> = (node, index, parent) => {
  const data = parseYaml(node.value);

  if (parent !== null && parent.type === "root") {
    (parent as Root).frontmatter = data;
  }

  if (index !== null && parent !== null) {
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
