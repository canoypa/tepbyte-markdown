import { parseMarkdown } from "../src";

describe("frontmatter", () => {
  it("frontmatter", async () => {
    const source = `---
test: TEST
---`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      frontmatter: { test: "TEST" },
      children: expect.anything(),
    });
  });
});
