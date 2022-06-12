export function base256Encode(input: ArrayBuffer): ArrayBuffer {
	const outputView = new Uint8Array(input.byteLength);
	outputView.set(new Uint8Array(input));
	return outputView.buffer;
}
export function base256Decode(input: ArrayBuffer): ArrayBuffer {
	const outputView = new Uint8Array(input.byteLength);
	outputView.set(new Uint8Array(input));
	return outputView.buffer;
}
