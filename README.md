# Tepbyte Markdown

## Usage

```javascript
import { markdownProcessor } from "tepbyte-markdown";

await markdownProcessor().parse("# Hello World");
```

Result:

```json
{
  "type": "root",
  "toc": [{ "id": "hello-world", "depth": 1, "label": "Hello World" }],
  "children": [
    {
      "type": "heading",
      "depth": 1,
      "id": "hello-world",
      "children": [{ "type": "text", "value": "Hello World" }]
    }
  ]
}
```
