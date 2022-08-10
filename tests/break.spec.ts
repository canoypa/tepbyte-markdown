import parseMarkdown from "../src";
import { Break, paragraph, root, text } from "./lib/node";

describe("break", () => {
  it("basic", async () => {
    const source = `
TEXT

TEXT`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      root({
        children: [
          paragraph({ children: [text("TEXT")] }),
          paragraph({ children: [text("TEXT")] }),
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
      root({
        children: [
          paragraph({
            children: [text("TEXT"), Break(), text("TEXT")],
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

    // FIXME: need remark-break
    expect(result).not.toEqual(
      root({
        children: [
          paragraph({
            children: [text("TEXT"), Break(), text("TEXT")],
          }),
        ],
      })
    );
  });
});
