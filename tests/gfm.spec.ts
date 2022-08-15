import { inspect } from "unist-util-inspect";
import parseMarkdown from "../src";
import {
  Break,
  Delete,
  FootnoteDefinition,
  FootnoteReference,
  Link,
  Paragraph,
  Root,
  Table,
  TableCell,
  TableRow,
  Text,
} from "./lib/node";

describe("gfm", () => {
  it("autolink", async () => {
    const source = `
https://example.com
www.example.com
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [
              Link({
                title: null,
                url: "https://example.com",
                children: [Text({ value: "https://example.com" })],
              }),
              Break({}),
              Link({
                title: null,
                url: "http://www.example.com",
                children: [Text({ value: "www.example.com" })],
              }),
            ],
          }),
        ],
      })
    );
  });

  it("footnote", async () => {
    const source = `
[^1]
[^1]: FOOTNOTE
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [FootnoteReference({ identifier: "1", label: "1" })],
          }),
          FootnoteDefinition({
            identifier: "1",
            label: "1",
            children: [Paragraph({ children: [Text({ value: "FOOTNOTE" })] })],
          }),
        ],
      })
    );
  });

  it("delete", async () => {
    const source = `
~DELETE~
~~DELETE~~
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [
              Delete({ children: [Text({ value: "DELETE" })] }),
              Break({}),
              Delete({ children: [Text({ value: "DELETE" })] }),
            ],
          }),
        ],
      })
    );
  });

  it("table", async () => {
    const source = `
| a | b  |  c |  d  |
| - | :- | -: | :-: |
| A | B  |  C |  D  |
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Table({
            align: [null, "left", "right", "center"],
            children: [
              TableRow({
                children: [
                  TableCell({ children: [Text({ value: "a" })] }),
                  TableCell({ children: [Text({ value: "b" })] }),
                  TableCell({ children: [Text({ value: "c" })] }),
                  TableCell({ children: [Text({ value: "d" })] }),
                ],
              }),
              TableRow({
                children: [
                  TableCell({ children: [Text({ value: "A" })] }),
                  TableCell({ children: [Text({ value: "B" })] }),
                  TableCell({ children: [Text({ value: "C" })] }),
                  TableCell({ children: [Text({ value: "D" })] }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });
});
