# lanyard.js
> 🏷️  NodeJS Wrapper for Lanyard written using TypeScript

*This library is currently still in development and not suggested for production use*

## Usage Examples
### JavaScript
```js
// Get data as string
const lanyard = require("lanyard.js");
const userId = "228965621478588416";

lanyard.getString(userId).then((result) => {
    console.log(result);
});
```

### TypeScript
```ts
// Get data as string
import * as lanyard from "lanyard.js";
const userId: string = "228965621478588416";

lanyard.getString(userId).then((result: string | undefined) => {
    console.log(result);
});
```