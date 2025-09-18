# Wing's Blog

A clean, minimalist blog built with Jekyll and inspired by Medium.com's design philosophy. Features a responsive layout with a black and white color scheme that puts content first.

## Features

- 🎨 **Clean Design** - Minimalist, Medium.com inspired aesthetic
- 📱 **Responsive** - Works beautifully on all devices
- ⚡ **Fast** - Optimized for performance with static site generation
- 🔍 **SEO Friendly** - Proper meta tags and semantic HTML
- 📝 **Markdown Support** - Write posts in Markdown with syntax highlighting
- 🏷️ **Tags & Categories** - Organize content with tags and categories
- 📄 **Archive Page** - Browse posts by year
- 🔗 **Social Links** - Connect with readers through social media
- 💬 **Comments** - Disqus integration for reader engagement
- 🚀 **Modern JavaScript** - Progressive enhancement with vanilla JS

## Quick Start

### Prerequisites

- Ruby (version 2.7 or later)
- Bundler gem

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wing_s_blog
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Customize the site**
   Edit `_config.yml` to update site settings:
   ```yaml
   title: Your Blog Name
   email: your-email@example.com
   description: Your blog description
   author: Your Name
   ```

4. **Update social links**
   In `_config.yml`, update the social section:
   ```yaml
   social:
     github: your-github-username
     twitter: your-twitter-username
     linkedin: your-linkedin-username
   ```

5. **Build and serve the site locally**
   ```bash
   bundle exec jekyll serve
   ```

6. **Visit your blog**
   Open http://localhost:4000 in your browser

## Writing Posts

Create new posts in the `_posts` directory using the following format:

### File Naming
`YYYY-MM-DD-post-title.md`

### Front Matter Template
```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-18 10:00:00 +0800
categories: [category1, category2]
tags: [tag1, tag2, tag3]
author: Your Name
excerpt: "A brief description of your post"
---

Your post content goes here...
```

## Customization

### Colors and Typography
Edit variables in `_sass/_variables.scss` to customize:
- Colors (background, text, accent colors)
- Typography (fonts, sizes, line heights)
- Spacing and layout dimensions

### Navigation
Update the navigation menu in `_config.yml`:
```yaml
navigation:
  - title: Home
    url: /
  - title: About
    url: /about/
  - title: Archive
    url: /archive/
  - title: Tags
    url: /tags/
```

### Comments
To enable Disqus comments:
1. Sign up for a Disqus account
2. Create a new site
3. Add your shortname to `_config.yml`:
   ```yaml
   disqus_shortname: your-disqus-shortname
   ```

### Google Analytics
Add your Google Analytics ID to `_config.yml`:
```yaml
google_analytics: your-google-analytics-id
```

## Project Structure

```
wing_s_blog/
├── _config.yml          # Site configuration
├── _layouts/            # HTML templates
│   ├── default.html     # Base template
│   ├── post.html        # Blog post template
│   └── page.html        # Static page template
├── _includes/           # Reusable HTML components
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── _sass/               # Sass stylesheets
│   ├── _variables.scss  # CSS variables
│   ├── _base.scss       # Base styles
│   ├── _layout.scss     # Layout styles
│   ├── _components.scss # Component styles
│   └── _syntax-highlighting.scss # Code highlighting
├── _posts/              # Blog posts
├── assets/              # Static assets
│   ├── css/
│   └── js/
├── about.md             # About page
├── archive.md           # Archive page
├── tags.md              # Tags page
└── index.html           # Home page
```

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy!

### Self-hosting
Build the site and serve the `_site` directory:
```bash
bundle exec jekyll build
# Upload contents of _site/ to your web server
```

## Performance Tips

- Optimize images before adding them to posts
- Use WebP format for images when possible
- Minimize the number of plugins
- Enable compression on your web server
- Use a CDN for static assets

## Browser Support

This blog supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

Feel free to submit issues and pull requests to improve this blog template!

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspired by [Medium.com](https://medium.com)
- Built with [Jekyll](https://jekyllrb.com/)
- Syntax highlighting by [Rouge](https://github.com/rouge-ruby/rouge)
- Icons from [SVG Icons](https://www.svgrepo.com/)

---

Happy blogging! ✨