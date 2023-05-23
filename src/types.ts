import { Alternative, Resource } from "mdast";
import { Node } from "unist";

export type TocItem = {
  id: string;
  depth: number;
  label: string;
  children?: TocItem[];
};

export interface Audio extends Node, Resource, Alternative {
  type: "audio";
}

export interface Video extends Node, Resource, Alternative {
  type: "video";
}

declare module "mdast" {
  interface Root {
    frontmatter?: Record<string, unknown>;
    toc?: TocItem[];
  }

  interface Heading {
    id: string;
  }
}

export type { Root } from "mdast";
