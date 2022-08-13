import { Plugin } from "unified";
import { removePosition } from "unist-util-remove-position";

export const remarkRemovePosition: Plugin = () => {
  return (tree) => {
    removePosition(tree, true);
  };
};
