import { parseMarkdown } from "../src";

describe("gfm", () => {
  it("autolink", async () => {
    const source = `
https://example.com
www.example.com
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "link",
              title: null,
              url: "https://example.com",
              children: [{ type: "text", value: "https://example.com" }],
            },
            { type: "break" },
            {
              type: "link",
              title: null,
              url: "http://www.example.com",
              children: [{ type: "text", value: "www.example.com" }],
            },
          ],
        },
      ],
    });
  });

  it("footnote", async () => {
    const source = `
[^1]
[^1]: FOOTNOTE
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "footnoteReference", identifier: "1", label: "1" },
          ],
        },
        {
          type: "footnoteDefinition",
          identifier: "1",
          label: "1",
          children: [
            {
              type: "paragraph",
              children: [{ type: "text", value: "FOOTNOTE" }],
            },
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

    const result = await parseMarkdown(source);

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

  it("table", async () => {
    const source = `
| a | b  |  c |  d  |
| - | :- | -: | :-: |
| A | B  |  C |  D  |
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "table",
          align: [null, "left", "right", "center"],
          children: [
            {
              type: "tableRow",
              children: [
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "a" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "b" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "c" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "d" }],
                },
              ],
            },
            {
              type: "tableRow",
              children: [
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "A" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "B" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "C" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "D" }],
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it("tasklist", async () => {
    const source = `
- [ ] UNCHECKED
- [x] CHECKED
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "list",
          ordered: false,
          spread: false,
          start: null,
          children: [
            {
              type: "listItem",
              checked: false,
              spread: false,
              children: [
                {
                  type: "paragraph",
                  children: [{ type: "text", value: "UNCHECKED" }],
                },
              ],
            },
            {
              type: "listItem",
              checked: true,
              spread: false,
              children: [
                {
                  type: "paragraph",
                  children: [{ type: "text", value: "CHECKED" }],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
