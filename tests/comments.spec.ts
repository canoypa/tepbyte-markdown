import { parseMarkdown } from "../src";

describe("comments", () => {
  it("one line", async () => {
    const source = `Hello<!--Comment-->World`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "text", value: "Hello" },
            { type: "text", value: "World" },
          ],
        },
      ],
    });
  });

  it("multi line", async () => {
    const source = `
Hello
<!--
Comment
-->
World`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        { type: "paragraph", children: [{ type: "text", value: "Hello" }] },
        { type: "paragraph", children: [{ type: "text", value: "World" }] },
      ],
    });
  });
});
