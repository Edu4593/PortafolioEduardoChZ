document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const isMatch = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
            
            if (isMatch) {
                card.classList.remove('hide');
                card.classList.add('show');
            } else {
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    });
    });

    const btnContacto = document.getElementById('btnContacto');
    const infoContacto = document.getElementById('infoContacto');

    if (btnContacto && infoContacto) {
        btnContacto.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte hacia arriba por el href="#"
            infoContacto.classList.toggle('show'); // Alterna la clase para mostrar/ocultar
        });
    }


    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remover estado activo de todos los botones y paneles
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Añadir estado activo al botón clickeado
            tab.classList.add("active");
            
            // Mostrar el panel correspondiente
            const targetPanel = document.getElementById(tab.dataset.tab);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });


    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita recarga de página

            const data = new FormData(contactForm);
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.className = 'form-status';

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado exitosamente.';
                    formStatus.classList.add('success');
                    contactForm.reset();
                } else {
                    const responseData = await response.json();
                    if (responseData.hasOwnProperty('errors')) {
                        formStatus.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.textContent = 'Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.';
                    }
                    formStatus.classList.add('error');
                }
            } catch (error) {
                formStatus.textContent = 'Error de conexión. Inténtalo más tarde.';
                formStatus.classList.add('error');
            }
        });
    }


    const translations = {
        es: {
            // Navbar
            "nav-about": "Sobre Mí",
            "nav-projects": "Proyectos",
            "nav-stack": "Tecnologías",
            "nav-contact": "Contacto",
            "nav-home": "Inicio",
            
            // Hero
            "hero-greeting": "Hola, soy",
            "hero-role": "Desarrollador Back-End .NET & Cloud",
            "hero-description": "Especializado en el diseño de arquitecturas por capas, APIs robustas con C# y soluciones cloud. Capacidad analítica combinada con pasión por el código eficiente.",
            "btn-projects": "Ver Proyectos",
            "btn-contact": "Perfil Profesional",
            "lbl-phone": "Teléfono:",
            "view-profile": "Ver perfil",
            "btn-cv": "📄 Descargar mi CV (PDF)",
            
            // Projects
            "title-projects": "Proyectos Destacados",
            "filter-all": "Todos",
            "filter-backend": "Back-End / Cloud",
            "filter-frontend": "Diseño / UI",
            "p1-title": "Sistema de Gestión de Solicitudes Forestales",
            "p1-desc": "Plataforma de pagos que digitalizó el trámite manual de solicitudes de pago por servicios forestales, mediante tres módulos especializados. Desarrollada con una arquitectura por capas y un back-end en C# conectado a una base de datos distribuida en Azure.",
            "link-live": "⚡ Proyecto en Vivo",
            "link-code": "📦 Código",
            "p2-tag": "Maquetación / UI",
            "p2-desc": "Proyecto estático enfocado en demostrar un control riguroso de layouts, diseño responsivo, uso de HTML semántico y estilos estructurados en CSS.",
            "link-site": "⚡ Ver Sitio",

            // About Me
            "title-about": "Sobre Mí",
            "about-p1": "Soy estudiante de Bachillerato en Desarrollo de Software y profesional con formación en Farmacia, enfocado en el desarrollo de soluciones tecnológicas principalmente mediante el ecosistema Microsoft, con experiencia adicional en Java y tecnologías web como JavaScript y TypeScript. Cuento con experiencia en la construcción de aplicaciones web multicapa utilizando C#, ASP.NET Web API, SQL Server y Azure, así como en el diseño de servicios REST y bases de datos orientadas a aplicaciones empresariales y de salud digital.",
            "about-p2": "He participado en proyectos full-stack donde he implementado arquitecturas multicapa, operaciones CRUD, integración con Microsoft SQL Server y despliegue de aplicaciones en la nube mediante Microsoft Azure. Además, poseo experiencia en control de versiones utilizando Git y GitHub, así como en metodologías ágiles Scrum para el trabajo colaborativo.",
            "about-p3": "Mi formación en Farmacia me proporciona una comprensión de los procesos y necesidades del sector salud, mientras que mi preparación en desarrollo de software me permite transformar esos requerimientos en soluciones tecnológicas seguras y escalables.",
            "tab-mission": "Misión",
            "tab-vision": "Visión",
            "tab-values": "Valores",
            "mission-text": "Desarrollar soluciones de software eficientes, seguras y escalables mediante el uso de tecnologías .NET y buenas prácticas de programación, aplicando principios de código limpio y aprendizaje continuo para generar valor a las organizaciones y resolver problemas reales de manera efectiva.",
            "vision-text": "Ser un desarrollador backend altamente especializado en el ecosistema Microsoft, reconocido por la calidad, seguridad e innovación de mis soluciones tecnológicas. Aspiro a diseñar e implementar sistemas robustos y escalables que impulsen la transformación digital de organizaciones a nivel nacional e internacional.",
            "val-resp-title": "Responsabilidad:",
            "val-resp-text": "Siempre cumplo con los trabajos asignados en el tiempo establecido.",
            "val-int-title": "Integridad:",
            "val-int-text": "Promuevo la integridad del software mediante código limpio, protección de datos y desarrollo responsable de soluciones web.",
            "val-inn-title": "Innovación:",
            "val-inn-text": "Aplico las soluciones que mejor se adaptan a las necesidades del cliente.",

            // Stack
            "title-stack": "Tecnologías",
            "stack-backend": "Backend & Cloud",
            "stack-languages": "Lenguajes & Frontend",
            "stack-tools": "Herramientas & Metodología",

            // Contact
            "title-contact": "Contacto",
            "contact-subtitle": "¿Tienes un proyecto en mente o deseas discutir una oportunidad laboral? Puedes enviarme un mensaje directo o escribirme por WhatsApp.",
            "card-direct": "Canales Directos",
            "card-whatsapp-text": "Si prefieres una respuesta inmediata, hablemos directamente por WhatsApp:",
            "btn-whatsapp": "Escribir por WhatsApp",
            "lbl-location": "Ubicación:",
            "lbl-name": "Nombre Completo",
            "ph-name": "Tu nombre",
            "lbl-email": "Correo Electrónico",
            "ph-email": "tu@email.com",
            "lbl-subject": "Asunto",
            "ph-subject": "Consulta / Propuesta de Proyecto",
            "lbl-message": "Mensaje",
            "ph-message": "Escribe tu mensaje aquí...",
            "btn-submit": "Enviar Mensaje",

            // Footer
            "footer-text": "© 2026 Eduardo Chacón Zamora. Construyendo soluciones robustas con código limpio y eficiente."
        },
        en: {
            // Navbar
            "nav-about": "About Me",
            "nav-projects": "Projects",
            "nav-stack": "Tech Stack",
            "nav-contact": "Contact",
            "nav-home": "Home",
            
            // Hero
            "hero-greeting": "Hi, I'm",
            "hero-role": ".NET Back-End & Cloud Developer",
            "hero-description": "Specialized in layered architecture design, robust C# APIs, and cloud solutions. Analytical mindset combined with a passion for clean, efficient code.",
            "btn-projects": "View Projects",
            "btn-contact": "Personal Profile",
            "lbl-phone": "Phone:",
            "view-profile": "View profile",
            "btn-cv": "📄 Download CV (PDF)",

            // Projects
            "title-projects": "Featured Projects",
            "filter-all": "All",
            "filter-backend": "Back-End / Cloud",
            "filter-frontend": "Design / UI",
            "p1-title": "Forestry Request Management System",
            "p1-desc": "Payment platform that digitized the manual process of payment requests for forestry services through three specialized modules. Built with a layered architecture and a C# back-end connected to a distributed Azure database.",
            "link-live": "⚡ Live Demo",
            "link-code": "📦 Source Code",
            "p2-tag": "Layout / UI",
            "p2-desc": "Static project focused on demonstrating rigorous layout control, responsive design, semantic HTML usage, and structured CSS styling.",
            "link-site": "⚡ Visit Site",

            // About Me
            "title-about": "About Me",
            "about-p1": "I am a Software Development Bachelor student and a professional with a background in Pharmacy, focused on building technology solutions primarily within the Microsoft ecosystem, with additional experience in Java and web technologies such as JavaScript and TypeScript. I have experience building multi-tier web applications using C#, ASP.NET Web API, SQL Server, and Azure, as well as designing RESTful services and databases tailored to enterprise applications and digital healthcare.",
            "about-p2": "I have participated in full-stack projects where I implemented layered architectures, CRUD operations, integration with Microsoft SQL Server, and cloud application deployment via Microsoft Azure. Additionally, I have experience in version control using Git and GitHub, as well as Scrum agile methodologies for collaborative work.",
            "about-p3": "My Pharmacy background gives me a deep understanding of healthcare processes and industry needs, while my software development training allows me to translate those requirements into secure, scalable technological solutions.",
            "tab-mission": "Mission",
            "tab-vision": "Vision",
            "tab-values": "Values",
            "mission-text": "Develop efficient, secure, and scalable software solutions using .NET technologies and best engineering practices, applying clean code principles and continuous learning to deliver value to organizations and effectively solve real-world problems.",
            "vision-text": "To become a highly specialized backend developer within the Microsoft ecosystem, recognized for the quality, security, and innovation of my technology solutions. I aspire to design and implement robust, scalable systems that drive the digital transformation of local and international organizations.",
            "val-resp-title": "Responsibility:",
            "val-resp-text": "I always deliver assigned work within the established deadlines.",
            "val-int-title": "Integrity:",
            "val-int-text": "I promote software integrity through clean code, data protection, and responsible web solution development.",
            "val-inn-title": "Innovation:",
            "val-inn-text": "I implement solutions best suited to meet client and project needs.",

            // Stack
            "title-stack": "Technologies",
            "stack-backend": "Backend & Cloud",
            "stack-languages": "Languages & Frontend",
            "stack-tools": "Tools & Methodology",

            // Contact
            "title-contact": "Contact",
            "contact-subtitle": "Have a project in mind or wish to discuss a job opportunity? You can send me a direct message or reach out via WhatsApp.",
            "card-direct": "Direct Channels",
            "card-whatsapp-text": "If you prefer an immediate response, let's chat directly via WhatsApp:",
            "btn-whatsapp": "Chat on WhatsApp",
            "lbl-location": "Location:",
            "lbl-name": "Full Name",
            "ph-name": "Your name",
            "lbl-email": "Email Address",
            "ph-email": "your@email.com",
            "lbl-subject": "Subject",
            "ph-subject": "Inquiry / Project Proposal",
            "lbl-message": "Message",
            "ph-message": "Write your message here...",
            "btn-submit": "Send Message",

            // Footer
            "footer-text": "© 2026 Eduardo Chacón Zamora. Building robust solutions with clean, efficient code."
        }
    };

    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    // Cambia el idioma y actualiza los elementos de la interfaz
    function setLanguage(lang) {
        localStorage.setItem('preferred_lang', lang);

        if (lang === 'en') {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
            document.documentElement.lang = 'en';
        } else {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'es';
        }

        // Actualizar textos normales
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Actualizar placeholders del formulario
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }

    // Event listeners para los botones del navbar
    if (btnEs && btnEn) {
        btnEs.addEventListener('click', () => setLanguage('es'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    // Idioma inicial guardado o por defecto Español
    const savedLang = localStorage.getItem('preferred_lang') || 'es';
    setLanguage(savedLang);
});