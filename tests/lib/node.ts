import type mdast from "mdast";
import { Node } from "unist";
import { u } from "unist-builder";

type Builder<N extends Node> = (props: Omit<N, "type">) => N;

export const Root: Builder<mdast.Root> = ({ data, frontmatter, children }) => {
  return u("root", { data, frontmatter }, children);
};

export const Paragraph: Builder<mdast.Paragraph> = ({ children }) => {
  return u("paragraph", children);
};

export const Heading: Builder<mdast.Heading> = ({ depth, children }) => {
  return u("heading", { depth }, children);
};

export const Table: Builder<mdast.Table> = ({ align, children }) => {
  return u("table", { align }, children);
};

export const TableRow: Builder<mdast.TableRow> = ({ children }) => {
  return u("tableRow", children);
};

export const TableCell: Builder<mdast.TableCell> = ({ children }) => {
  return u("tableCell", children);
};

export const List: Builder<mdast.List> = ({
  ordered,
  start,
  spread,
  children,
}) => {
  return u("list", { ordered, start, spread }, children);
};

export const ListItem: Builder<mdast.ListItem> = ({
  spread,
  checked,
  children,
}) => {
  return u("listItem", { spread, checked }, children);
};

export const Link: Builder<mdast.Link> = ({ title, url, children }) => {
  return u("link", { title, url }, children);
};

export const FootnoteReference: Builder<mdast.FootnoteReference> = ({
  identifier,
  label,
}) => {
  return u("footnoteReference", { identifier, label });
};

export const FootnoteDefinition: Builder<mdast.FootnoteDefinition> = ({
  identifier,
  label,
  children,
}) => {
  return u("footnoteDefinition", { identifier, label }, children);
};

export const Emphasis: Builder<mdast.Emphasis> = ({ children }) => {
  return u("emphasis", children);
};

export const Strong: Builder<mdast.Strong> = ({ children }) => {
  return u("strong", children);
};

export const Delete: Builder<mdast.Delete> = ({ children }) => {
  return u("delete", children);
};

export const Text: Builder<mdast.Text> = ({ value }) => {
  return u("text", value);
};

export const Break: Builder<mdast.Break> = () => {
  return u("break");
};
