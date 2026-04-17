
        // Language Toggle
        function toggleLanguage() {
            const html = document.documentElement;
            const body = document.body;
            const isArabic = html.getAttribute('lang') === 'ar';
            
            if (isArabic) {
                // Switch to English
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                body.classList.add('en');
                
                // Hide Arabic, show English
                document.querySelectorAll('.ar-text').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.en-text').forEach(el => el.style.display = '');
            } else {
                // Switch to Arabic
                html.setAttribute('lang', 'ar');
                html.setAttribute('dir', 'rtl');
                body.classList.remove('en');
                
                // Show Arabic, hide English
                document.querySelectorAll('.ar-text').forEach(el => el.style.display = '');
                document.querySelectorAll('.en-text').forEach(el => el.style.display = 'none');
            }
        }

        // Navbar Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Service Category Toggle
        function toggleService(element) {
            const isActive = element.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.service-category').forEach(cat => {
                cat.classList.remove('active');
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                element.classList.add('active');
            }
        }

        // Booking Tabs
        function switchTab(index) {
            const tabs = document.querySelectorAll('.tab-btn');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach((tab, i) => {
                if (i === index) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            contents.forEach((content, i) => {
                if (i === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }

        // Company Form Submission
        document.getElementById('companyForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const message = `طلب خدمة من مصنع/شركة:

الشركة: ${data.company}
الاسم: ${data.name}
البريد: ${data.email}
الهاتف: ${data.phone}
نوع الخدمة: ${data.service}
التفاصيل: ${data.details || 'لا توجد'}`;
            
            const whatsappUrl = `https://wa.me/201028644675?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });

        // Smooth Scroll
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

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.service-category, .workflow-step, .gallery-item, .stat-card, .feature-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    