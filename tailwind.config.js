const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e6e2d3',
        secondary: '#c4b7a6',
        tertiary: '#dac292',
        quaternary: '#b9936c',
        quinary: '#4f3222',
      },
    },
  },
  plugins: [],
};
