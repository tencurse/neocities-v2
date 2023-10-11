---
title: Who am I?
dir: about
layout: mainpage.njk
---

{% include 'fetch.njk' %}

Howdy! I’m **Kirsten (she/her)**. Software developer by day, fiction writer by night.

**I’m a proponent of open source software and the ad–free web.** Use Mozilla Firefox, install adblock of your choice, install SponsorBlock for YouTube. Support open source software and independent creators whenever you can. Dual–boot Linux, or throw away Windows altogether.{% footnoteNum %}{% footnote "It’s not always the easiest (or even practical) in a capitalist world like this one. But we do our best." %}

What am I doing [now](/now)?

## Where to find me

<section class="terminal navbox">
  <p>
    <button class="btn host" tabindex="-1"><span>kirsten@earth</span></button>
    <button class="btn dir2" tabindex="-1">
      <span>~{% if tag != 'home' %}/{{ dir }}{% endif %}</span>
    </button>
    contact
  </p>
  <div class="fetch-box">
    <table class="fetch">
      <tr>
        <td class="fetch">cbox</td>
        <td><a href="/comms">/comms</a></td>
      </tr>
      <tr>
        <td class="fetch">email</td>
        <td>10kph@pm.me</td>
      </tr>
      <tr>
        <td class="fetch">neocty</td>
        <td><a href="https://neocities.org/site/10kph">@10kph</a></td>
      </tr>
    </table>
  </div>
  <p>
    <button class="btn host" tabindex="-1"><span>kirsten@earth</span></button>
    <button class="btn dir2" tabindex="-1">
      <span>~{% if tag != 'home' %}/{{ dir }}{% endif %}</span>
    </button>
    socials
  </p>
  <div class="fetch-box">
    <table class="fetch">
      <tr>
        <td class="fetch">tumblr</td>
        <td><a href="https://agnikai.tumblr.com/" rel="me">@agnikai</a></td>
      </tr>
      <tr>
        <td class="fetch">twt</td>
        <td><a href="https://twitter.com/10kph" rel="me">@10kph</a></td>
      </tr>
      <tr>
        <td class="fetch">fedi1</td>
        <td><a rel="me" href="https://tech.lgbt/@kirsten">@kirsten@tech.lgbt</a></td>
      </tr>
      <tr>
        <td class="fetch">fedi2</td>
        <td><a rel="me" href="https://fandom.ink/@kirsten">@kirsten@fandom.ink</a></td>
      </tr>
      <tr>
        <td class="fetch">ao3</td>
        <td><a href="https://archiveofourown.org/users/symmetra" rel="me">@symmetra</a></td>
      </tr>
    </table>
  </div>
</section>

<br />

## About the site

> Are you telling me a queer coded this?

{% sidenote '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.' %}

This mobile–friendly site is handcrafted using 11ty for Firefox browsers. The aesthetic is inspired by Linux systems and the terminal.

See the source code on [Github](https://github.com/tencurse/neocities). Everyone copy–pastes code, I assure you, but if you do, please take the time to learn what you are copy–pasting. Arm yourself with knowledge.

### Site credits

- [VS Code](https://code.visualstudio.com/) – My trusty code editor. Free, customizable, open source.
  - [VSCodium](https://vscodium.com/) – a community–driven, free–licensed distribution of VS Code for the Microsoft haters
- [11ty](https://www.11ty.dev/docs/getting-started/) – Simple, lightweight static site generator. Supports a bunch of templating languages.
- [TufteCSS](https://github.com/edwardtufte/tufte-css) - CSS stylesheet used as a base for this site
- [deploy-to-neocities](https://deploy-to-neocities.neocities.org/) – Quick setup to automatically deploy your changes to Neocities using a GitHub workflow
- [JuliaMono](https://juliamono.netlify.app/) - font used for the site
- [2ch のかわいい AA/顔文字まとめ ](https://2ch-aa.blogspot.com/) - Kaomoji / ASCII art credit
- [agnoster ohmyzsh theme](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#agnoster) – Aesthetic inspiration for the navigation. I also use this theme for my personal Linux terminal.
- [neofetch](https://github.com/dylanaraps/neofetch) – This is what the user info in the about page references. This command has a lot of other derivatives, and [pfetch](https://github.com/dylanaraps/pfetch) is my personal favourite.
- [Tokyo Night](https://github.com/folke/tokyonight.nvim) – Colour scheme used for the website and syntax highlighting. Light theme is tweaked a little for better contrast. Find more terminal colour schemes [here](https://gogh-co.github.io/Gogh/).
- [CSS Tricks, my beloved](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web) – Tutorial for implementing dark mode and light mode in your website. ~~I tweaked the JavaScript code a lot to suit my needs.~~
  - [Simple dark mode with CSS variables](https://lukelowrey.com/css-variable-theme-switcher/) – Tutorial I used for the theme switcher dropdown using `data-theme` attributes. I also implemented the same for my font switcher!

Find more web dev resources [here](/resources/dev)!
