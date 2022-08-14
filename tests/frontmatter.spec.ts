import parseMarkdown from "../src";
import { root } from "./lib/node";

describe("frontmatter", () => {
  it("frontmatter", async () => {
    const source = `---
test: TEST
---`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      root({
        data: {
          frontmatter: { test: "TEST" },
        },
        children: [],
      })
    );
  });
});
