/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        // Note: This is @notapatch and not the docs
        //       I think what it is trying to say is that if you define
        //       a custom font here you are also removing the default
        //       font families sans, serif and mono.
        //
        'display': ['Poppins'],
        'heading': ['Poppins'],
        'body': ['"Open Sans"'],
      },

    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('daisyui'),

    ],

    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    },
  }
}
