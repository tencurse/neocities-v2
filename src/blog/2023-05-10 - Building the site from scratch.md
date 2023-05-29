---
title: General considerations when building this site
excerpt: "I like coding things from scratch. Mostly websites. It’s so fun to experiment with HTML and CSS without the complexity of frameworks…"
---

I like coding websites from scratch. It’s so fun to experiment with HTML and CSS without the complexity of frameworks. Before building my Neocities, I have created only one other website: my “professional” portfolio of projects. I used a YouTube tutorial for that[^1], and while it looks cool with smooth animations, I don’t feel the same sense of pride I do when I build something from scratch.

And before that, I’ve also done my fair share of creating Tumblr themes ten years ago, but that website has shipped so many changes that there would be so much work to update it. Not to mention the designs on those were, uh, pretty mediocre.

I’m a full–fledged software developer now, though I don’t really work much with websites. I’ve learned a few tricks since then—still learning, because you don’t ever stop learning in this line of work—and with the decline of several social media websites, there is that growing itch to carve my own space in the world wide web.

Enter: my Neocities site.

sadgrl.online has a [nifty layout builder](https://sadgrl.online/projects/layout-builder/), which is honestly a great starting point. It’s responsive, customizable, easy to understand. There’s a lot more layouts and templates out there, if you know where to find them. And they’re all good enough, but for me, of course, I want something that has my _personal_ touch on it. After all, that’s why a lot of us hosted our websites on Neocities.[^2]

As an aside, I won’t discuss too much technical detail. The struggle was mostly in the CSS, as it usually is, and maybe I’ll make a separate post for that, but this blog will be more about the journey rather than the destination.

## The layout

I am _obsessed_ with customization. I can spend hours upon hours on character creation in games. I even refer to _The Sims 4_ as a ‘dress-up’ game, because I would mostly play in Create–A–Sim mode, changing my Sims’ features and outfits. I have the same fervor even in my devices; my Samsung phone is customized with a different launcher and app icons, and before that, I rooted my iPhone to customize it to hell and back.

Ever since I stumbled upon [r/unixporn](https://www.reddit.com/r/unixporn/), I simply fell in love with Linux systems. Of course, there’s lots of other things to love about them[^3], but the customizable aesthetic instantly won my heart. I proceeded to dual–boot my laptop(s) with Manjaro KDE (and later, XFCE) and go absolutely _ham_ customizing it.

[INSERT SCREENSHOT HERE]

It’s not as sophisticated as the others, I’ll admit, and I haven’t really gone to the trenches to _really_ customize it—because at some point you’ll just never get anything done if you keep changing the appearance instead of keeping it functional.

In Linux systems, the terminal is your best friend.[^4] Of course, I made mine look pretty:

[INSERT SCREENSHOT]

Colour scheme is Tokyo Night, the same theme this website is using.[^5] The `pfetch` command you see is a derivative of the popular `neofetch` command, which displays quick information about your system. It’s also common to include it when sharing your ‘rice’ on the Internet.

I loved it so much that I even made my [carrd](https://cryoculus.carrd.co/) layout similar to it. And now, I did the same here. The sidebars are an emulation of that terminal. Typically, terminals show the username and current directory, like so:

```nix
kirsten@earth ~/documents: sudo apt get update
```

For UX purposes, I omitted the username/directory after the first “terminal” in the sidebar, because not everyone is familiar with how terminals look like and what information it’s supposed to convey. Instead, I replaced it with descriptive titles to make it more normie–friendly. So, to the tech bros, yes, I know that’s not how a terminal should look like, but I gotta think of the UX, baby.

## Accessibility vs. design

Speaking of UX, let’s talk about accessibility. We’re on Neocities, where websites are full of personality, sometimes at the cost of accessibility. When building this site, or any other site for that matter, I don’t like to compromise accessibility for design. It’s just as important, because we want _everyone_ to see and navigate our websites, regardless if they’re conventional or unconventional ways[^6].

In web development, there’s a few factors that affect this:

1. Semantic HTML
2. Colour contrasts
3. Responsiveness
4. Typography

### Semantic HTML

Semantic HTML, in my own words, is basically descriptive HTML tags. Using these is a great way of avoiding the affliction of ‘`<div>`itis’.[^7] For the main content, instead of a `<div>`, you would use `<main>`. For headers and footers, use `<header>` and `<footer>`. Here’s a [list](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements).

It’s easier to create a stylesheet when you have a selector `section.blog` instead of `.blog` or `div.blog`, where there could be multiple `<div>`s and nested `<div>`s.[^8] The HTML is more readable this way, too, particularly when you’re still in development. It’s also a good way to make you really think about your layout: which should go to `<main>` and which should be in `<aside>`? Can this `<div>` be a `<section>` instead?

But where semantic HTML is arguably most important is for screen reading. Screen readers navigate through websites using the HTML source code, and so if your website is afflicted with `<div>`s in the body, it’ll be hard to determine at which part of the website you are in. There’s much more to screen readers than this, such as `aria-label`s, but every little bit helps.

Nested `<div>`s are valid, and honestly, they’re unavoidable when you’re working with frontend frameworks. But ideally, whenever possible, semantic HTML should still be used.

### Colour contrasts

- Shitty Tumblr theme contrasting colours
- Boring minimalist websites
- Where can we achieve a balance of a colourful website while still having contrasting colours?
- Enter: IDE colour schemes
  - Dark theme and light theme
- Can also check Accessibility issues in browser dev tools

### Responsiveness

Sometimes, it’s easier to pull out your phone than get to your laptop to open a website. And not everyone has easy access to a desktop to simply view your website. Disclaimers may inform your visitor that, _“hey, this website is best viewed on desktop”_, which is fine, but the lack of responsiveness will very much limit the people who can enjoy your website and its content.[^9]

There’s two ways to approach designing in terms of responsiveness: mobile–first and desktop–first. From the names itself, mobile–first is designing a layout for mobile devices first, which would typically look like one vertical column. Desktop–first is the opposite, creating a layout for the desktop, then adjusting to make it work for mobile devices.

My instinct is always desktop–first, because I would be developing on my laptop. I have attempted the mobile–first approach once, but found it was difficult to adjust from a vertical layout to a more complex layout on desktops.[^10]

This site is built desktop–first. It was tricky to think about how I would incorporate the terminal layout with the page content while still making it responsive. On desktop, the overall layout is arranged by `display: grid` with multiple columns, and on mobile, it becomes `display: flex` with `flex-direction: column`, making it one long vertical column, perfect for mobile screens. This is the simplest approach, and possibly the easiest and/or most effective.

You can also do something like hiding mobile elements on desktop and vice versa. For example, if you have a hamburger menu for mobile layouts, you can hide it with `display: none` on wider screens and instead `display: block` your more complex menu for desktop. And vice versa.

Lots of ways to go about it. I don’t like making too much of a fuss on responsiveness. Just keeping it simple.

### Typography

While building this site, I’ve changed the font family several times. I knew I wanted it to be monospace to maintain the “terminal” aesthetic, but I also wanted it to be readable, especially for long blogs like this one. Coming from Tumblr, I’ve stumbled upon blogs that had tiny pixel font, or terribly misused fonts for paragraphs, which makes the posts hard to read.

I used **IBM Plex Mono** first, because it’s free, open source, and available on Google Fonts. I’ve been using it as my go–to font when coding, but somehow it just wasn’t perfect for me as the font for this website.

After a few iterations, I switched to **Inconsolata**, which is also available on Google Fonts. However, it does not have styles for _italic_ and **bold**, which results in a forced rendering of those styles. A quick search later, I found a variation of it called **Inconsolata LGC Markup**, which can be found [here](http://bdtechconcepts.com/Inconsolata-LGC-Markup-Font.html), and another variant, **Inconsolata LGC**, found [here](https://github.com/MihailJP/Inconsolata-LGC). It includes the italics and heavier font weights, and the Markup variation also distinguishes between different symbols, such as the en dash and em dash.

There are a lot more considerations for fonts and typography, which I am not well–versed in, but the main things are:

1. Use two font families at _most_. Three if you really need to.
2. Different fonts can be used for headings and paragraphs for emphasis, but not necessary
3. Some fonts are better for headings, some are made for paragraphs
4. Italics and varying font weight can be used for emphasis, but sometimes size differences can do that better

There’s also line height and paragraph spacings, as well as the optimal line length, [which is around 50 to 75 characters per line](https://baymard.com/blog/line-length-readability).

These are not hard and fast rules, but simply guidelines. Break ‘em if that’s what works for you.

## TL;DR

We don’t have to sacrifice accessibility for a website’s personality. It is definitely difficult the more complex layouts become, but I think it is something we should all strive for.

[^1]: I’ll admit, I attempted to create my own at first, but it didn’t, uh, end well. It was a combination of mediocre design and cluelessness in execution.
[^2]: There’s a lot more web hosting options out there, like Github pages (which is where my portfolio is hosted), but Neocities has a culture of hosting handcrafted personal websites. Plus, it’s free.
[^3]: They’re free and open–source, meaning they’re free from the shackles of capitalism. Mostly.
[^4]: Some configs even run on terminals _only_, with music players and text editors running on terminals.
[^5]: Also the same theme I use for literally everything now if it’s available.
[^6]: Like screen readers.
[^7]: [Wiktionary definition](https://en.wiktionary.org/wiki/divitis): The practice of authoring web-page code with many div elements in place of meaningful semantic HTML elements.
[^8]: This is also a life–saver for CSS specificity. The more semantic your HTML, the more specific you can get in your CSS, the less chance of a headache, _and_ you don’t have to use `!important` everywhere.
[^9]: I have unfortunately stumbled upon a website on Neocities that outright prevented me from navigating it just because I was on mobile. Like, why?
[^10]: Either that, or it would simply retain its verticality on desktops, which makes for a limited and boring design. (Or maybe I’m just an amateur?)
