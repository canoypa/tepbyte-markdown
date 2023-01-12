import { markdownProcessor } from "../src";

describe("link", () => {
  it("autolink", async () => {
    const source = `
https://example.com
www.example.com
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "link",
              title: null,
              url: "https://example.com",
              children: [{ type: "text", value: "https://example.com" }],
            },
            { type: "break" },
            {
              type: "link",
              title: null,
              url: "http://www.example.com",
              children: [{ type: "text", value: "www.example.com" }],
            },
          ],
        },
      ],
    });
  });
});
