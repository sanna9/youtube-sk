module.exports = {
  plugins: {
    tailwindcss: {},
    //When writing modern CSS, some properties need vendor prefixes (like -webkit-, -moz-, -ms-) to work properly in older browsers.
    //Instead of manually adding these, autoprefixer does it for you based on browser support data from Can I Use.
    autoprefixer: {},
  },
};
