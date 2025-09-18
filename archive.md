---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive-list">
    {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    
    {% for year in posts_by_year %}
    <div class="year-group">
        <h2>{{ year.name }}</h2>
        
        {% for post in year.items %}
        <div class="archive-item">
            <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%b %d" }}
            </time>
            <h3 class="post-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
        </div>
        {% endfor %}
    </div>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="no-posts">
        <p>No posts found.</p>
    </div>
    {% endif %}
</div>