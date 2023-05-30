---
title: Welcome to my digital garden! 🌱
layout: homepage.njk
tag: home
---

<section class="content">

# ~{% if tag != 'home' %}{{ '/' | concat: dir }}{% endif %}{% if tag == 'home' %}{{ ' ' | concat: title }}{% endif %}

Howdy! I'm **Kirsten (she/her)** and I am a woman in STEM and the arts. Software developer by day, fiction writer by (mid)night.

I hope to create my own little digital garden{% footnoteNum %}{% footnote "Not to be confused with the [note–taking term](https://github.com/MaggieAppleton/digital-gardeners#what-is-digital-gardening) or [Zettelkasten](https://zettelkasten.de/posts/overview/), but in the future it may evolve to that!" %}, planted with my [thoughts](/blog) and my [works](/writing).

Here's a [map](/sitemap), go forth and explore!

Or take a look at what I'm doing [now](/now).

Thanks for visiting and take care!

<div id='neossg'>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-variables.js"></script>
  <script type="text/javascript" src="https://neossg.neocities.org/onionring-widget.js"></script>
</div>

</section>

{% if collections.posts %}

<section class="content">

## Latest blog post

{% assign postList = collections.posts | reverse %}
{% assign firstPost = postList | first %}

### <a href="{{ firstPost.url }}" class="post">{{ firstPost.data.title }}</a>

<span class="post-date">{{ firstPost.page.date | toUTC }}</span>

> {{ firstPost.data.excerpt }}

<a href="{{ firstPost.url }}">Read more →</a>

**[Go to the archive →](/blog/)**

</section>

{% endif %}

{% assign ficLength = collections.fics | size %}

{% if ficLength > 0 %}

<section class="content">

## Latest fic

{% assign fic = collections.fics | first %}

<div class="fic">
<h3>
<a href="{{ fic.page.url }}" class="post">{{ fic.data.title }}</a></h3>
{% case fic.data.content_rating %}{% when 'Explicit' %}<span class="stat explicit">{% when 'Mature' %}<span class="stat explicit">{% when 'Teen and Up' %}<span class="stat teen">{% when 'Gen' %}<span class="stat teen">{% else %}<span class="stat">{% endcase %}[ {{ fic.data.content_rating }} ]</span><span class="stat ship">[ {{ fic.data.relationships }} ]</span>{% if fic.data.status == 'Completed' %}<span class="stat completed">[ {{ fic.data.status }} ]</span>{% else %}<span class="stat wip">[ {{ fic.data.status }} ]</span>{% endif %}

**Content Warning:**
{%- for warning in fic.data.content-warning -%}<span>{{ warning }}{%- if warning != fic.data.content-warning.last -%},{%- endif -%}</span>{% endfor %}
**Fandom:** {{ fic.data.fandom }}
{% if fic.data.ship %}**Ships:**
{%- for rel in fic.data.ship -%}
<span>{{ rel }}{%- if rel != fic.data.ship.last -%},{%- endif -%}</span>
{%- endfor -%}
{% endif %}
**Word Count:** {{ fic.data.word-count }} | **Chapters:** {{ fic.data.chapters }}
**Published:** {{ fic.data.date | toUTC }}{% if fic.data.status == 'Completed' and fic.data.chapters > 1  %} to {{ fic.data.date_completed | toUTC }} {% endif %}

> {{ fic.data.excerpt }}

<a href="{{ fic.url }}">Read more →</a>

**[See more works →](/writing/)**

</div>

</section>

{% endif %}

<section class="content">

## Site updates

{% assign firstUpdate = updates | first %}

**{{ firstUpdate.date }}:** {{ firstUpdate.update }}

**[See more updates →](/changelog)**

<p></p>

</section>
