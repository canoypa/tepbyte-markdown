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
          Paragraph({ children: [Text({ value: "TEXT" })] }),
          Paragraph({ children: [Text({ value: "TEXT" })] }),
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
            children: [
              Text({ value: "TEXT" }),
              Break(),
              Text({ value: "TEXT" }),
            ],
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
            children: [
              Text({ value: "TEXT" }),
              Break(),
              Text({ value: "TEXT" }),
            ],
          }),
        ],
      })
    );
  });
});
