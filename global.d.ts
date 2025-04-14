export { };

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