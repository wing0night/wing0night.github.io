---
layout: page
title: CV
permalink: /cv/
---

<div class="cv-content">
    <div class="cv-header">
        <h1>Curriculum Vitae</h1>
        <p class="subtitle">Wing - Developer & Researcher</p>
    </div>
    
    <div class="cv-actions">
        <a href="{{ '/appendix/CV_me.pdf' | relative_url }}" target="_blank" class="cv-download-btn">
            📄 View CV (PDF)
        </a>
        <a href="{{ '/appendix/CV_me.pdf' | relative_url }}" download="Wing_CV.pdf" class="cv-download-btn">
            ⬇️ Download CV
        </a>
    </div>
    
    <div class="cv-preview">
        <h2>CV Preview</h2>
        <div class="pdf-container">
            <iframe src="{{ '/appendix/CV_me.pdf' | relative_url }}" 
                    width="100%" 
                    height="800px" 
                    style="border: 1px solid #ddd; border-radius: 4px;">
                <p>Your browser does not support PDFs. 
                   <a href="{{ '/appendix/CV_me.pdf' | relative_url }}">Download the PDF</a> to view it.
                </p>
            </iframe>
        </div>
    </div>
    
    <div class="cv-contact">
        <h2>Contact Information</h2>
        <p>If you'd like to get in touch regarding opportunities or collaborations, feel free to reach out:</p>
        <ul>
            <li>📧 Email: {{ site.email }}</li>
            <li>🐙 GitHub: <a href="https://github.com/{{ site.social.github }}" target="_blank">{{ site.social.github }}</a></li>
            <li>🐦 Twitter: <a href="https://twitter.com/{{ site.social.twitter }}" target="_blank">@{{ site.social.twitter }}</a></li>
            <li>💼 LinkedIn: <a href="https://linkedin.com/in/{{ site.social.linkedin }}" target="_blank">LinkedIn Profile</a></li>
        </ul>
    </div>
</div>

<style>
.cv-content {
    max-width: 800px;
    margin: 0 auto;
}

.cv-header {
    text-align: center;
    margin-bottom: 2rem;
}

.cv-header h1 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.cv-header .subtitle {
    color: #7f8c8d;
    font-size: 1.1rem;
    margin: 0;
}

.cv-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.cv-download-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-weight: 500;
}

.cv-download-btn:hover {
    background-color: #2980b9;
    text-decoration: none;
    color: white;
}

.cv-preview {
    margin-bottom: 2rem;
}

.cv-preview h2 {
    color: #2c3e50;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.5rem;
}

.pdf-container {
    margin-top: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    overflow: hidden;
}

.cv-contact {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
}

.cv-contact h2 {
    color: #2c3e50;
    margin-top: 0;
}

.cv-contact ul {
    list-style: none;
    padding: 0;
}

.cv-contact li {
    margin-bottom: 0.5rem;
    padding: 0.25rem 0;
}

.cv-contact a {
    color: #3498db;
    text-decoration: none;
}

.cv-contact a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .cv-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .pdf-container iframe {
        height: 600px;
    }
}
</style>