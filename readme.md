# base256

The memory and network efficient alternative to base64.

base64 will incur a 33% cost compared to the original data. base256 will incur a
0% cost compared to the original data!

```ts
import {
	base256Decode,
	base256Encode,
} from 'https://deno.land/x/base256/mod.ts';
```

## base256Encode(input: arrayBuffer): ArrayBuffer

Returns an ArrayBuffer encoded in base256.

## base256Decode(input: arrayBuffer): ArrayBuffer

Returns a decoded ArrayBuffer.
