---
title: Blog Archive
layout: base.njk
dir: archive
---

{% for post in collections.posts %}
<a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
