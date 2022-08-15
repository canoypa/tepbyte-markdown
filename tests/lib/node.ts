import type mdast from "mdast";
import { Node } from "unist";
import { u } from "unist-builder";

type Builder<N extends Node> = (props: Omit<N, "type">) => N;

export const Root: Builder<mdast.Root> = ({ data, children }) => {
  return u("root", { data }, children);
};

export const Paragraph: Builder<mdast.Paragraph> = ({ children }) => {
  return u("paragraph", children);
};

export const Heading: Builder<mdast.Heading> = ({ depth, children }) => {
  return u("heading", { depth }, children);
};

export const Link: Builder<mdast.Link> = ({ title, url, children }) => {
  return u("link", { title, url }, children);
};

export const Emphasis: Builder<mdast.Emphasis> = ({ children }) => {
  return u("emphasis", children);
};

export const Strong: Builder<mdast.Strong> = ({ children }) => {
  return u("strong", children);
};

export const Text: Builder<mdast.Text> = ({ value }) => {
  return u("text", value);
};

export const Break: Builder<mdast.Break> = () => {
  return u("break");
};
