import { assertEquals, assertFalse } from 'testing/asserts.ts';
import { base256Encode, base256Decode } from 'src/main.ts';

Deno.test('base256Encode', () => {
	const data = new Uint8Array([2, 3, 4, 5]);
	const out = base256Encode(data.buffer);
	assertEquals(out, data.buffer);
	// let's make sure that was a copy and not a reference
	assertFalse(out === data.buffer);
});

Deno.test('base256Decode', () => {
	const data = new Uint8Array([2, 3, 4, 5]);
	const out = base256Decode(data.buffer);
	assertEquals(out, data.buffer);
	// let's make sure that was a copy and not a reference
	assertFalse(out === data.buffer);
});
