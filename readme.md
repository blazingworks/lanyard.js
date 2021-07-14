# lanyard.js
> 🏷️  NodeJS Wrapper for Lanyard written using TypeScript

*This library is currently still in development and not suggested for production use*

## Usage Examples
### JavaScript
```js
const lanyard = require("lanyard.js");
const userId = "228965621478588416";

// Get data as string
lanyard.getString(userId).then((result) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId).then((result) => {
    console.log(result);
});
```

### TypeScript
```ts
import * as lanyard from "lanyard.js";
import { LanyardResponse } from "lanyard.js/interfaces";
const userId: string = "228965621478588416";

// Get data as string
lanyard.getString(userId).then((result: string | undefined) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId).then((result: LanyardResponse | undefined) => {
    console.log(result);
});
```