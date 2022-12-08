import { parseMarkdown } from "../src";

describe("decoration", () => {
  it("italic", async () => {
    const source = `
*ITALIC*

_ITALIC_`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [{ type: "text", value: "ITALIC" }],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [{ type: "text", value: "ITALIC" }],
            },
          ],
        },
      ],
    });
  });

  it("bold", async () => {
    const source = `
**BOLD**

__BOLD__`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "strong", children: [{ type: "text", value: "BOLD" }] },
          ],
        },
        {
          type: "paragraph",
          children: [
            { type: "strong", children: [{ type: "text", value: "BOLD" }] },
          ],
        },
      ],
    });
  });

  it("italic bold", async () => {
    const source = `
***BOLD ITALIC***

___BOLD ITALIC___`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "strong",
                  children: [{ type: "text", value: "BOLD ITALIC" }],
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "strong",
                  children: [{ type: "text", value: "BOLD ITALIC" }],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
