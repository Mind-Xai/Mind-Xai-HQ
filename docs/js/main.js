// Main JavaScript for Mind-Xai Website

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.classList.toggle('dark', currentTheme === 'dark');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      const theme = html.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Stats Counter Animation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Initialize stats counters when visible
function initStatsCounters() {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          animateCounter(counter, target);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
}

// Mock Server Stats Dashboard
function initServerStats() {
  const updateStats = () => {
    // Simulate real-time data
    const uptime = 99.98 + (Math.random() * 0.02);
    const requests = Math.floor(15000 + Math.random() * 5000);
    const latency = Math.floor(25 + Math.random() * 10);
    const servers = 47 + Math.floor(Math.random() * 3);
    
    const uptimeEl = document.getElementById('stat-uptime');
    const requestsEl = document.getElementById('stat-requests');
    const latencyEl = document.getElementById('stat-latency');
    const serversEl = document.getElementById('stat-servers');
    
    if (uptimeEl) uptimeEl.textContent = uptime.toFixed(2) + '%';
    if (requestsEl) requestsEl.textContent = requests.toLocaleString();
    if (latencyEl) latencyEl.textContent = latency + 'ms';
    if (serversEl) serversEl.textContent = servers;
  };
  
  // Update stats every 3 seconds
  updateStats();
  setInterval(updateStats, 3000);
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Show success message (in production, this would send to backend)
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }
}

// Language Dropdown
function initLanguageDropdown() {
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
      }
    });
    
    // Language selection
    langDropdown.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        langDropdown.classList.add('hidden');
      });
    });
  }
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
      } else {
        navbar.classList.remove('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
      }
    });
  }
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initStatsCounters();
  initServerStats();
  initContactForm();
  initLanguageDropdown();
  initNavbarScroll();
});

// Lazy loading images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}
