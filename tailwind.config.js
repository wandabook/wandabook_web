/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-lighter-gray': 'hsl(0, 0%, 98%)',
        'brand-light-grayish-blue': ' hsl(220, 16%, 96%)',
        'brand-grayish-blue': 'hsl(233, 8%, 62%)',
        'brand-dark-blue': 'hsl(233, 26%, 24%)',
        'brand-lime-green': 'hsl(136, 65%, 51%)',
        'brand-bright-cyan': 'hsl(192, 70%, 51%)',
        'brand-lime-red': 'hsl(0, 100%, 50%)',
        'brand-default': 'hsl(192, 70%, 51%)'
      },
      fontSize: {
        md: '16px',
        body: '18px',
      },
      fontFamily: {
        // Note: This is @notapatch and not the docs
        //       I think what it is trying to say is that if you define
        //       a custom font here you are also removing the default
        //       font families sans, serif and mono.
        //
        'display': ['Poppins'],
        'heading': ['Poppins-bold'],
        'body': ['"Open Sans"'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
