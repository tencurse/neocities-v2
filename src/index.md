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

{% if collections.posts %}

## Latest blog post

{% set postList = collections.posts | reverse %}
{% set firstPost = postList | first%}
<a href="{{ firstPost.url }}" class="post">{{ firstPost.data.title }}</a> <span class="post-date">{{ firstPost.page.date.toLocaleDateString('en-CA', {timeZone: 'UTC'}) }}</span>

> {{ firstPost.data.excerpt }} <a href="{{ firstPost.url }}">Read more →</a>

{% endif %}

## Site updates

**2023-05-15**: Extended main container to be a bit wider, adjusted kerning for `<h1>` and `<h2>` styles

[See more updates](/changelog)
