import parseMarkdown from "../src";
import { Break, Paragraph, Root, Text } from "./lib/node";

describe("break", () => {
  it("basic", async () => {
    const source = `
TEXT

TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({ children: [Text("TEXT")] }),
          Paragraph({ children: [Text("TEXT")] }),
        ],
      })
    );
  });

  it("break by space", async () => {
    const source = `
TEXT  
TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [Text("TEXT"), Break(), Text("TEXT")],
          }),
        ],
      })
    );
  });

  it("soft break", async () => {
    const source = `
TEXT
TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: [
          Paragraph({
            children: [Text("TEXT"), Break(), Text("TEXT")],
          }),
        ],
      })
    );
  });
});
