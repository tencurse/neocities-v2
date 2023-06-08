---
title: Welcome to my digital garden! 🌱
layout: homepage.njk
tag: home
---

<section class="content">

# ~ Welcome to my <span class="wave hometitle">digital garden</span>

<pre class="ascii">
　　　 　  ∧,,∧
　　　　） (´･ω･) 　 　 　 　Hello!
　　　 (　 ( つ/￣￣￣/　
　　(´[_]　＼/＿＿＿/)
　　 [i＝========＝i]
　　　 _｡_　 　
　 Ｃ(＿ｱ
</pre>

Howdy! I'm **Kirsten (she/her)**. Software developer by day, fiction writer by night.

I hope to create my own little digital garden{% footnoteNum %}{% footnote "Not to be confused with the [note–taking term](https://github.com/MaggieAppleton/digital-gardeners#what-is-digital-gardening) or [Zettelkasten](https://zettelkasten.de/posts/overview/), but in the future it may evolve to that!" %}, planted with my [thoughts](/blog) and my [works](/projects).

Here's a [map](/sitemap), go forth and explore!

Thanks for visiting and take care!

</section>

{% if collections.posts %}

<section class="content">

## Recent blog posts

<ul class="blog-list">
{% assign posts = collections.posts | reverse %}
{% assign posts = posts | slice: 0, 3%}
{% for post in posts %}

{% include 'bloglist.njk' %}

{% endfor %}

</ul>
</section>
{% endif %}

<section class="content">

## Site updates

{% assign update = updates | first %}

<span class="update-date">{{ update.date | toUTC }}</span> {{ update.update }}

**[See more updates →](/changelog)**

<p></p>

</section>
