// src/utils/imageUtils.js
export function getSanityImageUrl(imageUrl, params = {}) {
    if (!imageUrl) return '';

    const url = new URL(imageUrl);

    // Add optimization parameters
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    return url.toString();
}