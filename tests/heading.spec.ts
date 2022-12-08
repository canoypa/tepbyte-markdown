import { parseMarkdown } from "../src";
import { Heading, Root, Text } from "./lib/node";

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

    expect(result).toEqual(
      Root({
        toc: [
          {
            id: "h",
            depth: 1,
            label: "H",
            children: [
              {
                id: "h-1",
                depth: 2,
                label: "H",
                children: [
                  {
                    id: "h-2",
                    depth: 3,
                    label: "H",
                    children: [
                      {
                        id: "h-3",
                        depth: 4,
                        label: "H",
                        children: [
                          {
                            id: "h-4",
                            depth: 5,
                            label: "H",
                            children: [
                              {
                                id: "h-5",
                                depth: 6,
                                label: "H",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        children: [
          Heading({ id: "h", depth: 1, children: [Text({ value: "H" })] }),
          Heading({ id: "h-1", depth: 2, children: [Text({ value: "H" })] }),
          Heading({ id: "h-2", depth: 3, children: [Text({ value: "H" })] }),
          Heading({ id: "h-3", depth: 4, children: [Text({ value: "H" })] }),
          Heading({ id: "h-4", depth: 5, children: [Text({ value: "H" })] }),
          Heading({ id: "h-5", depth: 6, children: [Text({ value: "H" })] }),
        ],
      })
    );
  });
});
