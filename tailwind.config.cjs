const daisyui = require("daisyui");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
    plugins: [daisyui],
    theme: {
        fontFamily: {
            grotesk: ['Schibsted Grotesk', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            lexend: ['Lexend', 'sans-serif'],
        },
    },

};
