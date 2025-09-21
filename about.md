---
layout: page
title: About
permalink: /about/
---

<div class="about-content">
    <div class="intro">
        <!-- Uncomment and add your profile image if you have one -->
        <!-- <img src="/assets/images/profile.jpg" alt="Profile" class="profile-image"> -->
        
        <h1>About Wing</h1>
        <p class="subtitle">Developer & Writer</p>
    </div>
    
    <div class="bio">
        <p>Welcome to my blog! I'm Wing, a passionate developer who loves to share thoughts on technology, programming, and life.</p>
        
        <p>This blog is where I document my journey, share what I've learned, and connect with like-minded people. You'll find posts about embodied intelligence, my open-source projects, and occasional personal reflections.</p>
        
        <h2>What I Do</h2>
        <ul>
            <li>Researcher in Embodied Intelligence</li>
            <li>Open source contributions</li>
            <li>Technical writing</li>
            <li>Learning new technologies</li>
        </ul>
        
        <h2>Technologies I Work With</h2>
        <p>c++, Python, 3D modeling, and many others. I'm always eager to learn new tools and frameworks that can help solve interesting problems.</p>
        
        <h2>Get In Touch</h2>
        <p>Feel free to reach out if you want to discuss technology, collaborate on a project, or just say hello!</p>
        
        <p>You can find me on:</p>
        <ul>
            {% if site.social.github %}
            <li><a href="https://github.com/{{ site.social.github }}" target="_blank" rel="noopener">GitHub</a></li>
            {% endif %}
            {% if site.social.twitter %}
            <li><a href="https://twitter.com/{{ site.social.twitter }}" target="_blank" rel="noopener">Twitter</a></li>
            {% endif %}
            {% if site.social.linkedin %}
            <li><a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank" rel="noopener">LinkedIn</a></li>
            {% endif %}
            {% if site.email %}
            <li><a href="mailto:{{ site.email }}">Email</a></li>
            {% endif %}
        </ul>
    </div>
</div>