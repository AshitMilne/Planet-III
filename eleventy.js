// .eleventy.js at planet-III/
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "Semper Idem",  // all content comes from here
      includes: "_includes", // optional subdir inside Semper-Idem
      data: "_data",         // optional subdir inside Semper-Idem
      output: "_site"        // gets built into planet-III/_site
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};