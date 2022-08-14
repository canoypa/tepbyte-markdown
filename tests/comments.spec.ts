import parseMarkdown from "../src";
import { Paragraph, Root, Text } from "./lib/node";

describe("comments", () => {
  it("one line", async () => {
    const source = `Hello<!--Comment-->World`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [Text("Hello"), Text("World")],
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
      Root({
        children: [
          Paragraph({ children: [Text("Hello")] }),
          Paragraph({ children: [Text("World")] }),
        ],
      })
    );
  });
});
