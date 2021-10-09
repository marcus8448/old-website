---
layout: default
title: Blog
permalink: /blog/
---
{% for post in site.posts %}
<article class="media" style="background: #eeeeee; padding: 16px; margin-right: 1rem; border-radius: 0.5rem;">
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