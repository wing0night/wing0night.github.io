---
layout: page
title: Tags
permalink: /tags/
---

<div class="tags-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
    <a href="#{{ tag[0] | slugify }}" class="tag">
        {{ tag[0] }}
        <span class="count">({{ tag[1].size }})</span>
    </a>
    {% endfor %}
</div>

<div class="tags-list">
    {% for tag in tags %}
    <div class="tag-section">
        <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
        
        <div class="archive-list">
            {% for post in tag[1] %}
            <div class="archive-item">
                <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%b %d, %Y" }}
                </time>
                <h3 class="post-title">
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h3>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
</div>

{% if site.tags.size == 0 %}
<div class="no-posts">
    <p>No tags found.</p>
</div>
{% endif %}