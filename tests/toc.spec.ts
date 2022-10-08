import parseMarkdown from "../src";
import { Heading, Root, Text } from "./lib/node";

describe("toc", () => {
  it("basic", async () => {
    const source = `
# h1
## h2
### h3
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
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
        children: [
          Heading({ id: "h1", depth: 1, children: [Text({ value: "h1" })] }),
          Heading({ id: "h2", depth: 2, children: [Text({ value: "h2" })] }),
          Heading({ id: "h3", depth: 3, children: [Text({ value: "h3" })] }),
        ],
      })
    );
  });

  it("not h1 start", async () => {
    const source = `
## h2
### h3
# h1`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
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
        children: [
          Heading({ id: "h2", depth: 2, children: [Text({ value: "h2" })] }),
          Heading({ id: "h3", depth: 3, children: [Text({ value: "h3" })] }),
          Heading({ id: "h1", depth: 1, children: [Text({ value: "h1" })] }),
        ],
      })
    );
  });
});
