import parseMarkdown from "../src";
import { Heading, Root, Text } from "./lib/node";

describe("heading", () => {
  it("basic", async () => {
    const source = `
# HEADING
## HEADING
### HEADING
#### HEADING
##### HEADING
###### HEADING`;

    const result = await parseMarkdown(source);

    expect(result).toEqual(
      Root({
        children: ([1, 2, 3, 4, 5, 6] as const).map((depth) =>
          Heading({
            depth,
            children: [Text({ value: "HEADING" })],
          })
        ),
      })
    );
  });
});
