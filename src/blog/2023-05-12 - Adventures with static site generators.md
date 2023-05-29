---
title: Adventures with static site generators
excerpt: "A ton of tutorials have already written about this, so I won’t go into much technical detail…"
---

A ton of tutorials have already written about this, so I won’t go into much technical detail, but I still want to make my own record of my journey in building _this_ site in particular. I’ll link the tutorials I used as well as the official documentation for your perusal!

## A bit of context

I’ve always enjoyed playing around with code ever since high school programming classes, and even more so with making my own Tumblr themes[^1]. But Tumblr theming has always been limited, and then a few years later, I found about Neocities! It was so fascinating browsing (or surfing) around people’s handmade websites. They all had so much personality with the classic marquee text and blinkies and GIFs. I had a carrd that was pretty much the starting idea for this website which I expanded more on. (See: [Building the site from scratch](/post/))

My prior knowledge with HTML/CSS/JS has armed me well enough to make a simple layout… at first. And then it became increasingly tedious to make each page consistent without any sort of templating. So much copy-pasting. Even the 404 page’s code was so verbose and unreadable simply because of the page layout (so much `<div>`s) and not because of the page content itself.

Which is a problem if I’m going to make a blog and several other pages.

## And then I found out about static site generators

I’ve heard about static site generators before, but I always assumed they were one of those Weebly–like click–and–drag web components thing… Well, you could say that was a moment of stupidity.

I found out what static site generators really are with this [blog post](https://cavacado.neocities.org/posts/020221/), aptly hosted on Neocities.

Essentially, and this is by my own words, static site generators are a sort of templating engine, where you define a layout (and some components, commonly called _partials_). The actual web content is separated into different files, one per page, and when you run a command, it’ll generate the static site for upload to Neocities or some other web hosting site of your choice.

[11ty](https://www.11ty.dev/) is one of those static site generators. There are a lot more of them, and I would say there aren’t really a lot of significant differences aside from the language used in templating[^2], I believe. I chose 11ty for ease of use. [Hugo](https://gohugo.io/) is also another popular choice, but I didn’t really want to learn an entirely new language just for it.

## Integrating with 11ty

It’s as easy as running the command `npm install @11ty/eleventy` in your project directory. I’m on Windows[^3], so I used my pre-installed [WSL](https://learn.microsoft.com/en-us/windows/wsl/about) with Debian distro for this. You could certainly use the [chocolatey](https://chocolatey.org/) package manager if you’d like.

Follow along this [tutorial](https://flamedfury.com/guides/11ty-homepage-neocities/) for the technical details. Take note that the commands on that tutorial are for UNIX systems, which is partly why I just used WSL.

My project directory was on Windows instead of the WSL file system, so it was a _bit_ slow in terms of serving and building the site; [it’s a known performance issue of WSL 2](https://learn.microsoft.com/en-us/windows/wsl/compare-versions#comparing-features). I would have to re–serve it to apply the changes, and so development became kinda annoying and slower.[^4] I find that running `npm start` inside my `src/` folder fixes the issue somewhat, but any changes in subfolder files don’t trigger the reload.

Initially, the page contents were in HTML files (e.g., `index.html`, `whoami.html`, etc.), which can be good enough. However, I opted to use Markdown for much easier formatting (and blog post writing). For this, I used [`markdown-it`](https://github.com/markdown-it/markdown-it). You install it the same way: `npm install markdown-it`.

## Plugins, plugins, and more plugins

This is one of the biggest advantages of using static site generators. Plugins!

Plugins are basically addons for the generator to accommodate more features. `markdown-it` is one such plugin for 11ty that I’ve used, which allows you to use Markdown files instead of HTML.[^5]

Mostly I’ve installed some `markdown-it` plugins for [footnotes](https://github.com/markdown-it/markdown-it-footnote) and [task lists](https://github.com/revin/markdown-it-task-lists). There’s a lot more plugins both for 11ty and `markdown-it`, and I’m planning to integrate some of those in the near future. Though, I shouldn’t get too plugin-happy and install too many that it would become bloated[^6] for a personal blog.

To add plugins to your plugins, `markdown-it` for this instance, do this (from the [docs](https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance)):

```js
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

  // pass markdown-it options
  eleventyConfig.setLibrary("md", markdownIt(mdOptions));
  // use markdown-it-footnote in markdown-it
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mdFootnote));
  // pass markdown-it-task-lists options
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(mdTaskList, mdTasklistOptions)
  );
};
```

As you can see, I’ve also added `@11ty/eleventy-plugin-syntaxhighlight` plugin with the [Tokyo Night Storm](https://github.com/folke/tokyonight.nvim/tree/main/extras/prism) PrismJS theme. Unfortunately, it’s not in CSS, so I had to manually create the stylesheet with the colour scheme. I used an existing theme as a template and replaced the colour values like so:

```css
/* CSS variables */
:root {
  --plain-color: #c0caf5;
  --plain-backgroundColor: #24283b;
  --selection-backgroundColor: #2a2f41;
  --prolog-color: #f7768e;
  --comment-color: #565f89;
  --constant-color: #ff9e64;
  --keyword-color: #9d7cd8;
  --symbol-color: #2ac3de;
  --string-color: #9ece6a;
  --variable-color: #7aa2f7;
  --url-color: #89ddff;
  --punctuation-color: #bb9af7;
}

/* example */
.token.keyword {
  color: var(--keyword-color);
}

.token.variable,
.token.operator,
.token.function {
  color: var(--variable-color);
}
```

For other themes, they’re available [here](https://github.com/PrismJS/prism-themes). Simply link the CSS file in your `base.njk` file. If you create your own CSS file, you can use CSS variables and media query `prefers-color-scheme` to have both light and dark themes syntax-highlighting as well. Pretty neat, eh?

I also have another plugin to make all external links open in a new tab with the `noreferrer` attribute value. You can check out the plugin [here](https://www.npmjs.com/package/@sardine/eleventy-plugin-external-links).

## 11ty and blogging

Blog post writing is where 11ty and Markdown really shines. Type your blog writeup on a Markdown editor of your choice, save it in your `posts/` directory, and build. Sure, a CMS could have done all that in a more robust[^7] way, but I like getting my hands code-dirty.

Here’s a [tutorial](https://11ty.rocks/posts/create-your-first-basic-11ty-website/#create-the-blog) for that. The important thing here is to have your blog folder and JSON file be the same name. That is, if you have a `blog/` folder, your JSON should be `blog.json`. The JSON file will allow you to apply the same layout to all the other files in that folder, among other things.

And how you access the data would be defined by the `tags` property, also called _collections_ in 11ty. So, it doesn’t have to be the same name as your folder or JSON file. A `blog.json` file can have a different collection name.

```json
// blog.json
{
  "layout": "post",
  "tags": "posts"
}
```

The tutorial I linked covers more info on how this can be applied to blog posts, but I just wanted to record that the folder and JSON file should have the same name, since that wasn’t covered in any documentation or tutorial I followed, AFAIK.[^8]

On the left (or up top if you’re on mobile), you can see a little box with the five most recent posts listed. The solution isn’t immediately obvious—I found out from [here](https://github.com/11ty/eleventy/issues/1046) how to do exactly that:

{% raw %}

```njk
{% set postList = collections.posts | reverse %}
{% for post in postList.slice(0,5) %}
...
{% endfor %}
```

{% endraw %}

As for date formatting, which is also a headache to deal with, I used the builtin JavaScript method of `toLocaleDateString()`. I added the option `{timeZone: 'UTC'}`, to [display the correct date](https://www.11ty.dev/docs/dates/#dates-off-by-one-day).

```html
<p class="post-date">
  Posted: {{ page.date.toLocaleDateString('en-CA', {timeZone: 'UTC'}) }}
</p>
```

## not_found.html

When you build your static site for upload, you’ll notice that subpages are contained within a folder of the same name, e.g., a subpage `about.md` will become `about/index.html`. There won’t be any issues uploading this file structure on Neocities. When linking to subpages, instead of directly linking to the file, you can omit the file extension altogether:

```md
[Markdown link example](/about)
```

Or in HTML:

```html
<a href="/about">HTML link example</a>
```

For the 404 page, which is the `not_found.html` file for Neocities, simply copy-pasting the `not_found/` folder onto Neocities _won’t_ work. Any 404 pages won’t redirect to your custom Not Found page.

To fix this, you can manually rename it back from `index.html` to `not_found.html` and move the file onto the root directory. That is, outside of any folders.

An easier way is to simply add `permalink: "not_found.html"` in the frontmatter of your file, which will output it directly into the root directory instead of the default `folder/index.html` format.

```yaml
---
layout: base.njk
title: 404 Page Not Found
permalink: "not_found.html"
---
```

## Future work

Like I said, I’d like to add more plugins, but not too much. I also want to use Github actions to set up a pipeline for automatically deploying updates to Neocities. [Here’s a list](/roadmap) of all the other things I want to do for this website.

All in all, I’m super glad I learned something new in this journey, and I hope you did, too!

[^1]: I made a few themes, but I always opted for the pre–made ones for my own blog and tweaked them because I’m too lazy to code a theme from scratch, plus Tumblr’s limited templating and routine (and frankly, unwanted) updates, and I just completely gave up on theming.
[^2]: Another factor is how fast it is, but honestly for small websites usually hosted in Neocities, it wouldn’t really matter.
[^3]: My laptop is dual-booted with Windows and Manjaro. It’s been a while since I booted to Manjaro and I’ve been meaning to re–install it on the new drive I had bought. But… I am lazy.
[^4]: This was an [existing issue](https://github.com/11ty/eleventy/issues/2717) on their Github about this.
[^5]: I’m unsure if you would need to manually install and inject it into the config, but if you will use `markdown-it` plugins, then it may be a good idea to include it anyways (?)
[^6]: Funnily enough, I couldn’t find an xkcd post about software bloat yet?
[^7]: Probably? I’ve never used a CMS before lmao.
[^8]: As you can imagine, it took me a long time to realize this.
