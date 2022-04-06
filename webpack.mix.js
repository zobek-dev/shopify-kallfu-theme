const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("src/js/main.js","assets")
   .sass("src/styles/styles.scss","assets")
   .options({
        postCssUrls: false,
        postCss: [tailwindcss("tailwind.config.js")],
   }); 