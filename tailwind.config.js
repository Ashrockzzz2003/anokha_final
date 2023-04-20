const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "backgroundColor": "#00223a", // Prussian Blue
      "babyPowder": "#fffffcff", // Baby Powder
      "khaki": "#beb7a4ff", // Khaki
      "orangeWheel": "#ff7f11ff", // Orange Wheel
      "coquelicot": "#ff3f00ff", // Coquelicot
      "navBackground": "#02845ff",
      "chipBg" : "#9ff7b8",
      "chipText" : "#014012",
      "marqeeOrange": "#F79D1B",
      "marqueeBg" : "#FFF1D0",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      title: ["TitleFont", "sans-serif"],
      extend: {
        colors: {
        'prussian-blue': '#002845ff',
        'baby-powder': '#fffffcff',
        'khaki': '#beb7a4ff',
        'orange-wheel': '#ff7f11ff',
        'coquelicot': '#ff3f00ff'
        
        }
      },
    },

  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': "1536px",
  },
    navbar: {
      styles: {
        base: {
          border: "none",
        }
      }
    }
  },
  plugins: [],
});