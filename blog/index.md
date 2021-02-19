---
layout: default
title: Blog
permalink: /blog/
---
# marcus8448's Blog

{% for post in site.categories.blog %}
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{post.image}}">
    </p>
  </figure>
  <div class="media-content">
    <a class="content" href="{{post.url}}">
      <p>
        <strong>{{post.title}}</strong> <small>@{{post.author}}</small> <small>{{post.date}}</small>
        <br>
        {{post.excerpt}}
      </p>
    </a>
  </div>
</article>
{% endfor %}