import parseMarkdown from "../src";
import { paragraph, root, text } from "./lib/node";

describe("comments", () => {
  it("one line", async () => {
    const source = `Hello<!--Comment-->World`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      root({
        children: [
          paragraph({
            children: [text("Hello"), text("World")],
          }),
        ],
      })
    );
  });

  it("multi line", async () => {
    const source = `
Hello
<!--
Comment
-->
World`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      root({
        children: [
          paragraph({ children: [text("Hello")] }),
          paragraph({ children: [text("World")] }),
        ],
      })
    );
  });
});
