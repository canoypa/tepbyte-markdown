import { inspect } from "unist-util-inspect";
import parseMarkdown from "../src";
import { Break, Link, Paragraph, Root, Text } from "./lib/node";

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
});
