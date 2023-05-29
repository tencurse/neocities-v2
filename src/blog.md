---
title: ~/blog
layout: homepage.njk
dir: blog
---

<section class="content">

# ~{% if tag != 'home' %}{{ '/' | concat: dir }}{% endif %}{% if tag == 'home' %}{{ ' ' | concat: title }}{% endif %}

Welcome to my blog, where I talk to the void and use copious amounts of footnotes.

</section>

{% if collections.posts %}
{% for post in collections.posts | reverse %}

<section class="content">
<p>

## <a href="{{ post.url }}" class="post">{{ post.data.title }}</a>

<span class="post-date">{{ post.page.date | toUTC }}</span>

> {{ post.data.excerpt }}

<a href="{{ post.url }}">Read more →</a>

</p>
</section>
{% endfor %}
{% endif %}
