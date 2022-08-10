import parseMarkdown from "../src";
import { heading, root, text } from "./lib/node";

describe("basic", () => {
  it("heading", async () => {
    const result = await parseMarkdown("# HEADING");

    expect(result).toEqual(
      root({
        children: [
          heading({
            depth: 1,
            children: [text("HEADING")],
          }),
        ],
      })
    );
  });
});
