---
title: Changelog
dir: changelog
layout: mainpage.njk
---

{% for update in updates%}

**{{ update.date }}:** {{ update.update }}

{% endfor %}

---

## Related

[Roadmap](/roadmap)
