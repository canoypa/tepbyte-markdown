import parseMarkdown from "../src";
import { Root } from "./lib/node";

describe("frontmatter", () => {
  it("frontmatter", async () => {
    const source = `---
test: TEST
---`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        frontmatter: { test: "TEST" },
        children: [],
      })
    );
  });
});
