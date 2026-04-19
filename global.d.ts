export { };

declare module "astro:assets" {
    export const Image: any;
    export function getImage(...args: any[]): any;
}

declare module "*.webp" {
    const src: string;
    export default src;
}

declare global {
    interface Window {
        SubstackFeedWidget?: {
            substackUrl: string;
            posts: number;
            colors: {
                primary: string;
                secondary: string;
                background: string;
            };
        };
    }
}