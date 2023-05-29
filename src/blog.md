---
title: Kirsten's rambles
layout: blogpage.njk
dir: blog
templateEngineOverride: "njk,md"
---

Welcome to my blog archive, where I ramble about anything that interests me and make copious use of footnotes.

{% if collections.posts %}
<br/>
{% for post in collections.posts | reverse %}

<p>
<a href="{{ post.url }}" class="post">{{ post.data.title }}</a> <span class="post-date">{{ post.page.date.toLocaleDateString('en-US', {timeZone: 'UTC'}) }}</span>

> {{ post.data.excerpt }}

</p>
{% endfor %}
{% endif %}
