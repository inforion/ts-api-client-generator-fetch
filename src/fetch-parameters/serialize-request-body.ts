function isBlob(value: unknown): value is Blob {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isFormData(value: unknown): value is FormData {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function isUrlSearchParams(value: unknown): value is URLSearchParams {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}

export function serializeRequestBody(body: unknown): BodyInit | undefined {
    return (isFormData(body) || isUrlSearchParams(body) || isBlob(body) || body === undefined)
        ? body
        : JSON.stringify(body);
}