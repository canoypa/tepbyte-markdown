import parseMarkdown from "../src";
import { Emphasis, Paragraph, Root, Strong, Text } from "./lib/node";

describe("decoration", () => {
  it("italic", async () => {
    const source = `
*ITALIC*

_ITALIC_`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [Emphasis({ children: [Text("ITALIC")] })],
          }),
          Paragraph({
            children: [Emphasis({ children: [Text("ITALIC")] })],
          }),
        ],
      })
    );
  });

  it("bold", async () => {
    const source = `
**BOLD**

__BOLD__`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [Strong({ children: [Text("BOLD")] })],
          }),
          Paragraph({
            children: [Strong({ children: [Text("BOLD")] })],
          }),
        ],
      })
    );
  });

  it("italic bold", async () => {
    const source = `
***BOLD ITALIC***

___BOLD ITALIC___`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [
              Emphasis({
                children: [Strong({ children: [Text("BOLD ITALIC")] })],
              }),
            ],
          }),
          Paragraph({
            children: [
              Emphasis({
                children: [Strong({ children: [Text("BOLD ITALIC")] })],
              }),
            ],
          }),
        ],
      })
    );
  });
});
