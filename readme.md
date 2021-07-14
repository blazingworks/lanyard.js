# lanyard.js
> 🏷️  NodeJS Wrapper for Lanyard written using TypeScript

*This library is currently still in development and not suggested for production use*

## Usage Examples
### JavaScript
```js
const { Lanyard } = require("lanyard.js");
const userId = "228965621478588416";

// Options can optionally be passed to the constructor when using class methods or to the to the function when directly calling it
const options = {
    protocol: "https",
    url: "api.lanyard.rest",
}

const lanyard = new Lanyard(options);

// Get data as string
lanyard.getString(userId).then((result) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId).then((result) => {
    console.log(result);
});
```

```js
const lanyard = require("lanyard.js");
const userId = "228965621478588416";

// Options can optionally be passed to the constructor when using class methods or to the to the function when directly calling it
const options = {
    protocol: "https",
    url: "api.lanyard.rest",
}

// Get data as string
lanyard.getString(userId, options).then((result) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId, options).then((result) => {
    console.log(result);
});
```

### TypeScript
```ts
import { Lanyard } from "lanyard.js";
import { RestOptions, LanyardResponse } from "lanyard.js/interfaces";
const userId: string = "228965621478588416";

// Options can optionally be passed to the constructor when using class methods or to the to the function when directly calling it
const options: RestOptions = {
    protocol: "https",
    url: "api.lanyard.rest",
}

const lanyard: Lanyard = new Lanyard(options);

// Get data as string
lanyard.getString(userId).then((result: string) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId).then((result: LanyardResponse) => {
    console.log(result);
});
```

```ts
import * as lanyard from "lanyard.js";
import { RestOptions, LanyardResponse } from "lanyard.js/interfaces";
const userId: string = "228965621478588416";

// Options can optionally be passed to the constructor when using class methods or to the to the function when directly calling it
const options: RestOptions = {
    protocol: "https",
    url: "api.lanyard.rest",
}

// Get data as string
lanyard.getString(userId, options).then((result: string | undefined) => {
    console.log(result);
});

// Get data as object
lanyard.get(userId, options).then((result: LanyardResponse | undefined) => {
    console.log(result);
});
```