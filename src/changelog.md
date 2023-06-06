---
title: Changelog
dir: changelog
layout: mainpage.njk
---

Check out the [Kanban board](https://github.com/users/tencurse/projects/1/views/1)!

{% for update in updates%}

**{{ update.date | toUTC }}:** {{ update.update }}

{% endfor %}

---

## Related

[Roadmap](/roadmap)
