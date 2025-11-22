// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== STATUS PAGE FUNCTIONALITY =====
    if (window.location.pathname.includes('status.html')) {
        updateStatusPage();
        generateUptimeChart();
        
        // Update every 30 seconds
        setInterval(updateStatusPage, 30000);
    }

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ===== ANIMATE ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to cards and sections
    const animatedElements = document.querySelectorAll('.feature-card, .info-item, .service-card-large, .tool-card, .metric-card, .component-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== UPDATE STATUS PAGE =====
function updateStatusPage() {
    // Update timestamp
    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        const now = new Date();
        lastUpdate.textContent = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    // Simulate latency measurement
    const latencyMetric = document.getElementById('latencyMetric');
    if (latencyMetric) {
        // Simulate loading
        latencyMetric.innerHTML = '<span class="loading-pulse">...</span>';
        
        setTimeout(() => {
            const latency = Math.floor(Math.random() * 30) + 35; // 35-65ms
            latencyMetric.textContent = latency + 'ms';
        }, 500);
    }

    // Load status from Status_Check.txt
    fetch('Status_Check.txt')
        .then(response => response.text())
        .then(data => {
            const statusMessage = document.getElementById('statusMessage');
            if (statusMessage) {
                statusMessage.textContent = data.replace(/"/g, '');
            }
        })
        .catch(error => {
            console.error('Failed to load status file:', error);
        });
}

// ===== GENERATE UPTIME CHART =====
function generateUptimeChart() {
    const chartDays = document.querySelector('.chart-days');
    if (!chartDays) return;

    // Generate 30 days of uptime data
    for (let i = 0; i < 30; i++) {
        const day = document.createElement('div');
        day.style.flex = '1';
        day.style.minWidth = '10px';
        
        // 99% chance of full uptime, 1% chance of degraded
        const rand = Math.random();
        if (rand > 0.99) {
            day.style.background = 'var(--warning-color)';
            day.style.height = '60%';
        } else {
            day.style.background = 'var(--success-color)';
            day.style.height = '100%';
        }
        
        day.style.borderRadius = '3px';
        day.title = `Day ${30 - i}`;
        chartDays.appendChild(day);
    }
}

// ===== REAL-TIME CLOCK =====
function updateClock() {
    const clocks = document.querySelectorAll('.real-time-clock');
    clocks.forEach(clock => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    });
}

// Update clock every second if elements exist
if (document.querySelector('.real-time-clock')) {
    updateClock();
    setInterval(updateClock, 1000);
}

// ===== UTILITY FUNCTIONS =====

// Format large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Calculate uptime percentage
function calculateUptime(uptimeHours, totalHours) {
    return ((uptimeHours / totalHours) * 100).toFixed(2);
}

// ===== INTERACTIVE METRICS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const chartBar = this.querySelector('.chart-bar');
            if (chartBar) {
                chartBar.style.transition = 'transform 0.3s ease';
                chartBar.style.transform = 'scaleY(1.1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const chartBar = this.querySelector('.chart-bar');
            if (chartBar) {
                chartBar.style.transform = 'scaleY(1)';
            }
        });
    });

    // Add pulse animation to online status indicators
    const onlineIndicators = document.querySelectorAll('.health-indicator.operational i, .metric-status.online');
    onlineIndicators.forEach(indicator => {
        setInterval(() => {
            indicator.style.animation = 'none';
            setTimeout(() => {
                indicator.style.animation = 'pulse 2s ease-in-out';
            }, 10);
        }, 3000);
    });
});

// ===== FEATURE CARD INTERACTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card, .pillar-card, .capability-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CONSOLE EASTER EGG =====
console.log('%c🧠 MIND-XAI SYSTEMS', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cGlobal Automation Protocol v2.0', 'color: #94a3b8; font-size: 14px;');
console.log('%c50x Speed Optimization Active', 'color: #10b981; font-size: 12px;');
console.log('%c"When I use technology in a new way, I discover something new in my nature."', 'color: #7c3aed; font-style: italic; font-size: 12px;');

// ===== PERFORMANCE MONITORING =====
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #00d4ff; font-weight: bold;');
        }, 0);
    });
}
