import { parseMarkdown } from "../src";

describe("footnote", () => {
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
});
