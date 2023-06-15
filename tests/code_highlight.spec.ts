import { markdownProcessor } from "../src";

describe("code highlight", () => {
  it("basic", async () => {
    const source = `
\`\`\`
"HELLO"
\`\`\`
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "code",
          lang: null,
          filename: null,
          foregroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          backgroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          children: [
            {
              type: "richText",
              value: '"HELLO"',
            },
          ],
        },
      ],
    });
  });

  it("lang", async () => {
    const source = `
\`\`\`typescript
"HELLO"
\`\`\`
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "code",
          lang: "typescript",
          filename: null,
          foregroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          backgroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          children: [
            {
              type: "richText",
              color: expect.stringMatching(/^#[A-F0-9]{6}$/),
              value: '"HELLO"',
            },
          ],
        },
      ],
    });
  });

  it("lang and filename", async () => {
    const source = `
\`\`\`typescript index.ts
"HELLO"
\`\`\`
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "code",
          lang: "typescript",
          filename: "index.ts",
          foregroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          backgroundColor: expect.stringMatching(/^#[A-F0-9]{6}$/),
          children: [
            {
              type: "richText",
              color: expect.stringMatching(/^#[A-F0-9]{6}$/),
              value: '"HELLO"',
            },
          ],
        },
      ],
    });
  });
});
