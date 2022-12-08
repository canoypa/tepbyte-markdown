import { parseMarkdown } from "../src";

describe("break", () => {
  it("basic", async () => {
    const source = `
TEXT

TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        { type: "paragraph", children: [{ type: "text", value: "TEXT" }] },
        { type: "paragraph", children: [{ type: "text", value: "TEXT" }] },
      ],
    });
  });

  it("break by space", async () => {
    const source = `
TEXT  
TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "text", value: "TEXT" },
            { type: "break" },
            { type: "text", value: "TEXT" },
          ],
        },
      ],
    });
  });

  it("soft break", async () => {
    const source = `
TEXT
TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "text", value: "TEXT" },
            { type: "break" },
            { type: "text", value: "TEXT" },
          ],
        },
      ],
    });
  });
});
