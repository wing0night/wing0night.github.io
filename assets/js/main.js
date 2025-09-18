// Main JavaScript for Wing's Blog
// Medium.com inspired interactions and functionality

(function () {
    'use strict';

    // Mobile menu toggle
    function initMobileMenu() {
        const header = document.querySelector('.site-header');
        const nav = document.querySelector('.site-nav');

        // Create mobile menu button
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-button';
        menuButton.innerHTML = '☰';
        menuButton.setAttribute('aria-label', 'Toggle menu');

        // Add menu button to header (only on mobile)
        if (window.innerWidth <= 768) {
            header.querySelector('.header-wrapper').appendChild(menuButton);

            menuButton.addEventListener('click', function () {
                nav.classList.toggle('active');
                menuButton.classList.toggle('active');
            });
        }
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Reading progress indicator
    function initReadingProgress() {
        if (!document.querySelector('.post')) return;

        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        function updateProgress() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            progressBar.style.width = scrolled + '%';
        }

        window.addEventListener('scroll', updateProgress);
    }

    // Highlight current navigation item
    function initActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.site-nav a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath === linkPath || (currentPath === '/' && linkPath === '/')) {
                link.classList.add('active');
            }
        });
    }

    // Copy code block functionality
    function initCodeCopy() {
        const codeBlocks = document.querySelectorAll('pre code');

        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code');

            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';

            block.parentNode.parentNode.insertBefore(wrapper, block.parentNode);
            wrapper.appendChild(block.parentNode);
            wrapper.appendChild(button);

            button.addEventListener('click', function () {
                const text = block.textContent;

                navigator.clipboard.writeText(text).then(() => {
                    button.textContent = 'Copied!';
                    button.classList.add('copied');

                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);

                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
            });
        });
    }

    // External link indicators
    function initExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');

        links.forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.classList.add('external-link');
            }
        });
    }

    // Initialize all functions when DOM is loaded
    document.addEventListener('DOMContentLoaded', function () {
        initMobileMenu();
        initSmoothScroll();
        initReadingProgress();
        initActiveNav();
        initCodeCopy();
        initExternalLinks();
    });

    // Handle resize events
    window.addEventListener('resize', function () {
        // Reinitialize mobile menu on resize
        if (window.innerWidth > 768) {
            const nav = document.querySelector('.site-nav');
            const menuButton = document.querySelector('.mobile-menu-button');

            if (nav) nav.classList.remove('active');
            if (menuButton) menuButton.remove();
        }
    });

})();