const eleventyDevServer = "@11ty/eleventy-dev-server";
const eleventyBrowsersync = "@11ty/eleventy-server-browsersync";
const markdownIt = require("markdown-it");
const mdAnchor = require("markdown-it-anchor");
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
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mdTaskList, mdTasklistOptions)
  );
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mdAnchor, {
      permalink: mdAnchor.permalink.ariaHidden({
        placement: "after",
        class: "header-anchor",
        symbol: "#",
        ariaHidden: false,
      }),
      level: [2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    })
  );

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

  eleventyConfig.addFilter("toUTC", function (value) {
    return new Date(value).toLocaleDateString("en-CA", {
      timeZone: "UTC",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  });

  eleventyConfig.addCollection("fics", function (collection) {
    return collection.getFilteredByTag("fics").reverse();
  });

  eleventyConfig.addShortcode("footnoteNum", () => {
    return `<label class="margin-toggle sidenote-number"></label>`;
  });

  eleventyConfig.addShortcode("footnote", (message) => {
    return `<span class="sidenote">${message}</span>`;
  });

  eleventyConfig.addShortcode("sidenote", (message) => {
    return `<span class="marginnote">${message}</span>`;
  });

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
