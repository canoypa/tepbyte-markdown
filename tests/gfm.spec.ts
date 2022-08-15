import { inspect } from "unist-util-inspect";
import parseMarkdown from "../src";
import {
  Break,
  FootnoteDefinition,
  FootnoteReference,
  Link,
  Paragraph,
  Root,
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
});
