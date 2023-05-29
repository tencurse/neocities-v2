const eleventyDevServer = "@11ty/eleventy-dev-server";
const eleventyBrowsersync = "@11ty/eleventy-server-browsersync";
const markdownIt = require("markdown-it");
const mdFootnote = require("markdown-it-footnote");
const mdTaskList = require("markdown-it-task-lists");

module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  let mdTasklistOptions = {
    label: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mdFootnote));
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mdTaskList, mdTasklistOptions)
  );

  eleventyConfig.setServerOptions({
    module: eleventyBrowsersync,
    watch: true,
    files: ["src/*"],
    logLevel: "debug",
  });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
