import { markdownProcessor } from "../src";

describe("decoration", () => {
  it("italic", async () => {
    const source = `
*ITALIC*

_ITALIC_`;

    const result = await markdownProcessor().parse(source);

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

    const result = await markdownProcessor().parse(source);

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

  it("delete", async () => {
    const source = `
~DELETE~
~~DELETE~~
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "delete", children: [{ type: "text", value: "DELETE" }] },
            { type: "break" },
            { type: "delete", children: [{ type: "text", value: "DELETE" }] },
          ],
        },
      ],
    });
  });

  it("code", async () => {
    const source = `
\`CODE\`
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [{ type: "inlineCode", value: "CODE" }],
        },
      ],
    });
  });

  it("italic bold", async () => {
    const source = `
***BOLD ITALIC***

___BOLD ITALIC___`;

    const result = await markdownProcessor().parse(source);

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
