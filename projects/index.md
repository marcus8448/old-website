---
layout: default
title: Projects
permalink: /projects/
---
# Projects

<div class="columns is-mobile is-3 is-multiline" style="margin-bottom: 2.5vh;">
   {% for post in site.categories.projects %}
   <div class="column is-one-quarter-fullhd is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-three-quarters-mobile">
      <div class="card" style="min-height: 80vh; padding-top: 4vh;">
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
   </div>
   {% endfor %}
</div>