import { markdownProcessor } from "../src";

describe("media", () => {
  it("image", async () => {
    const source = `
![](file.png)
![](file.jpg)
![](file.jpeg)
![](file.webp)
![](file.gif)
![](file.bmp)
![](file.svg)
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "image", url: "file.png", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.jpg", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.jpeg", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.webp", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.gif", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.bmp", alt: "", title: null },
            { type: "break" },
            { type: "image", url: "file.svg", alt: "", title: null },
          ],
        },
      ],
    });
  });

  it("audio", async () => {
    const source = `
![](file.mid)
![](file.midi)
![](file.mp3)
![](file.ogg)
![](file.wav)
![](file.weba)
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "audio", url: "file.mid", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "file.midi", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "file.ogg", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "file.wav", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "file.weba", alt: "", title: null },
          ],
        },
      ],
    });
  });

  it("video", async () => {
    const source = `
![](file.avi)
![](file.mpeg)
![](file.mp4)
![](file.mov)
![](file.webm)
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "video", url: "file.avi", alt: "", title: null },
            { type: "break" },
            { type: "video", url: "file.mpeg", alt: "", title: null },
            { type: "break" },
            { type: "video", url: "file.mp4", alt: "", title: null },
            { type: "break" },
            { type: "video", url: "file.mov", alt: "", title: null },
            { type: "break" },
            { type: "video", url: "file.webm", alt: "", title: null },
          ],
        },
      ],
    });
  });

  it("path", async () => {
    const source = `
![](file.mp3)
![](folder/file.mp3)
![](/folder/file.mp3)
![](./file.mp3)
![](./folder/file.mp3)
![](../file.mp3)
![](../folder/file.mp3)
`;

    const result = await markdownProcessor().parse(source);

    expect(result).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            { type: "audio", url: "file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "folder/file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "/folder/file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "./file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "./folder/file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "../file.mp3", alt: "", title: null },
            { type: "break" },
            { type: "audio", url: "../folder/file.mp3", alt: "", title: null },
          ],
        },
      ],
    });
  });
});
