import { parseMarkdown } from "../src";

describe("table", () => {
  it("table", async () => {
    const source = `
| a | b  |  c |  d  |
| - | :- | -: | :-: |
| A | B  |  C |  D  |
`;

    const result = await parseMarkdown(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "table",
          align: [null, "left", "right", "center"],
          children: [
            {
              type: "tableRow",
              children: [
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "a" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "b" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "c" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "d" }],
                },
              ],
            },
            {
              type: "tableRow",
              children: [
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "A" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "B" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "C" }],
                },
                {
                  type: "tableCell",
                  children: [{ type: "text", value: "D" }],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
