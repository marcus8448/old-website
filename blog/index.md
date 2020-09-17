---
layout: default
title: Blog
permalink: /blog/
---
# marcus8448's Blog
<hr>
<div class="tiles" style="display: flexbox;">
{% for post in site.posts %}
<div class="tile" markdown=1>
{% if post.image %}
<img src="{{post.image}}" alt="logo" class="tile">
{% else %} 
<img src="/marcus8448.png" class="tile">
{% endif %}

<div style="display: block;" markdown=1>
# [{{post.title}}]({{post.url}}) 
{% if post.description %}
{{post.description}}
{% else %}
{{post.excerpt}}
{% endif %}
</div>

</div>
  {% endfor %}
<div>