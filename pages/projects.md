---
title: projects
---
# {{ title }}

Below is a list of all the projects with content written on this site. ( I'm working to make this more comprehensive, but back-cataloging this stuff takes time. Be sure to check back. )
</br></br>

<ul class="embedded projects">
    {%- for post in collections.project -%}
        <li>
            <a href="{{post.url}}">{{ post.data.title }}</a>
            <p>{{ post.data.desc }}</p>
        </li>
    {%- endfor -%}
</ul>