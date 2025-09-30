---
title: journal
---
# {{ title }}

personal reflections which aren't tied to specific projects. Mainly a place to chuck seasonal recaps.

<ul class="embedded blog-posts">
    {%- for post in collections.postDateSort -%}
        <li>
            <span>{{ post.date | postDate }}</span>
            <a href="{{post.url}}">{{ post.data.title }}</a>
            <p>{{ post.data.desc }}</p>
        </li>
    {%- endfor -%}
</ul>