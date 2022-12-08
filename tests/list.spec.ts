import { parseMarkdown } from "../src";

describe("list", () => {
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
