---
title: ~/blog
layout: homepage.njk
dir: blog
---

<section class="content">

# ~{% if tag != 'home' %}{{ '/' | concat: dir }}{% endif %}{% if tag == 'home' %}{{ ' ' | concat: title }}{% endif %}

<pre class="ascii">
　 　 ∧,,∧
　　 (; ・ω・）
＿_ (__つ/￣￣￣/＿ 
　 　 ＼/　　　　 / 
　　　　 ￣￣￣ 　　
</pre>

Welcome to my blog, where I talk to the void and use copious amounts of footnotes.

{% if collections.posts %}
{% assign posts = collections.posts | reverse %}

  <ul class="blog-list">
{% for post in posts %}

{% include 'bloglist.njk' %}

{% endfor %}

  </ul>
</section>
{% endif %}
