module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "planet-III", // The folder where your source files (like .md, .liquid) are located
      output: "_site",            // The folder where the built website is created
      includes: "_partials",      // The folder for your layouts and includes
      data: "_data"               // The folder for your global data files
    }
  };
};	