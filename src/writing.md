---
title: Writing
dir: writing
layout: homepage.njk
# pagination:
#   data: collections.fics
#   size: 5
#   alias: latestFics
---

<section class="content">

# ~{% if tag != 'home' %}{{ '/' | concat: dir }}{% endif %}{% if tag == 'home' %}{{ ' ' | concat: title }}{% endif %}

> _I may be cringe, but I am free_ —a wise dude

This is an archive of my transformative fanworks, a.k.a., fanfiction.

I am in the process of uploading everything on this site. If you'd like to see all my works, please go to [my AO3 account](https://archiveofourown.org/users/symmetra/works). (Link warning: Explicit content ahead.)

{% assign ficLength = collections.fics | size %}
{% if ficLength == 0 %}

**Nothing to see here! Check back later. :^)**

{% else %}

Content warnings and degrees of sexual content are labeled as such, following [AO3’s system](https://archiveofourown.org/help/symbols-key.html). **Read at your own discretion.**

Works are sorted by most recently published.

{% endif %}

</section>

{% for fic in collections.fics %}

<section class="content">
<div class="fic">
<h2>
<a href="{{ fic.page.url }}" class="post">{{ fic.data.title }}</a></h2>
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

</div>
</section>
{% endfor %}
<p></p>
