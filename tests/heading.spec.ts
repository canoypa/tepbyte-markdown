import { parseMarkdown } from "../src";

describe("heading", () => {
  it("basic", async () => {
    const source = `
# H
## H
### H
#### H
##### H
###### H`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      toc: expect.anything(),
      children: [
        {
          type: "heading",
          id: "h",
          depth: 1,
          children: [{ type: "text", value: "H" }],
        },
        {
          type: "heading",
          id: "h-1",
          depth: 2,
          children: [{ type: "text", value: "H" }],
        },
        {
          type: "heading",
          id: "h-2",
          depth: 3,
          children: [{ type: "text", value: "H" }],
        },
        {
          type: "heading",
          id: "h-3",
          depth: 4,
          children: [{ type: "text", value: "H" }],
        },
        {
          type: "heading",
          id: "h-4",
          depth: 5,
          children: [{ type: "text", value: "H" }],
        },
        {
          type: "heading",
          id: "h-5",
          depth: 6,
          children: [{ type: "text", value: "H" }],
        },
      ],
    });
  });
});
