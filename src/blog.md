---
title: ~/blog
layout: homepage.njk
dir: blog
pagination:
  data: collections.posts
  size: 5
  alias: posts
  reverse: true
---

<section class="content">

# ~{% if tag != 'home' %}{{ '/' | concat: dir }}{% endif %}{% if tag == 'home' %}{{ ' ' | concat: title }}{% endif %}

Welcome to my blog, where I talk to the void and use copious amounts of footnotes.

{% if collections.posts %}

  <ul class="blog-list">
{% for post in posts %}

{% include 'bloglist.njk' %}

{% endfor %}

  </ul>
</section>
{% endif %}
