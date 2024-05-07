const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        // primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
        primary: {
          '50': '#fff4fe',
          '100': '#ffe8fd',
          '200': '#fed0f9',
          '300': '#fcabf0',
          '400': '#f87ae3',
          '500': '#ee47d3',
          '600': '#d227b3',
          '700': '#ae1d90',
          '800': '#8e1a74',
          '900': '#771b61',
          '950': '#4e043c',
      },
      
      }
    }
  }
};

module.exports = config;