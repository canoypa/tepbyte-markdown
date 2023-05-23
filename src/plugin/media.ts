import { Image } from "mdast";
import { lookup } from "mime-types";
import { Plugin } from "unified";
import { SKIP, visit } from "unist-util-visit";
import { Visitor } from "unist-util-visit/complex-types";
import { Audio, Video } from "../types";

const visitor: Visitor<Image> = (node, index, parent) => {
  if (typeof index !== "number" || parent === null) return;

  const mime = lookup(node.url);

  if (mime && /^audio\//.test(mime)) {
    const audio: Audio = { ...node, type: "audio" };
    parent.children.splice(index, 1, audio);
    return [SKIP, index];
  }

  if (mime && /^video\//.test(mime)) {
    const video: Video = { ...node, type: "video" };
    parent.children.splice(index, 1, video);
    return [SKIP, index];
  }
};

export const pluginMedia: Plugin = () => {
  return (tree) => {
    visit(tree, "image", visitor);
  };
};
