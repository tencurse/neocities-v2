---
title: Welcome to my cyberspace!
layout: mainpage.njk
tag: home
templateEngineOverride: "njk,md"
---

Howdy! I'm **Kirsten (she/her)** and I am both a woman in STEM and the arts. Software developer by day, fiction writer by (mid)night.

I hope to carve my own little cyberspace, sharing things I like and find interesting.

Check out the sidebar on the left (or up top if you're on mobile) for navigation links, some quick info about yours truly, and recent blog posts!

Thanks for visiting and take care!

---

## Latest blog post

{% set postList = collections.posts | reverse %}
{% set firstPost = postList | first%}
<a href="{{ firstPost.url }}" class="post">{{ firstPost.data.title }}</a> <span class="post-date">{{ firstPost.page.date.toLocaleDateString('en-CA', {timeZone: 'UTC'}) }}</span>

> {{ firstPost.data.excerpt }}

## Site updates

**2023-05-13:** Installed more 11ty plugins, added syntax highlighting (both light and dark mode, yay!), updated _About_ page, added _Blog_ page, updated sidebar with recent blog posts

[See more updates](/changelog)
