    /* ============================================================
       Service Panel Data
       ============================================================ */
    const servicePanels = {
        0: {
            tag_ar: 'كهرباء صناعية',
            tag_en: 'INDUSTRIAL ELECTRICAL',
            title_ar: 'كهرباء وكنترول صناعي',
            title_en: 'Industrial Electrical & Control',
            desc_ar: 'حلول كهربائية صناعية متكاملة من تأسيس اللوحات إلى ربط خطوط الإنتاج بأنظمة الكنترول، بإدارة فريق متخصص وتقارير موثقة.',
            desc_en: 'Complete industrial electrical solutions from panel installation to production line integration with control systems, managed by a specialized team with documented reports.',
            block1_title_ar: 'لوحات الكنترول والباور',
            block1_title_en: 'Control & Power Panels',
            block1_items_ar: ['صيانة وتركيب لوحات الكنترول والباور','إدارة غرف الجهد المنخفض','متابعة الأحمال والحمايات','تنظيم وتطوير اللوحات','ربط خطوط الإنتاج بأنظمة الكنترول','صيانة الأعطال وتقليل تكرارها'],
            block1_items_en: ['Control & power panel maintenance and installation','Low voltage room management','Load and protection monitoring','Panel organization and upgrades','Production line integration with control systems','Fault repair and recurrence reduction'],
            block2_title_ar: 'التأسيس والتشطيب الكهربائي',
            block2_title_en: 'Electrical Installation & Finishing',
            block2_items_ar: ['تخطيط وتصميم الشبكة الكهربائية','تمديد الكابلات وكابل تراي','تركيب اللوحات الرئيسية والفرعية','أنظمة التأريض الصناعي','خدمة طوارئ 24/7'],
            block2_items_en: ['Electrical network planning and design','Cable and cable tray extension','Main and sub-panel installation','Industrial grounding systems','24/7 emergency service'],
            industries_ar: ['مصانع الأغذية','مصانع الأدوية','البلاستيك','الكيماويات','المخازن','المباني الإدارية'],
            industries_en: ['Food factories','Pharma','Plastics','Chemicals','Warehouses','Admin buildings']
        },
        1: {
            tag_ar: 'تحكم آلي',
            tag_en: 'AUTOMATION',
            title_ar: 'أنظمة PLC والتحكم الآلي',
            title_en: 'PLC & Automation Systems',
            desc_ar: 'برمجة وتركيب وصيانة أنظمة PLC من كبرى العلامات (Siemens, Delta, Mitsubishi) مع شاشات HMI وأنظمة SCADA وVFD.',
            desc_en: 'Programming, installation, and maintenance of PLC systems from leading brands (Siemens, Delta, Mitsubishi) with HMI screens, SCADA, and VFD systems.',
            block1_title_ar: 'تركيب وبرمجة',
            block1_title_en: 'Installation & Programming',
            block1_items_ar: ['برمجة وتركيب PLC (Siemens, Delta, Mitsubishi)','شاشات HMI وأنظمة SCADA','Variable Frequency Drives (VFD)','أنظمة الحساسات والسنسورات','ربط الأنظمة بأنظمة المراقبة'],
            block1_items_en: ['PLC programming & installation (Siemens, Delta, Mitsubishi)','HMI screens and SCADA systems','Variable Frequency Drives (VFD)','Sensor systems','System integration with monitoring'],
            block2_title_ar: 'صيانة وتحسين الأداء',
            block2_title_en: 'Maintenance & Improvement',
            block2_items_ar: ['صيانة وتعديل البرامج','تحسين أداء خطوط الإنتاج','استكشاف وإصلاح الأعطال','تدريب الكوادر الفنية','تقارير أداء شهرية'],
            block2_items_en: ['Software maintenance and modification','Production line performance improvement','Troubleshooting and fault repair','Technical staff training','Monthly performance reports'],
            industries_ar: ['مصانع الإنتاج','خطوط التجميع','الصناعات الغذائية','الأدوية','البلاستيك'],
            industries_en: ['Production plants','Assembly lines','Food industries','Pharma','Plastics']
        },
        2: {
            tag_ar: 'تكييف صناعي',
            tag_en: 'INDUSTRIAL HVAC',
            title_ar: 'التكييف الصناعي HVAC',
            title_en: 'Industrial HVAC',
            desc_ar: 'تركيب وصيانة أنظمة التكييف الصناعي بمختلف أنواعها — من وحدات منفصلة إلى أنظمة مركزية للمصانع والمرافق الكبيرة.',
            desc_en: 'Installation and maintenance of industrial HVAC systems of all types — from split units to central systems for factories and large facilities.',
            block1_title_ar: 'تركيب وصيانة',
            block1_title_en: 'Installation & Maintenance',
            block1_items_ar: ['تركيب وحدات التكييف الصناعي','صيانة دورية شاملة','تنظيف وغسيل الوحدات','شحن الفريون وإصلاح التسريبات','رفع كفاءة التشغيل في بيئات العمل المستمر'],
            block1_items_en: ['Industrial AC unit installation','Comprehensive periodic maintenance','Unit cleaning and washing','Freon recharge and leak repair','Efficiency improvement for continuous work environments'],
            block2_title_ar: 'تشخيص وحلول',
            block2_title_en: 'Diagnostics & Solutions',
            block2_items_ar: ['فحص أعطال التبريد والتسخين','قياس كفاءة الطاقة','استبدال الضواغط والمكونات','ضبط أنظمة التحكم في الحرارة','توريد قطع غيار أصلية'],
            block2_items_en: ['Cooling/heating fault diagnosis','Energy efficiency measurement','Compressor & component replacement','Temperature control tuning','Original spare parts supply'],
            industries_ar: ['المصانع','المخازن','المباني الإدارية','المراكز التجارية','المراكز اللوجستية'],
            industries_en: ['Factories','Warehouses','Admin buildings','Commercial centers','Logistics centers']
        },
        3: {
            tag_ar: 'فلاتر ومياه',
            tag_en: 'WATER & FILTRATION',
            title_ar: 'الفلاتر وأنظمة المياه',
            title_en: 'Filters & Water Systems',
            desc_ar: 'حلول متكاملة لأنظمة المياه الصناعية: فلاتر معالجة، أنظمة RO، محطات تحلية، ومتابعة جودة المياه بشكل دوري.',
            desc_en: 'Integrated solutions for industrial water systems: treatment filters, RO systems, desalination plants, and periodic water quality monitoring.',
            block1_title_ar: 'تركيب وصيانة الفلاتر',
            block1_title_en: 'Filter Installation & Maintenance',
            block1_items_ar: ['تركيب وصيانة فلاتر المياه الصناعية','متابعة جودة المياه','استبدال المكونات الدورية','أنظمة RO وتحلية المياه','فلاتر معالجة مياه العمليات'],
            block1_items_en: ['Industrial water filter installation and maintenance','Water quality monitoring','Periodic component replacement','RO and water desalination systems','Process water treatment filters'],
            block2_title_ar: 'تشغيل وتحسين',
            block2_title_en: 'Operation & Improvement',
            block2_items_ar: ['ضبط معدلات التدفق','تحسين كفاءة الترشيح','تقارير دورية لجودة المياه','صيانة المضخات والضواغط','استشارات فنية لترقية المنظومة'],
            block2_items_en: ['Flow rate tuning','Filtration efficiency improvement','Periodic water quality reports','Pump & compressor service','System upgrade consulting'],
            industries_ar: ['الأغذية والمشروبات','الأدوية','الكيماويات','المستشفيات','المصانع بشكل عام'],
            industries_en: ['Food & beverage','Pharma','Chemicals','Hospitals','Factories in general']
        },
        4: {
            tag_ar: 'سباكة صناعية',
            tag_en: 'INDUSTRIAL PLUMBING',
            title_ar: 'السباكة الصناعية',
            title_en: 'Industrial Plumbing',
            desc_ar: 'تأسيس وصيانة شبكات المياه والصرف داخل المصانع بمواد عالية الجودة (PPR, PVC) ومعايير تركيب احترافية.',
            desc_en: 'Installation and maintenance of water and sewage networks inside factories using high-quality materials (PPR, PVC) with professional installation standards.',
            block1_title_ar: 'شبكات وصيانة',
            block1_title_en: 'Networks & Maintenance',
            block1_items_ar: ['تأسيس شبكات المياه داخل المصانع','صيانة الأعطال والتسريبات','إدارة المرافق المرتبطة بالمياه','تمديد مواسير PPR وPVC','تركيب وصيانة مضخات المياه'],
            block1_items_en: ['Water network installation inside factories','Fault and leak maintenance','Water-related utility management','PPR and PVC pipe extension','Water pump installation and maintenance'],
            block2_title_ar: 'حلول متقدمة',
            block2_title_en: 'Advanced Solutions',
            block2_items_ar: ['تصميم شبكات المياه والصرف','تركيب خزانات المياه','محطات الرفع','فحص الشبكات بكاميرات حرارية','صيانة دورية وقائية'],
            block2_items_en: ['Water & sewage network design','Water tank installation','Lift stations','Network inspection with thermal cameras','Periodic preventive maintenance'],
            industries_ar: ['المصانع','المخازن','المباني الإدارية','المجمعات التجارية','المنشآت الكبيرة'],
            industries_en: ['Factories','Warehouses','Admin buildings','Commercial complexes','Large facilities']
        },
        5: {
            tag_ar: 'مقاولات',
            tag_en: 'CONTRACTING',
            title_ar: 'المقاولات والتشطيبات',
            title_en: 'Contracting & Finishing',
            desc_ar: 'تجهيز مواقع إنتاج جديدة، أعمال التشطيبات، والدهانات الصناعية بمعايير السلامة والجودة المؤسسية.',
            desc_en: 'New production site setup, finishing works, and industrial painting with corporate safety and quality standards.',
            block1_title_ar: 'تجهيز المواقع',
            block1_title_en: 'Site Preparation',
            block1_items_ar: ['أعمال كهرباء من التأسيس للتشغيل','تجهيز مواقع ومحلات','تشطيبات داخلية','دهانات ونقاشة صناعية','تجهيز مواقع إنتاج جديدة','أرضيات إيبوكسي صناعية'],
            block1_items_en: ['Electrical work from foundation to operation','Site and shop preparation','Interior finishing','Industrial painting and coating','New production site setup','Industrial epoxy flooring'],
            block2_title_ar: 'مقاولات متخصصة',
            block2_title_en: 'Specialized Contracting',
            block2_items_ar: ['بناء غرف ومكاتب إدارية','هياكل معدنية وحواجز سلامة','أنظمة تهوية وعوادم','تنسيقات مدنية وكهربائية','إدارة مشروع كاملة'],
            block2_items_en: ['Admin room & office construction','Metal structures & safety barriers','Ventilation & exhaust systems','Civil & electrical coordination','Full project management'],
            industries_ar: ['المصانع الجديدة','التوسعات','المخازن','المحلات التجارية','المباني الإدارية'],
            industries_en: ['New factories','Expansions','Warehouses','Shops','Admin buildings']
        }
    };

    const isAr = () => document.documentElement.getAttribute('lang') === 'ar';

    function renderPanel(idx) {
        const d = servicePanels[idx];
        const ar = isAr();
        const html = `
            <span class="sp-tag">${ar ? d.tag_ar : d.tag_en}</span>
            <h3>${ar ? d.title_ar : d.title_en}</h3>
            <p class="sp-desc">${ar ? d.desc_ar : d.desc_en}</p>
            <div class="sp-grid">
                <div class="sp-block">
                    <h4><i class="fas fa-screwdriver-wrench"></i> ${ar ? d.block1_title_ar : d.block1_title_en}</h4>
                    <ul class="sp-list">
                        ${(ar ? d.block1_items_ar : d.block1_items_en).map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('')}
                    </ul>
                </div>
                <div class="sp-block">
                    <h4><i class="fas fa-gear"></i> ${ar ? d.block2_title_ar : d.block2_title_en}</h4>
                    <ul class="sp-list">
                        ${(ar ? d.block2_items_ar : d.block2_items_en).map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div style="margin-bottom: 18px;">
                <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">
                    ${ar ? 'القطاعات المستهدفة' : 'Target Sectors'}
                </div>
                <div class="sp-industries">
                    ${(ar ? d.industries_ar : d.industries_en).map(i => `<span class="pill">${i}</span>`).join('')}
                </div>
            </div>
            <div class="sp-actions">
                <a href="#contact" class="btn btn-primary">
                    <i class="fas fa-calendar-check"></i>
                    ${ar ? 'احجز معاينة لهذه الخدمة' : 'Book Inspection for This Service'}
                </a>
                <a href="https://wa.me/201028644675" target="_blank" class="btn btn-outline">
                    <i class="fab fa-whatsapp"></i>
                    ${ar ? 'استفسر واتساب' : 'Ask on WhatsApp'}
                </a>
            </div>
        `;
        document.getElementById('service-panel').innerHTML = html;
    }

    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderPanel(parseInt(tab.dataset.tab));
        });
    });

    /* ============================================================
       Language Toggle
       ============================================================ */
    /* Sync bilingual select options */
    function syncSelects() {
        const ar = isAr();
        document.querySelectorAll('select[data-bilingual]').forEach(sel => {
            Array.from(sel.options).forEach(opt => {
                if (ar && opt.dataset.ar) opt.textContent = opt.dataset.ar;
                else if (!ar && opt.dataset.en) opt.textContent = opt.dataset.en;
            });
        });
    }

    function toggleLanguage() {
        const html = document.documentElement;
        const isArabic = html.getAttribute('lang') === 'ar';
        if (isArabic) {
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            document.body.classList.add('en');
            document.querySelectorAll('.ar-text').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.en-text').forEach(el => el.style.display = '');
        } else {
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
            document.body.classList.remove('en');
            document.querySelectorAll('.ar-text').forEach(el => el.style.display = '');
            document.querySelectorAll('.en-text').forEach(el => el.style.display = 'none');
        }
        const active = document.querySelector('.service-tab.active');
        if (active) renderPanel(parseInt(active.dataset.tab));
        syncSelects();
        updateHeaderLang();
    }
    function updateHeaderLang() {
        const ar = isAr();
        const a = document.querySelector('[data-lang-active]');
        const b = document.querySelector('[data-lang-alt]');
        if (a) a.textContent = ar ? 'AR' : 'EN';
        if (b) b.textContent = ar ? 'EN' : 'AR';
    }

    /* ============================================================
       Header scroll
       ============================================================ */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    /* ============================================================
       Mobile menu
       ============================================================ */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    menuToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) mobileMenu.classList.remove('open');
    });
    function closeMobile() { mobileMenu.classList.remove('open'); }

    /* ============================================================
       Smooth scroll
       ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ============================================================
       Reveal animations on scroll
       ============================================================ */
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ============================================================
       Counter animation
       ============================================================ */
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseFloat(el.dataset.counter);
            const suffix = el.dataset.suffix || '';
            const decimal = parseInt(el.dataset.decimal || '0');
            const duration = 1600;
            const start = performance.now();
            const animate = (now) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                const val = target * eased;
                el.textContent = val.toFixed(decimal) + suffix;
                if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

    /* ============================================================
       Bar fill animation
       ============================================================ */
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.pct + '%';
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('.dc-bar-fill').forEach(el => barObserver.observe(el));

    /* ============================================================
       Gallery filters + lightbox
       ============================================================ */
    const filterBtns = document.querySelectorAll('.gallery-filters button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.cat === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-cap');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const cap = item.querySelector('.gi-caption h4 span:not(.en-text), .gi-caption h4 .ar-text');
            lightboxImg.src = img.src;
            const arCap = item.querySelector('.gi-caption .ar-text');
            const enCap = item.querySelector('.gi-caption .en-text');
            const pAr = item.querySelector('.gi-caption p .ar-text');
            const pEn = item.querySelector('.gi-caption p .en-text');
            let caption = '';
            if (isAr()) {
                caption = (arCap ? arCap.textContent : '') + (pAr ? ' — ' + pAr.textContent : '');
            } else {
                caption = (enCap ? enCap.textContent : '') + (pEn ? ' — ' + pEn.textContent : '');
            }
            lightboxCap.textContent = caption;
            lightbox.classList.add('open');
        });
    });
    function closeLightbox() { lightbox.classList.remove('open'); }
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

    /* ============================================================
       Contact form
       ============================================================ */
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');

    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => {
            const wrap = field.closest('.form-field');
            if (!wrap) return;
            if (field.hasAttribute('required') && !field.value.trim()) {
                wrap.classList.add('invalid');
            } else if (field.type === 'email' && field.value && !/^[^@]+@[^@]+\.[^@]+$/.test(field.value)) {
                wrap.classList.add('invalid');
            } else if (field.type === 'tel' && field.value && !/[0-9+\-\s]{8,}/.test(field.value)) {
                wrap.classList.add('invalid');
            } else {
                wrap.classList.remove('invalid');
            }
        });
        field.addEventListener('input', () => field.closest('.form-field')?.classList.remove('invalid'));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                field.closest('.form-field').classList.add('invalid');
                valid = false;
            }
        });
        if (!valid) return;

        submitBtn.classList.add('loading');
        const data = Object.fromEntries(new FormData(form));

        setTimeout(() => {
            const sectorMap = {
                food: 'مصانع الأغذية', pharma: 'مصانع الأدوية', plastic: 'مصانع البلاستيك',
                chemical: 'مصانع الكيماويات', metal: 'مصانع معدنية', warehouse: 'مخازن ولوجستيات', other: 'أخرى'
            };
            const serviceMap = {
                electrical: 'كهرباء وكنترول صناعي', plc: 'أنظمة PLC والتحكم الآلي', hvac: 'التكييف الصناعي',
                water: 'الفلاتر وأنظمة المياه', plumbing: 'السباكة الصناعية', contracting: 'المقاولات والتشطيبات',
                monthly: 'عقد صيانة شهرية', full: 'تشغيل كامل', other: 'أخرى'
            };
            const ar = isAr();
            const sectorName = sectorMap[data.sector] || data.sector;
            const serviceName = serviceMap[data.service] || data.service;
            const msg = ar
                ? `طلب معاينة – KATO\n\nالشركة/المصنع: ${data.company}\nالمسؤول: ${data.name}\nالهاتف: ${data.phone}\nالبريد: ${data.email || '—'}\nالقطاع: ${sectorName}\nعدد المواقع: ${data.sites || '—'}\nالخدمة: ${serviceName}\n\nالوصف:\n${data.details || '—'}`
                : `Inspection Request – KATO\n\nCompany/Factory: ${data.company}\nContact: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || '—'}\nSector: ${sectorName}\nNumber of sites: ${data.sites || '—'}\nService: ${serviceName}\n\nDescription:\n${data.details || '—'}`;

            window.open(`https://wa.me/201028644675?text=${encodeURIComponent(msg)}`, '_blank');

            form.style.display = 'none';
            formSuccess.classList.add('show');
            submitBtn.classList.remove('loading');
        }, 700);
    });

    /* ============================================================
       Init first service panel
       ============================================================ */
    renderPanel(0);
    syncSelects();
    updateHeaderLang();
