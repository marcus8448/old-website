---
layout: default
title: Blog
permalink: /blog/
---
<title>marcus8448's Blog</title>
<br>
{% for post in site.categories.blog %}
<article class="media" style="background: #eeeeee; padding: 16px; margin-right: 32px; border-radius: 24px;">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{post.image}}">
    </p>
  </figure>
  <div class="media-content">
    <a class="content" href="{{post.url}}">
      <p>
        <strong>{{post.title}}</strong> <small>{{post.date}}</small>
        <br>
        {{post.excerpt}}
      </p>
    </a>
  </div>
</article>
{% endfor %}