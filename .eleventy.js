module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "semper-idem",  // make sure this matches your folder name exactly
      output: "_site",
      includes: "_includes"  // relative to the input folder
    }
  };
};
