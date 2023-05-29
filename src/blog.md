---
title: Blog
layout: blogpage.njk
dir: blog
templateEngineOverride: "njk,md"
---

Welcome to my blog archive! I write about a lot of things, but mostly programming and technology in general. Enjoy your read!
<br/>
{% for post in collections.posts | reverse %}
<a href="{{ post.url }}" class="post">{{ post.data.title }}</a> <span class="post-date">{{ post.page.date.toLocaleDateString('en-US', {timeZone: 'UTC'}) }}</span>

> {{ post.data.excerpt }}

{% endfor %}
