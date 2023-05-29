---
title: Kirsten's rambles
layout: blogpage.njk
dir: blog
templateEngineOverride: "njk,md"
---

Welcome to my blog, where I talk to the void and use copious amounts of footnotes.

{% if collections.posts %}
<br/>
{% for post in collections.posts | reverse %}

<p>
<a href="{{ post.url }}" class="post">{{ post.data.title }}</a> <span class="post-date">{{ post.page.date.toLocaleDateString('en-US', {timeZone: 'UTC'}) }}</span>

> {{ post.data.excerpt }} <a href="{{ post.url }}">Read more →</a>

</p>
{% endfor %}
{% endif %}
