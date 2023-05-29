---
title: Building the site from scratch
excerpt: "I like coding things from scratch. Mostly websites. It’s so fun to experiment with HTML and CSS without the complexity of frameworks…"
---

I like coding things from scratch. Mostly websites. It’s so fun to experiment with HTML and CSS without the complexity of frameworks. Before building my Neocities, I have created only one other website: my “professional” portfolio of projects. I used a YouTube tutorial for that[^1], and while it looks cool with smooth animations, I don’t feel the same sense of pride I do when I build something from scratch.

Enter: my Neocities site.

sadgrl.online has a [nifty layout builder](https://sadgrl.online/projects/layout-builder/), which is honestly a great starting point. It’s responsive, customizable, easy to understand. There’s a lot more layouts and templates out there, if you know where to find them. And they’re all good enough, but for me, of course, I want something that has my *personal* touch on it. After all, that’s why I hosted my website on Neocities[^2].

As an aside, I won’t discuss too much technical detail. Mostly the struggle was in CSS, as it usually is, and maybe I’ll make a separate post for that, but this blog will be more about the journey rather than the destination.

## Layout inspiration

I am *obsessed* with customization. I can spend hours upon hours on character creation in games. I even refer to *The Sims 4* as a ‘dress-up’ game, because I would mostly play in Create–A–Sim mode, changing my Sims’ features and outfits. I have the same fervor even in my devices; my Samsung phone is customized with a different launcher and app icons.

Ever since I stumbled upon [r/unixporn](https://www.reddit.com/r/unixporn/), I simply fell in love with *NIX systems. Of course, there’s lots of other things to love about them[^3], but the customizable aesthetic instantly won my heart. I proceeded to dual–boot my laptop(s) with Manjaro KDE (and later, XFCE) and go absolutely *ham* customizing it.

[INSERT SCREENSHOT HERE]

In *NIX systems, the terminal is your best friend.[^4] Of course, I made mine look pretty:

[INSERT SCREENSHOT]

Colour scheme is Tokyo Night, the same theme this website is using.[^5] The `pfetch` command you see is a derivative of the popular `neofetch` command, which displays quick information about your system.

I loved it so much that I even made my [carrd](https://cryoculus.carrd.co/) layout similar to it. And now, I did the same here. The sidebars are an emulation of the terminal. Typically, terminals show the username and current directory, like so:

```nix
kirsten@earth ~/documents: sudo apt get update
```

For UX purposes, I omitted the username/directory after the first “terminal” in the sidebar, because not everyone is familiar with how terminals look like and what information that conveys. So, to the tech bros, yes, I know that’s not how a terminal should look like, but I gotta think of the UX, baby.

## Accessibility vs. design

Speaking of UX, let’s talk about accessibility. We’re on Neocities, where websites are full of personality, sometimes at the cost of accessibility. When building this site, or any other site for that matter, I don’t like to compromise accessibility for design. It’s just as important, because we want *everyone* to see and navigate our websites, regardless if they’re conventional or unconventional ways[^6].

In web development, there’s a few factors that affect this:

1. Semantic HTML
2. Colour contrasts
3. Responsiveness

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
- Can also check Accessibility issues in browser dev tools

### Responsiveness

Not everyone has access to a PC or a tablet. Sometimes, it’s easier to pull out your phone than get to your laptop to open a website.

There’s two ways to approach designing in terms of responsiveness: mobile–first and desktop–first. From the names itself, mobile–first is designing a layout for mobile devices first, which would typically look vertical columns. Desktop–first is the opposite, creating a layout for the desktop, then adjusting to make it work for mobile devices.

My instinct is always desktop–first, because I would be developing on my laptop. I have attempted the mobile–first approach once, but found it was difficult to adjust from a vertical layout to a more complex layout on desktops[^9].

This site is built desktop–first. It was tricky to think about how I would incorporate the terminal layout with the page content while still making it responsive. On desktop, the overall layout is arranged by `display: grid`, and on mobile, it becomes `display: flex` with `flex-direction: column`. This is the simplest approach, and possibly the most effective.

## Final words

We don’t have to sacrifice accessibility for a website’s personality. It is definitely difficult the more complex layouts become, but I think it is something we should all strive for.

[^1]: I’ll admit, I attempted to create my own at first, but it didn’t, uh, end well. It was a combination of mediocre design and cluelessness in execution.
[^2]: There’s a lot more web hosting options out there, like Github pages (which is where my portfolio is hosted), but Neocities provides a way to explore other handcrafted personal websites. Plus, it’s free.
[^3]: They’re mostly free and open–source.
[^4]: Some configs even run on terminals *only*, navigating through windows using keyboard shortcuts.
[^5]: Also the same theme I use for literally everything now if it’s available.
[^6]: Like screen readers.
[^7]: [Wiktionary definition](https://en.wiktionary.org/wiki/divitis): The practice of authoring web-page code with many div elements in place of meaningful semantic HTML elements.
[^8]:This is also a life–saver for CSS specificity. The more semantic your HTML, the more specific you can get in your CSS.
[^9]: Either that, or it would simply retain its verticality on desktops, which makes for a limited and boring design. (Or maybe I’m just an amateur?)
