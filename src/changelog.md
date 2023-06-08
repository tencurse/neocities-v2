---
title: Changelog
dir: changelog
layout: mainpage.njk
---

Check out the [Kanban board](https://github.com/users/tencurse/projects/1/views/1)!

{% for update in updates%}

<span class="update-date">{{ update.date | toUTC }}</span> {{ update.update }}

{% endfor %}

---

## Related

[Roadmap](/roadmap)
