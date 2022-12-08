import { parseMarkdown } from "../src";
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
            children: [Emphasis({ children: [Text({ value: "ITALIC" })] })],
          }),
          Paragraph({
            children: [Emphasis({ children: [Text({ value: "ITALIC" })] })],
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
            children: [Strong({ children: [Text({ value: "BOLD" })] })],
          }),
          Paragraph({
            children: [Strong({ children: [Text({ value: "BOLD" })] })],
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
                children: [
                  Strong({ children: [Text({ value: "BOLD ITALIC" })] }),
                ],
              }),
            ],
          }),
          Paragraph({
            children: [
              Emphasis({
                children: [
                  Strong({ children: [Text({ value: "BOLD ITALIC" })] }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });
});
