import parseMarkdown from "../src";
import { heading, root, text } from "./lib/node";

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
      root({
        children: [1, 2, 3, 4, 5, 6].map((depth) =>
          heading({
            depth,
            children: [text("HEADING")],
          })
        ),
      })
    );
  });
});
