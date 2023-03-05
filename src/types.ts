import { Literal } from "mdast";
import { Parent } from "unist";

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

export interface Code extends Parent<RichText> {
  type: "code";
  lang?: string | null;
  filename?: string | null;
  foregroundColor: string;
  backgroundColor: string;
}

export interface RichText extends Literal {
  type: "richText";
  color?: string;
}

export type { Root } from "mdast";
