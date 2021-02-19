---
layout: default
title: Projects
permalink: /projects/
---
# Projects

<div style="display: flex; flex-wrap: wrap">
{% for post in site.categories.projects %}
<div style="padding-bottom: 8vh; padding-right: 2.5vw;"></div>
<div class="card" style="max-width: 30vw;">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <a class="media-content" href="{{post.permalink}}">
        <p class="title is-4">{{post.title}}</p>
        <p class="subtitle is-6">{{post.type}}</p>
      </a>
    </div>

    <div class="content">
      {{post.description}}
    </div>
  </div>
</div>
{% endfor %}
</div>
