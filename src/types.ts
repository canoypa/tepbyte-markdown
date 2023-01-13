export type TocItem = {
  id: string;
  depth: number;
  label: string;
  children?: TocItem[];
};

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
