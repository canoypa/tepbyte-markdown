import { markdownProcessor } from "../src";

describe("frontmatter", () => {
  it("frontmatter", async () => {
    const source = `---
test: TEST
---`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      frontmatter: { test: "TEST" },
      children: expect.anything(),
    });
  });
});
