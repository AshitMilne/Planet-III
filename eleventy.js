module.exports = function(eleventyConfig) {
  // This line tells Eleventy to copy the 'assets' folder
  // and everything in it to the final website ('_site') folder.
  eleventyConfig.addPassthroughCopy("assets");

  // This is the standard configuration for your project's
  // input and output directories.
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};