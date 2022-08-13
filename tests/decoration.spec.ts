import parseMarkdown from "../src";
import { Emphasis, paragraph, root, Strong, text } from "./lib/node";

describe("decoration", () => {
  it("italic", async () => {
    const source = `
*ITALIC*

_ITALIC_`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      root({
        children: [
          paragraph({
            children: [Emphasis({ children: [text("ITALIC")] })],
          }),
          paragraph({
            children: [Emphasis({ children: [text("ITALIC")] })],
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
      root({
        children: [
          paragraph({
            children: [Strong({ children: [text("BOLD")] })],
          }),
          paragraph({
            children: [Strong({ children: [text("BOLD")] })],
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
      root({
        children: [
          paragraph({
            children: [
              Emphasis({
                children: [Strong({ children: [text("BOLD ITALIC")] })],
              }),
            ],
          }),
          paragraph({
            children: [
              Emphasis({
                children: [Strong({ children: [text("BOLD ITALIC")] })],
              }),
            ],
          }),
        ],
      })
    );
  });
});
