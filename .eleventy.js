const eleventyDevServer = "@11ty/eleventy-dev-server";
const eleventyBrowsersync = "@11ty/eleventy-server-browsersync";
const markdownIt = require("markdown-it");
const mdAnchor = require("markdown-it-anchor");
const mdFootnote = require("markdown-it-footnote");
const mdTaskList = require("markdown-it-task-lists");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const externalLinks = require("@sardine/eleventy-plugin-external-links");
const toc = require("eleventy-plugin-toc");

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
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mdAnchor));

  eleventyConfig.setServerOptions({
    module: eleventyBrowsersync,
    watch: true,
    files: ["src/*"],
    logLevel: "debug",
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "\n",
    preAttributes: {
      tabindex: 0,

      // Added in 4.1.0 you can use callback functions too
      "data-language": function ({ language, content, options }) {
        return language;
      },
    },
  });

  eleventyConfig.addPlugin(externalLinks);
  eleventyConfig.addPlugin(toc);

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
