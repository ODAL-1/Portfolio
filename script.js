/* =========================================================
   Alan García · Portfolio — script.js
   - i18n bilingüe ES/EN sin recargar
   - Reveal on scroll
   - Render de proyectos secundarios
   - Spotlight cursor en cards
   - Sticky nav state
   ========================================================= */

(() => {
  // =========================================================
  // i18n dictionary
  // =========================================================
  const translations = {
    es: {
      // Meta
      "meta.title": "Alan García · Junior Developer & IT Support Analyst",
      "meta.description":
        "Alan García — Junior Developer e IT Support Analyst en Montevideo. Construyendo soluciones a partir de problemas reales en entornos IT.",

      // Nav
      "nav.projects": "Proyectos",
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.stack": "Stack",
      "nav.contact": "Contacto",

      // Hero
      "hero.eyebrow":
        "Montevideo, Uruguay · Open to remote / EU opportunities",
      "hero.role1": "Junior Developer",
      "hero.role2": "IT Support Analyst",
      "hero.desc":
        "Construyo aplicaciones web mantenibles con Angular, TypeScript y Node.js — pensadas para resolver problemas reales en entornos IT y escalar sin romperse.",
      "hero.cta1": "Explorar proyectos",
      "hero.cta2": "Contactar",
      "hero.meta":
        "Disponible para roles junior · open to remote · listo para aportar desde el primer día",

      // Hero — App preview / mockup
      "hero.preview.tag": "Caso real",
      "hero.preview.menu.dashboard": "Dashboard",
      "hero.preview.menu.inventory": "Inventario",
      "hero.preview.menu.orders": "Órdenes",
      "hero.preview.menu.billing": "Facturación",
      "hero.preview.menu.clients": "Clientes",
      "hero.preview.title": "Resumen operativo",
      "hero.preview.sub": "Últimos 30 días",
      "hero.preview.kpi1": "Órdenes",
      "hero.preview.kpi2": "Facturado",
      "hero.preview.kpi3": "Stock crítico",
      "hero.preview.chart": "Volumen semanal",
      "hero.preview.legend": "Órdenes",
      "hero.preview.col1": "Orden",
      "hero.preview.col2": "Cliente",
      "hero.preview.col3": "Estado",
      "hero.preview.col4": "Total",
      "hero.preview.s1": "Pagado",
      "hero.preview.s2": "Pendiente",

      // Projects section
      "projects.title": "Proyectos",
      "projects.lead":
        "Trabajo seleccionado. Aplicaciones reales y experimentos enfocados en interfaces mantenibles y arquitectura clara.",
      "projects.featured.tag": "Proyecto destacado",
      "projects.nv.subtitle":
        "Sistema de gestión interna con módulos de inventario, órdenes y facturación.",
      "projects.nv.desc":
        "Aplicación web desarrollada con Angular, enfocada en gestión interna, autenticación, consumo de APIs y arquitectura modular.",
      "projects.nv.demo": "Ver Demo",
      "projects.nv.frontend": "Frontend",
      "projects.nv.backend": "Backend",

      // About
      "about.title": "Sobre mí",
      "about.p1":
        "Trabajé como Analista Help Desk L1 en Banco República (vía SONDA) y como Analista en Ciberseguridad, gestionando incidencias, Active Directory, soporte remoto y diagnóstico en entornos corporativos exigentes.",
      "about.p2":
        "Hoy realizo una transición sólida hacia desarrollo web, con foco en Angular, TypeScript y la construcción de aplicaciones mantenibles. Vengo de IT Support: sé diagnosticar, comunicar técnico-funcional y resolver bajo presión.",
      "about.p3":
        "Busco roles junior donde combinar criterio técnico, disciplina operativa y aprendizaje continuo en producto real.",

      // Experience
      "experience.title": "Experiencia",
      "exp.present": "presente",
      "exp.nv.role": "Desarrollador AngularJS (Proyecto)",
      "exp.nv.desc":
        "Desarrollo y mantenimiento de aplicación web. Implementación de interfaces con Angular, consumo de APIs e integración con backend.",
      "exp.cyber.role": "Analista en Ciberseguridad",
      "exp.cyber.desc":
        "Monitoreo y gestión básica de incidentes. Soporte en seguridad de sistemas.",
      "exp.helpdesk.role": "Analista Help Desk L1",
      "exp.helpdesk.desc":
        "Soporte técnico a usuarios en entorno corporativo. Gestión de incidencias y troubleshooting. Active Directory y herramientas remotas.",
      "exp.freelance.role": "Soporte Técnico — Freelance",
      "exp.freelance.desc":
        "Diagnóstico y reparación de equipos. Soporte a usuarios particulares y empresas.",

      // Stack
      "stack.title": "Stack",
      "stack.frontend": "Frontend",
      "stack.backend": "Backend",
      "stack.tools": "Herramientas y Sistemas",
      "stack.tools.windows": "Windows (diagnóstico y resolución de incidencias)",
      "stack.tools.remote": "Soporte remoto",
      "stack.tools.bash": "Bash scripting",
      "stack.education": "Formación",
      "edu.utu.title": "Tecnólogo en Informática",
      "edu.bach.title": "Bach. Tecnológico — Desarrollo Web",
      "edu.c1.sub": "Inglés profesional",

      // Contact
      "contact.title": "Contacto",
      "contact.cta": "¿Te interesa trabajar conmigo?",
      "contact.lead":
        "Estoy abierto a oportunidades junior, proyectos reales y colaboración.",

      // Footer
      "footer.rights": "Todos los derechos reservados.",
      "footer.build": "HTML · CSS · JS — sin frameworks",

      // Secondary projects
      "proj.tickets.title": "Sistema de tickets IT",
      "proj.tickets.desc":
        "Aplicación interna para gestionar incidencias y solicitudes IT, basada en mi experiencia operando ticketing corporativo.",
      "proj.tickets.status": "Activo",
      "proj.labs.title": "Labs & Experimentos",
      "proj.labs.desc":
        "Pequeñas pruebas técnicas: componentes, prototipos y exploración de patrones de UI, scripting y automatización.",
      "proj.labs.status": "Activo",
    },

    en: {
      // Meta
      "meta.title": "Alan García · Junior Developer & IT Support Analyst",
      "meta.description":
        "Alan García — Junior Developer & IT Support Analyst based in Montevideo. Building solutions from real problems in IT environments.",

      // Nav
      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.stack": "Stack",
      "nav.contact": "Contact",

      // Hero
      "hero.eyebrow":
        "Montevideo, Uruguay · Open to remote / EU opportunities",
      "hero.role1": "Junior Developer",
      "hero.role2": "IT Support Analyst",
      "hero.desc":
        "I build maintainable web apps with Angular, TypeScript and Node.js — designed to solve real problems in IT environments and scale without breaking.",
      "hero.cta1": "Explore projects",
      "hero.cta2": "Get in touch",
      "hero.meta":
        "Open to junior roles · open to remote · ready to ship from day one",

      // Hero — App preview / mockup
      "hero.preview.tag": "Real case",
      "hero.preview.menu.dashboard": "Dashboard",
      "hero.preview.menu.inventory": "Inventory",
      "hero.preview.menu.orders": "Orders",
      "hero.preview.menu.billing": "Billing",
      "hero.preview.menu.clients": "Clients",
      "hero.preview.title": "Operational summary",
      "hero.preview.sub": "Last 30 days",
      "hero.preview.kpi1": "Orders",
      "hero.preview.kpi2": "Billed",
      "hero.preview.kpi3": "Low stock",
      "hero.preview.chart": "Weekly volume",
      "hero.preview.legend": "Orders",
      "hero.preview.col1": "Order",
      "hero.preview.col2": "Client",
      "hero.preview.col3": "Status",
      "hero.preview.col4": "Total",
      "hero.preview.s1": "Paid",
      "hero.preview.s2": "Pending",

      // Projects section
      "projects.title": "Projects",
      "projects.lead":
        "Selected work. Real applications and focused experiments around maintainable interfaces and clear architecture.",
      "projects.featured.tag": "Featured project",
      "projects.nv.subtitle":
        "Internal management system with inventory, orders and billing modules.",
      "projects.nv.desc":
        "Web application built with Angular, focused on internal management, authentication, API consumption and modular architecture.",
      "projects.nv.demo": "Live Demo",
      "projects.nv.frontend": "Frontend",
      "projects.nv.backend": "Backend",

      // About
      "about.title": "About",
      "about.p1":
        "I worked as a Help Desk L1 Analyst at Banco República (via SONDA) and as a Cybersecurity Analyst, handling incidents, Active Directory, remote support and diagnostics in demanding corporate environments.",
      "about.p2":
        "Today I'm making a solid transition into web development, focused on Angular, TypeScript and building maintainable applications. I come from IT Support — I can diagnose, communicate across technical and business contexts, and deliver under pressure.",
      "about.p3":
        "I'm looking for junior roles where I can combine technical judgment, operational discipline and continuous learning on real product work.",

      // Experience
      "experience.title": "Experience",
      "exp.present": "present",
      "exp.nv.role": "AngularJS Developer (Project)",
      "exp.nv.desc":
        "Development and maintenance of a web application. Built UI with Angular and integrated with the backend layer.",
      "exp.cyber.role": "Cybersecurity Analyst",
      "exp.cyber.desc":
        "Incident monitoring and basic event management. System security support.",
      "exp.helpdesk.role": "Help Desk Analyst (L1)",
      "exp.helpdesk.desc":
        "Technical support for users in a corporate environment. Incident management and troubleshooting. Active Directory and remote tools.",
      "exp.freelance.role": "IT Support — Freelance",
      "exp.freelance.desc":
        "Hardware and software diagnostics and repair. Support for individuals and small businesses.",

      // Stack
      "stack.title": "Stack",
      "stack.frontend": "Frontend",
      "stack.backend": "Backend",
      "stack.tools": "Tools & Systems",
      "stack.tools.windows": "Windows (diagnostics & incident resolution)",
      "stack.tools.remote": "Remote support",
      "stack.tools.bash": "Bash scripting",
      "stack.education": "Education",
      "edu.utu.title": "Computer Technologist (Tecnólogo en Informática)",
      "edu.bach.title": "Tech Baccalaureate — Web Development",
      "edu.c1.sub": "Professional English",

      // Contact
      "contact.title": "Contact",
      "contact.cta": "Interested in working together?",
      "contact.lead":
        "I'm open to junior opportunities, real projects and collaboration.",

      // Footer
      "footer.rights": "All rights reserved.",
      "footer.build": "HTML · CSS · JS — no frameworks",

      // Secondary projects
      "proj.tickets.title": "IT Ticketing System",
      "proj.tickets.desc":
        "Internal app to manage IT incidents and requests, informed by my experience operating corporate ticketing tools.",
      "proj.tickets.status": "Active",
      "proj.labs.title": "Labs & Experiments",
      "proj.labs.desc":
        "Small technical tests: components, prototypes and exploration of UI, scripting and automation patterns.",
      "proj.labs.status": "Active",
    },
  };

  // =========================================================
  // Secondary projects data
  // =========================================================
  const secondaryProjects = [
    {
      titleKey: "proj.tickets.title",
      descKey: "proj.tickets.desc",
      statusKey: "proj.tickets.status",
      statusVariant: "wip",
      stack: ["Angular", "TypeScript", "Node.js"],
    },
    {
      titleKey: "proj.labs.title",
      descKey: "proj.labs.desc",
      statusKey: "proj.labs.status",
      statusVariant: "wip",
      stack: ["JavaScript", "Python", "Bash"],
    },
  ];

  // =========================================================
  // Helpers
  // =========================================================
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // =========================================================
  // i18n
  // =========================================================
  let currentLang = "es";

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value !== "string") return;

      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.tagName === "TITLE") {
        el.textContent = value;
        document.title = value;
      } else {
        el.textContent = value;
      }
    });

    // Lang toggle visual state
    $$(".lang-toggle__option").forEach((opt) => {
      opt.classList.toggle(
        "is-active",
        opt.getAttribute("data-lang") === lang
      );
    });

    // Re-render secondary projects with the right language
    renderSecondaryProjects(lang);

    try { localStorage.setItem("portfolio.lang", lang); } catch (_) {}
    currentLang = lang;
  }

  function initLangToggle() {
    const btn = $("#lang-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const next = currentLang === "es" ? "en" : "es";
      applyTranslations(next);
    });

    let initial = "es";
    try {
      const stored = localStorage.getItem("portfolio.lang");
      if (stored === "es" || stored === "en") {
        initial = stored;
      } else if (
        navigator.language &&
        navigator.language.toLowerCase().startsWith("en")
      ) {
        initial = "en";
      }
    } catch (_) {}
    applyTranslations(initial);
  }

  // =========================================================
  // Secondary projects rendering
  // =========================================================
  function renderSecondaryProjects(lang) {
    const grid = $("#projects-grid");
    if (!grid) return;
    const dict = translations[lang];

    grid.innerHTML = secondaryProjects
      .map((p) => {
        const title = dict[p.titleKey] || "";
        const desc  = dict[p.descKey]  || "";
        const status = dict[p.statusKey] || "";
        const statusClass =
          p.statusVariant === "wip" ? "project-card__status--wip" : "";
        const stack = p.stack.map((s) => `<li>${s}</li>`).join("");

        return `
          <article class="project-card reveal" data-spotlight>
            <header class="project-card__head">
              <h3 class="project-card__title">${title}</h3>
              <span class="project-card__status ${statusClass}">${status}</span>
            </header>
            <p class="project-card__desc">${desc}</p>
            <ul class="project-card__stack">${stack}</ul>
          </article>
        `;
      })
      .join("");

    bindReveal($$(".project-card.reveal", grid));
    bindSpotlight($$("[data-spotlight]", grid));
  }

  // =========================================================
  // Reveal on scroll
  // =========================================================
  let observer;
  function getObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    return observer;
  }

  function bindReveal(nodes) {
    const obs = getObserver();
    nodes.forEach((n) => obs.observe(n));
  }

  // =========================================================
  // Spotlight cursor
  // =========================================================
  function bindSpotlight(nodes) {
    nodes.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      });
    });
  }

  // =========================================================
  // Sticky nav state
  // =========================================================
  function initNav() {
    const nav = $(".nav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // =========================================================
  // Footer year
  // =========================================================
  function setYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  // =========================================================
  // Init
  // =========================================================
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    setYear();
    initLangToggle();
    bindReveal($$(".reveal"));
  });
})();
