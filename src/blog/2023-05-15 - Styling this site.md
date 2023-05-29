---
title: Styling this site
---

Now, we go on to the actual nitty gritty of how I built this site. Previously, I mentioned that most of my struggle was in the CSS. Here, I'll discuss what were my decisions and considerations.

There _will_ be more technical detail here. Consider yourself warned.

## Specificity in selectors, a.k.a. why you shouldn't use `!important`

(maybe this should be in a different article?)

- what are selectors
  - semantic HTML vs div
- what are specificity
- why is !important bad
- chaining and grouping selectors

## Colours in variables

- CSS variables
  - how to define them
  - how to use them
  - does not carry over to other stylesheets but can be imported

### Light and dark mode

- media query
- adding classes with javascript

## Typography

- Define 1 rem in root
  - 16px = 1rem
- em changes based on the rem (?)
  - if you change the root style, everything else will adjust accordingly. which is neat.

## Flexbox and grid

- grid on desktop, flex column on mobile
- either can be used or both in whichever way you fancy
- tables were used before grid existed, grid is more dynamic

### Responsiveness with media query

- screen sizes

## Some neat CSS snippets

- smooth scroll
