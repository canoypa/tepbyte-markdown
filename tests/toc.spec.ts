import { markdownProcessor } from "../src";

describe("toc", () => {
  it("basic", async () => {
    const source = `
# h1
## h2
### h3
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      toc: [
        {
          id: "h1",
          depth: 1,
          label: "h1",
          children: [
            {
              id: "h2",
              depth: 2,
              label: "h2",
              children: [
                {
                  depth: 3,
                  id: "h3",
                  label: "h3",
                },
              ],
            },
          ],
        },
      ],
      children: expect.anything(),
    });
  });

  it("not h1 start", async () => {
    const source = `
## h2
### h3
# h1`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      toc: [
        {
          id: "h2",
          depth: 2,
          label: "h2",
          children: [
            {
              id: "h3",
              depth: 3,
              label: "h3",
            },
          ],
        },
        {
          id: "h1",
          depth: 1,
          label: "h1",
        },
      ],
      children: expect.anything(),
    });
  });
});
