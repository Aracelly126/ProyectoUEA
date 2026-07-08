/* Configuracion global de Tailwind */
if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          royal: {
            50: '#eff4ff',
            100: '#dce8ff',
            200: '#b8d0ff',
            300: '#7eabff',
            400: '#3d7fff',
            500: '#1a5cd4',
            600: '#1247b8',
            700: '#1b4ca0',
            800: '#1b3f86',
            900: '#1a3b76',
            950: '#142b57'
          },
          silver: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8'
          },
          offwhite: '#f5f8ff',
          brand: {
            50: '#eff4ff',
            100: '#dce8ff',
            500: '#1a5cd4',
            600: '#1247b8',
            700: '#1b4ca0'
          }
        },
        fontFamily: {
          display: ['Playfair Display', 'serif'],
          heading: ['Playfair Display', 'serif'],
          bebas: ['Bebas Neue', 'cursive'],
          body: ['DM Sans', 'ui-sans-serif', 'system-ui']
        }
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('navbar')) {
  /* ─── Navbar fijo (siempre visible) ─── */
  const navbar = document.getElementById('navbar');
  document.querySelectorAll('#desktopNav .nav-link').forEach(l => l.style.color = 'rgba(255,255,255,.8)');
  window.addEventListener('scroll', () => {
    navbar.style.background = 'rgba(26,59,118,.9)';
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,.22)';
  });

  /* ─── Hamburger ─── */
  document.getElementById('hambBtn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });

  /* ─── Hero slider ─── */
  const heroSlides = document.querySelectorAll('.hero-wrap .hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  function goSlide(n) {
    heroSlides[currentSlide].classList.remove('active');
    heroDots[currentSlide].classList.remove('active');
    currentSlide = n;
    heroSlides[currentSlide].classList.add('active');
    heroDots[currentSlide].classList.add('active');
  }
  setInterval(() => goSlide((currentSlide + 1) % heroSlides.length), 5000);

  /* ─── Scroll reveal ─── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ─── Login Modal ─── */
  function openLoginModal(){ 
    const m = document.getElementById("loginModal");
    m.classList.remove("hidden"); 
    m.classList.add("flex"); 
  }
  function closeLoginModal(){ 
    const m = document.getElementById("loginModal");
    m.classList.add("hidden"); 
    m.classList.remove("flex"); 
  }

  document.querySelectorAll(".open-login").forEach(btn => btn.addEventListener("click", openLoginModal));
  document.getElementById("closeLogin").addEventListener("click", closeLoginModal);

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const user = (document.getElementById("loginUser").value || "").trim().toLowerCase();
    const pass = (document.getElementById("loginPass").value || "").trim();

    if (user === "admin" && pass === "admin123") {
      window.location.href = "system.html";
      return;
    }

    alert("Credenciales incorrectas. Usa usuario admin y contraseña admin123.");
  });
    if (typeof goSlide === 'function') {
      window.goSlide = goSlide;
    }
  }

  if (document.getElementById('adminApp')) {
      const KEY = "eduflow-admin-v3";
      const AUTH_KEY = "eduflow-auth-v1";
      let searchableInstances = [];

      const NIVELES = [
        { value: "Inicial", label: "Educación Inicial" },
        { value: "Basica", label: "Educación Básica" },
        { value: "Bachillerato", label: "Bachillerato" }
      ];

      const JORNADAS = [
        { value: "Matutina", label: "Matutina" },
        { value: "Vespertina", label: "Vespertina" },
        { value: "Ambas", label: "Ambas" }
      ];

      const BLOQUES = [
        { value: "Bloque 1", label: "Bloque 1" },
        { value: "Bloque 2", label: "Bloque 2" },
        { value: "Bloque 3", label: "Bloque 3" }
      ];

      const TIPOS = [
        { value: "Aula", label: "Aula" },
        { value: "Laboratorio", label: "Laboratorio" }
      ];

      const TIPOS_MATERIA = [
        { value: "Académica", label: "Académica" },
        { value: "Técnica", label: "Técnica" }
      ];

      const wizardSteps = [
        "Carga de datos",
        "Asignacion de recursos",
        "Configuracion academica",
        "Simulacion de generacion",
        "Resultado final"
      ];

      const timeline = [
        "Validando disponibilidad docente",
        "Resolviendo cruces de materias y aulas",
        "Distribuyendo carga horaria por nivel",
        "Aplicando restricciones de institucion",
        "Horario final generado sin conflictos"
      ];

      const app = load();
      let studentSelectedHorarioCursoId = null;
      let adminMenuOpen = false;

      let timer = null;
      let heroSliderTimer = null;

      function load() {
        // Generar 50 docentes
        const nombreDocentes = ["Ramiro", "Carlos", "Verónica", "María López", "Jorge Martínez", "Patricia Fernández", "Roberto Díaz", "Elena Rodríguez", "Francisco Ramírez", "Isabel García", "Miguel Morales", "Sofía Jiménez", "Antonio Ruiz", "Laura Pérez", "Andrés Castillo", "Beatriz Flores", "David Quintero", "Cristina Navarro", "Eduardo Soto", "Fernanda Molina", "Gabriel Rojas", "Gabriela Sánchez", "Héctor Vargas", "Irene Torres", "Javier Herrera", "Jacqueline Ortiz", "Kevin Reyes", "Karla Mendez", "Leonardo Salazar", "Lorena Villalobos", "Marcelo Fuentes", "Mariana Bustamante", "Nicolás Aguilar", "Natalia Campos", "Óscar Paredes", "Olga Vera", "Pablo Medina", "Pamela Araya", "Quentin Romero", "Quintina Solís", "Rafael Bravo", "Raquel Marín", "Saúl Guzmán", "Sandra Lara", "Tadeo Núñez", "Tatiana Ramos", "Ubaldo Vidal", "Úrsula Herrera", "Víctor Leiva", "Vanessa Muñoz"];
        const especialidades = ["Mecánica automotriz", "Instalaciones", "Equipos y máquinas eléctricas", "Ciencias", "Electrónica de consumo", "Mecánica industrial"];
        const jornadas = ["Matutina", "Vespertina", "Ambas"];
        
        const docentes = nombreDocentes.map((nombre, i) => ({
          id: i + 1,
          nombre,
          especialidad: especialidades[i % especialidades.length],
          jornada: jornadas[i % jornadas.length]
        }));

        // Generar 50 espacios (aulas y laboratorios)
        const espacios = [];
        let id = 1;
        
        // Bloque 1: 20 aulas + laboratorios de especialidad
        for (let i = 1; i <= 15; i++) {
          espacios.push({ id: id++, nombre: `A1-${String(i).padStart(2, '0')}`, bloque: "Bloque 1", tipo: "Aula", capacidad: 30 + Math.floor(Math.random() * 15) });
        }
        // Laboratorios especialidad en Bloque 1
        const labEspecialidad = ["Mecánica automotriz", "Instalaciones", "Equipos eléctricos", "Ciencias", "Electrónica de consumo"];
        labEspecialidad.forEach((esp, i) => {
          espacios.push({ id: id++, nombre: `LAB-${esp.substring(0, 3).toUpperCase()}-B1`, bloque: "Bloque 1", tipo: "Laboratorio", capacidad: 25 });
        });
        
        // Bloque 2: 15 aulas
        for (let i = 1; i <= 15; i++) {
          espacios.push({ id: id++, nombre: `A2-${String(i).padStart(2, '0')}`, bloque: "Bloque 2", tipo: "Aula", capacidad: 30 + Math.floor(Math.random() * 15) });
        }
        
        // Bloque 3: 15 aulas
        for (let i = 1; i <= 15; i++) {
          espacios.push({ id: id++, nombre: `A3-${String(i).padStart(2, '0')}`, bloque: "Bloque 3", tipo: "Aula", capacidad: 30 + Math.floor(Math.random() * 15) });
        }

        // Generar cursos (Educación Inicial, Educación Básica, Bachillerato 1-3 con 6 especialidades)
        const cursos = [];
        let cursoId = 1;
        const paralelos = ["A", "B", "C", "D"];
        const especialidadesBGU = ["Mecánica automotriz", "Instalaciones", "Equipos y máquinas eléctricas", "Ciencias", "Electrónica de consumo", "Mecánica industrial"];
        
        // Educación Inicial
        for (let p = 0; p < 2; p++) {
          cursos.push({
            id: cursoId++,
            nombre: `Inicial ${paralelos[p]}`,
            nivel: "Educación Inicial",
            paralelo: paralelos[p]
          });
        }
        
        // Educación Básica: 1ro a 9no
        for (let año = 1; año <= 9; año++) {
          for (let p = 0; p < 3; p++) {
            cursos.push({
              id: cursoId++,
              nombre: `${año}${año === 1 ? 'ro' : año === 2 ? 'do' : año === 3 ? 'ro' : 'to'} EGB ${paralelos[p]}`,
              nivel: "Educación Básica",
              paralelo: paralelos[p]
            });
          }
        }
        
        // Bachillerato: 1ro a 3ro con especialidades
        for (let año = 1; año <= 3; año++) {
          for (const esp of especialidadesBGU) {
            for (let p = 0; p < 2; p++) {
              const anioLabel = año === 1 ? "1ro" : año === 2 ? "2do" : "3ro";
              cursos.push({
                id: cursoId++,
                nombre: `${anioLabel} ${esp} ${paralelos[p]}`,
                nivel: "Bachillerato",
                paralelo: paralelos[p]
              });
            }
          }
        }

        // Generar materias por nivel y especialidad
        const materias = [];
        let materiaId = 1;
        
        // Asignaturas Educación Inicial
        const materiasInicial = [
          { nombre: "Estimulación Temprana", nivel: "Educación Inicial", horas: 4 },
          { nombre: "Psicomotricidad", nivel: "Educación Inicial", horas: 3 },
          { nombre: "Lenguaje y Comunicación", nivel: "Educación Inicial", horas: 3 },
          { nombre: "Matemática Lúdica", nivel: "Educación Inicial", horas: 2 }
        ];
        
        // Asignaturas Educación Básica
        const materiasBasica = [
          { nombre: "Lengua y Literatura", nivel: "Educación Básica", horas: 5 },
          { nombre: "Matemáticas", nivel: "Educación Básica", horas: 6 },
          { nombre: "Ciencias Naturales", nivel: "Educación Básica", horas: 4 },
          { nombre: "Estudios Sociales", nivel: "Educación Básica", horas: 3 },
          { nombre: "Educación Física", nivel: "Educación Básica", horas: 2 },
          { nombre: "Educación Artística", nivel: "Educación Básica", horas: 2 },
          { nombre: "Inglés", nivel: "Educación Básica", horas: 2 },
          { nombre: "Física", nivel: "Educación Básica", horas: 3 },
          { nombre: "Química", nivel: "Educación Básica", horas: 2 },
          { nombre: "Biología", nivel: "Educación Básica", horas: 3 }
        ];
        
        // Bachillerato (común para todas especialidades)
        const materiasBGUComunes = [
          { nombre: "Lengua y Literatura", horas: 3 },
          { nombre: "Matemáticas", horas: 4 },
          { nombre: "Inglés", horas: 2 },
          { nombre: "Educación Física", horas: 2 },
          { nombre: "Filosofía", horas: 1 }
        ];
        
        // Especialidades BGU
        const materiasPorEspecialidad = {
          "Mecánica automotriz": [
            { nombre: "Motores de Combustión Interna", horas: 4 },
            { nombre: "Sistemas Transmisión", horas: 3 },
            { nombre: "Diagnóstico Automotriz", horas: 3 },
            { nombre: "Mantenimiento Preventivo", horas: 2 }
          ],
          "Instalaciones": [
            { nombre: "Instalaciones Eléctricas", horas: 4 },
            { nombre: "Instalaciones de Agua y Gas", horas: 3 },
            { nombre: "Sistemas de Climatización", horas: 3 },
            { nombre: "Normativa Técnica y Seguridad", horas: 2 }
          ],
          "Equipos y máquinas eléctricas": [
            { nombre: "Máquinas Eléctricas Rotativas", horas: 4 },
            { nombre: "Transformadores", horas: 3 },
            { nombre: "Control de Motores", horas: 3 },
            { nombre: "Mantenimiento de Equipos", horas: 2 }
          ],
          "Ciencias": [
            { nombre: "Biología Avanzada", horas: 4 },
            { nombre: "Química Orgánica", horas: 4 },
            { nombre: "Física Aplicada", horas: 3 },
            { nombre: "Laboratorio Científico", horas: 2 }
          ],
          "Electrónica de consumo": [
            { nombre: "Electrónica Básica", horas: 4 },
            { nombre: "Reparación de Equipos Electrónicos", horas: 3 },
            { nombre: "Circuitos Integrados", horas: 3 },
            { nombre: "Soldadura Electrónica", horas: 2 }
          ],
          "Mecánica industrial": [
            { nombre: "Mecanismos y Máquinas", horas: 4 },
            { nombre: "Tecnología de Materiales", horas: 3 },
            { nombre: "Procesos de Manufactura", horas: 3 },
            { nombre: "Control de Calidad", horas: 2 }
          ]
        };
        
        // Agregar materias Educación Inicial
        materiasInicial.forEach(m => {
          materias.push({ id: materiaId++, nombre: m.nombre, nivel: m.nivel, horas: m.horas, tipo_materia: "Académica" });
        });
        
        // Agregar materias Educación Básica
        materiasBasica.forEach(m => {
          materias.push({ id: materiaId++, nombre: m.nombre, nivel: m.nivel, horas: m.horas, tipo_materia: "Académica" });
        });
        
        // Agregar materias BGU
        for (const esp of especialidadesBGU) {
          // Comunes
          materiasBGUComunes.forEach(m => {
            materias.push({ id: materiaId++, nombre: m.nombre, nivel: "Bachillerato", horas: m.horas, tipo_materia: "Académica" });
          });
          // Especialidad
          materiasPorEspecialidad[esp].forEach(m => {
            materias.push({ id: materiaId++, nombre: m.nombre, nivel: `Bachillerato - ${esp}`, horas: m.horas, tipo_materia: "Técnica" });
          });
        }

        const materiaMicro = { id: materiaId++, nombre: "Microprocesadores", nivel: "Bachillerato - Electrónica de consumo", tipo_materia: "Técnica" };
        materias.push(materiaMicro);

        const grupos = createDefaultGroupsForTecnicos(cursos);
        const asignaciones = createAutoAssignments({ cursos, materias, docentes, grupos });

        const base = {
          view: "horarios",
          step: 1,
          editableSchedule: false,
          docentes,
          materias,
          cursos,
          grupos,
          asignaciones,
          generatedSchedules: [],
          selectedHorarioCursoId: null,
          espacios,
          schedule: [
            ["07:00", "Matematica 1B", "Lengua 1B", "Ciencias 1B", "Matematica 1B", "Arte 1B"],
            ["08:00", "Lengua 2B", "Matematica 2B", "Ingles 2B", "Ciencias 2B", "Computacion 2B"],
            ["09:00", "Fisica 1BGU", "Quimica 2BGU", "Programacion 3INF", "Fisica 2BGU", "Tutoria"],
            ["10:00", "Lab Computo", "Historia", "Emprendimiento", "Lab Quimica", "Lectura"],
            ["11:00", "Ingles", "Biologia", "Matematica", "Ingles", "Proyecto"],
            ["12:00", "Educacion Fisica", "Ciudadania", "Filosofia", "Musica", "Cierre"]
          ]
        };

        try {
          const raw = localStorage.getItem(KEY);
          if (!raw) return base;
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed.materias)) {
            parsed.materias = parsed.materias.map((m) => ({
              ...m,
              tipo_materia: m.tipo_materia || (String(m.nivel || "").includes(" - ") ? "Técnica" : "Académica")
            }));
          }
          if (Array.isArray(parsed.grupos)) {
            parsed.grupos = parsed.grupos.map((g) => ({
              ...g,
              estudiantes: Number(g.estudiantes) || 20
            }));
          } else {
            parsed.grupos = createDefaultGroupsForTecnicos(parsed.cursos || cursos);
          }

          const minAsignacionesEsperadas = Math.max(80, Math.floor(((parsed.cursos || cursos).length || 0) * 3));
          if (!Array.isArray(parsed.asignaciones) || parsed.asignaciones.length < minAsignacionesEsperadas) {
            parsed.asignaciones = createAutoAssignments({
              cursos: parsed.cursos || cursos,
              materias: parsed.materias || materias,
              docentes: parsed.docentes || docentes,
              grupos: parsed.grupos || grupos
            });
          }
          if (!Array.isArray(parsed.generatedSchedules)) {
            parsed.generatedSchedules = [];
          }
          if (parsed.selectedHorarioCursoId == null) {
            parsed.selectedHorarioCursoId = null;
          }
          return { ...base, ...parsed };
        } catch {
          return base;
        }
      }

      function createDefaultGroupsForTecnicos(cursos) {
        const tecnicos = (cursos || []).filter((c) => c.nivel === "Bachillerato");
        let id = 1;
        const grupos = [];
        tecnicos.forEach((curso, idx) => {
          grupos.push({ id: id++, nombre: "Grupo 1", curso_id: curso.id, estudiantes: 20 + (idx % 8) });
          grupos.push({ id: id++, nombre: "Grupo 2", curso_id: curso.id, estudiantes: 19 + ((idx + 3) % 9) });
        });
        return grupos;
      }

      function createAutoAssignments({ cursos, materias, docentes, grupos }) {
        const allCursos = cursos || [];
        const allMaterias = materias || [];
        const allDocentes = docentes || [];
        const allGrupos = grupos || [];
        const result = [];
        let id = 1;

        const pickDocente = (materiaNombre, seed) => {
          if (!allDocentes.length) return null;
          const key = String(materiaNombre || "").toLowerCase();
          const byEspecialidad = allDocentes.find((d) => key.includes(String(d.especialidad || "").toLowerCase().split(" ")[0]));
          if (byEspecialidad) return byEspecialidad;
          return allDocentes[seed % allDocentes.length];
        };

        allCursos.forEach((curso, idxCurso) => {
          const nivel = curso.nivel;
          const materiasNivel = allMaterias.filter((m) => {
            if (nivel === "Educación Inicial") return m.nivel === "Educación Inicial";
            if (nivel === "Educación Básica") return m.nivel === "Educación Básica";
            if (nivel === "Bachillerato") return m.nivel === "Bachillerato" || m.nivel.startsWith("Bachillerato -");
            return false;
          });

          const materiasAcad = materiasNivel.filter((m) => m.tipo_materia !== "Técnica");
          const espMatch = String(curso.nombre).match(/Mecánica automotriz|Instalaciones|Equipos y máquinas eléctricas|Ciencias|Electrónica de consumo|Mecánica industrial/i);
          const esp = espMatch ? espMatch[0] : "";
          const materiasTec = materiasNivel.filter((m) => m.tipo_materia === "Técnica" && (!esp || m.nivel.includes(esp)));

          const academicasAsignar = materiasAcad.slice(0, 6);
          academicasAsignar.forEach((m, i) => {
            const d = pickDocente(m.nombre, idxCurso * 11 + i);
            result.push({ id: id++, docente_id: d ? d.id : null, materia_id: m.id, curso_id: curso.id, grupo_id: null });
          });

          if (nivel === "Bachillerato") {
            const g1 = allGrupos.find((g) => Number(g.curso_id) === Number(curso.id) && g.nombre === "Grupo 1");
            const g2 = allGrupos.find((g) => Number(g.curso_id) === Number(curso.id) && g.nombre === "Grupo 2");
            if (g1 && g2 && materiasTec.length >= 2) {
              const maxPairs = Math.min(2, Math.floor(materiasTec.length / 2));
              for (let pair = 0; pair < maxPairs; pair += 1) {
                const m1 = materiasTec[pair * 2];
                const m2 = materiasTec[pair * 2 + 1];
                const d1 = pickDocente(m1.nombre, idxCurso * 17 + pair);
                const d2 = pickDocente(m2.nombre, idxCurso * 19 + pair + 1);
                result.push({
                  id: id++,
                  docente_id: d1 ? d1.id : null,
                  materia_id: m1.id,
                  curso_id: curso.id,
                  grupo_id: null,
                  rotacion: {
                    materia1_id: m1.id,
                    docente1_id: d1 ? d1.id : null,
                    materia2_id: m2.id,
                    docente2_id: d2 ? d2.id : null
                  }
                });
              }
            }
          }
        });

        return result.filter((a) => a.docente_id && a.materia_id && a.curso_id);
      }

      function save() {
        localStorage.setItem(KEY, JSON.stringify(app));
      }

      function loadAuth() {
        try {
          const raw = localStorage.getItem(AUTH_KEY);
          if (!raw) return { role: null };
          const parsed = JSON.parse(raw);
          return { role: parsed.role || null };
        } catch {
          return { role: null };
        }
      }

      function saveAuth(role) {
        localStorage.setItem(AUTH_KEY, JSON.stringify({ role }));
      }

      function clearAuth() {
        localStorage.removeItem(AUTH_KEY);
      }

      function setPortalMode(mode) {
        const publicSite = document.getElementById("publicSite");
        const adminApp = document.getElementById("adminApp");
        const studentApp = document.getElementById("studentApp");

        if (publicSite) publicSite.classList.toggle("hidden", mode !== "public");
        if (adminApp) adminApp.classList.toggle("hidden", mode !== "admin");
        if (studentApp) studentApp.classList.toggle("hidden", mode !== "student");
      }

      function openLoginModal() {
        const modal = document.getElementById("loginModal");
        if (!modal) return;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }

      function closeLoginModal() {
        const modal = document.getElementById("loginModal");
        if (!modal) return;
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }

      function initHeroSlider() {
        const slides = Array.from(document.querySelectorAll(".hero-slide"));
        if (!slides.length) return;
        let current = 0;
        clearInterval(heroSliderTimer);
        heroSliderTimer = setInterval(() => {
          slides[current].classList.remove("active");
          current = (current + 1) % slides.length;
          slides[current].classList.add("active");
        }, 3500);
      }

      function renderStudentPortal() {
        const container = document.getElementById("studentContent");
        if (!container) return;

        const generated = generateSchedulesForCourses();
        const selectedId = Number(studentSelectedHorarioCursoId || (generated[0] ? generated[0].cursoId : 0));
        const selected = generated.find((x) => Number(x.cursoId) === selectedId) || generated[0];

        container.innerHTML = `
          <section class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p class="text-sm text-slate-600">Visualización de horarios generados (modo solo lectura).</p>
              <select id="studentHorarioCursoSelect" class="rounded-lg border border-slate-300 px-3 py-2 text-sm">
                ${generated.map((g) => `<option value="${g.cursoId}" ${selected && Number(g.cursoId) === Number(selected.cursoId) ? "selected" : ""}>${g.cursoNombre}</option>`).join("")}
              </select>
            </div>
            <div class="overflow-x-auto rounded-xl border border-slate-200">
              ${renderSelectedSchedule(selected)}
            </div>
          </section>
        `;

        const sel = document.getElementById("studentHorarioCursoSelect");
        if (sel) {
          sel.addEventListener("change", () => {
            studentSelectedHorarioCursoId = Number(sel.value) || null;
            renderStudentPortal();
          });
        }
      }

      function bindGlobalAuthUi() {
        document.querySelectorAll(".open-login").forEach((btn) => {
          btn.addEventListener("click", openLoginModal);
        });

        const closeBtn = document.getElementById("closeLogin");
        if (closeBtn) closeBtn.addEventListener("click", closeLoginModal);

        const loginForm = document.getElementById("loginForm");
        if (loginForm) {
          loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = (document.getElementById("loginUser")?.value || "").trim().toLowerCase();
            const pass = (document.getElementById("loginPass")?.value || "").trim();

            if (user === "admin" && pass === "admin123") {
              saveAuth("admin");
              closeLoginModal();
              setPortalMode("admin");
              render();
              return;
            }

            if ((user === "estudiante" || user === "student") && pass === "estu123") {
              saveAuth("student");
              closeLoginModal();
              setPortalMode("student");
              renderStudentPortal();
              return;
            }

            alert("Credenciales inválidas.");
          });
        }


        const logoutStudent = document.getElementById("logoutStudent");
        if (logoutStudent) {
          logoutStudent.addEventListener("click", () => {
            clearAuth();
            setPortalMode("public");
          });
        }
      }

      function bootstrapPortal() {
        app.view = "dashboard";
        setPortalMode("admin");
        render();
      }

      function setView(view) {
        app.view = view;
        save();
        render();
      }

      function menuClasses(active) {
        return active ? "bg-brand-100 text-brand-800" : "text-slate-600 hover:bg-slate-100";
      }

      function mobileMenuClasses(active) {
        return active
          ? "bg-white text-royal-900 shadow-[0_10px_24px_rgba(255,255,255,.12)]"
          : "bg-white/6 text-white/95 hover:bg-white/12";
      }

      function render() {
        destroySearchableSelects();
        document.querySelectorAll(".menu-btn").forEach((btn) => {
          const active = app.view === btn.dataset.view;
          const isMobileMenu = !!btn.closest("#mobileAdminMenu");
          btn.className = isMobileMenu
            ? `menu-btn w-full rounded-2xl px-3 py-2 text-left font-bold transition ${mobileMenuClasses(active)}`
            : `menu-btn w-full rounded-xl px-3 py-2 text-left font-bold ${menuClasses(active)}`;
        });

        const content = document.getElementById("content");
        if (app.view === "dashboard") content.innerHTML = dashboardView();
        if (app.view === "horarios") content.innerHTML = horariosView();
        if (app.view === "docentes") content.innerHTML = crudView("docentes", ["nombre", "especialidad", "jornada"]);
        if (app.view === "materias") content.innerHTML = crudView("materias", ["nombre", "nivel", "tipo_materia"]);
        if (app.view === "cursos") content.innerHTML = crudView("cursos", ["nombre", "nivel", "paralelo"]);
        if (app.view === "grupos") content.innerHTML = gruposView();
        if (app.view === "asignaciones") content.innerHTML = asignacionesView();
        if (app.view === "espacios") content.innerHTML = crudView("espacios", ["nombre", "bloque", "tipo", "capacidad"]);

        bindCommon();
        if (app.view === "horarios") bindHorarios();
        if (["docentes", "materias", "cursos", "espacios"].includes(app.view)) bindCrud(app.view);
        if (app.view === "grupos") bindGrupos();
        if (app.view === "asignaciones") bindAsignaciones();
        initSearchableSelects();
      }

      function initSearchableSelects() {
        if (typeof Choices === "undefined") return;

        document.querySelectorAll("select.searchable-select").forEach((select) => {
          const firstOptionLabel = (select.options[0]?.textContent || "opción")
            .replace(/^Seleccionar\s+/i, "")
            .trim()
            .toLowerCase();
          const placeholderValue = `Buscar ${firstOptionLabel}...`;
          const instance = new Choices(select, {
            searchEnabled: true,
            searchChoices: true,
            searchFloor: 0,
            renderChoiceLimit: -1,
            shouldSort: false,
            itemSelectText: "",
            allowHTML: false,
            searchResultLimit: 100,
            placeholder: true,
            placeholderValue,
            searchPlaceholderValue: placeholderValue,
            fuseOptions: {
              threshold: 0.25,
              distance: 100
            }
          });
          searchableInstances.push(instance);
        });
      }

      function destroySearchableSelects() {
        searchableInstances.forEach((instance) => {
          try {
            instance.destroy();
          } catch {
            // ignore
          }
        });
        searchableInstances = [];
      }

      function dashboardView() {
        const totalDocentes = app.docentes.length;
        const totalMaterias = app.materias.length;
        const totalCursos = app.cursos.length;
        const totalGrupos = (app.grupos || []).length;
        const totalAsignaciones = (app.asignaciones || []).length;
        const totalEspacios = app.espacios.length;

        const cursosInicial = app.cursos.filter((c) => c.nivel === "Educación Inicial").length;
        const cursosBasica = app.cursos.filter((c) => c.nivel === "Educación Básica").length;
        const cursosBachillerato = app.cursos.filter((c) => c.nivel === "Bachillerato").length;

        const laboratorios = app.espacios.filter((e) => e.tipo === "Laboratorio").length;
        const aulas = app.espacios.filter((e) => e.tipo === "Aula").length;
        const rotaciones = (app.asignaciones || []).filter((a) => a.rotacion).length;
        const cobertura = totalCursos ? Math.min(100, Math.round((totalAsignaciones / totalCursos) * 10)) : 0;

        return `
          <section class="space-y-4 sm:space-y-5">
            <article class="rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm sm:p-5">
              <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="space-y-1">
                  <p class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Resumen general</p>
                  <h3 class="font-heading text-2xl font-semibold text-slate-900 sm:text-3xl">Panel académico</h3>
                  <p class="max-w-2xl text-sm text-slate-600">Cobertura estimada de planificación: ${cobertura}% · ${totalCursos} cursos activos.</p>
                </div>
                <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                    <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">Rotaciones</p>
                    <p class="font-bebas text-3xl leading-none text-slate-900">${rotaciones}</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                    <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">Promedio</p>
                    <p class="font-bebas text-3xl leading-none text-slate-900">${totalCursos ? (totalAsignaciones / totalCursos).toFixed(1) : "0.0"}</p>
                  </div>
                </div>
              </div>
            </article>

            <section class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Docentes</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalDocentes}</p>
                </div>
              </article>
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Materias</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalMaterias}</p>
                </div>
              </article>
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10M4 18h16"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Cursos</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalCursos}</p>
                </div>
              </article>
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Grupos</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalGrupos}</p>
                </div>
              </article>
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Asignaciones</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalAsignaciones}</p>
                </div>
              </article>
              <article class="flex items-center gap-4 rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 p-4 shadow-sm sm:min-h-[96px]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-bold uppercase tracking-wide text-brand-700">Espacios</p>
                  <p class="mt-1 font-bebas text-4xl leading-none text-brand-700 sm:text-5xl">${totalEspacios}</p>
                  <p class="mt-1 text-xs text-slate-500">${aulas} aulas · ${laboratorios} laboratorios</p>
                </div>
              </article>
            </section>

            <section class="grid gap-4 lg:grid-cols-2">
              <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <h4 class="font-heading text-lg font-semibold text-slate-900">Cursos por nivel</h4>
                <div class="mt-4 space-y-3 text-sm">
                  <div>
                    <div class="mb-1 flex items-center justify-between gap-3"><span class="text-slate-600">Educación Inicial</span><span class="font-bold text-slate-800">${cursosInicial}</span></div>
                    <div class="h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-cyan-500" style="width:${totalCursos ? Math.round((cursosInicial / totalCursos) * 100) : 0}%"></div></div>
                  </div>
                  <div>
                    <div class="mb-1 flex items-center justify-between gap-3"><span class="text-slate-600">Educación Básica</span><span class="font-bold text-slate-800">${cursosBasica}</span></div>
                    <div class="h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-emerald-500" style="width:${totalCursos ? Math.round((cursosBasica / totalCursos) * 100) : 0}%"></div></div>
                  </div>
                  <div>
                    <div class="mb-1 flex items-center justify-between gap-3"><span class="text-slate-600">Bachillerato</span><span class="font-bold text-slate-800">${cursosBachillerato}</span></div>
                    <div class="h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-brand-600" style="width:${totalCursos ? Math.round((cursosBachillerato / totalCursos) * 100) : 0}%"></div></div>
                  </div>
                </div>
              </article>

              <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <h4 class="font-heading text-lg font-semibold text-slate-900">Estado de planificación</h4>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">Rotaciones técnicas</p>
                    <p class="mt-1 font-heading text-3xl font-semibold text-slate-900">${rotaciones}</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">Promedio por curso</p>
                    <p class="mt-1 font-heading text-3xl font-semibold text-slate-900">${totalCursos ? (totalAsignaciones / totalCursos).toFixed(1) : "0.0"}</p>
                  </div>
                </div>
                <div class="mt-4 rounded-2xl border border-slate-200 p-3 sm:p-4">
                  <p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">Cobertura</p>
                  <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-gradient-to-r from-brand-500 to-sky-500" style="width:${cobertura}%"></div></div>
                  <p class="mt-2 text-xs text-slate-600">Basado en la relación asignaciones/cursos.</p>
                </div>
              </article>
            </section>
          </section>
        `;
      }

      function getCursosTecnicos() {
        return app.cursos.filter((c) => c.nivel === "Bachillerato");
      }

      function normalizeDia(dia) {
        const map = {
          Lunes: "Lu",
          Martes: "Ma",
          Miércoles: "Mi",
          Miercoles: "Mi",
          Jueves: "Ju",
          Viernes: "Vi"
        };
        return map[dia] || dia;
      }

      function buildCuadroHorarioCurso(cursoId) {
        const curso = app.cursos.find((c) => Number(c.id) === Number(cursoId));
        if (!curso) return null;

        const days = ["Lu", "Ma", "Mi", "Ju", "Vi"];
        const periodos = [
          { n: 1, hora: "07:00-07:45" },
          { n: 2, hora: "07:45-08:30" },
          { n: 3, hora: "08:30-09:15" },
          { n: 4, hora: "09:15-10:00" },
          { n: 5, hora: "10:20-11:00" },
          { n: 6, hora: "11:00-11:40" },
          { n: 7, hora: "11:40-12:20" },
          { n: 8, hora: "12:20-13:00" }
        ];

        const grid = {};
        periodos.forEach((p) => {
          grid[p.n] = {};
          days.forEach((d) => {
            grid[p.n][d] = { g1: "", g2: "" };
          });
        });

        const gruposCurso = (app.grupos || []).filter((g) => Number(g.curso_id) === Number(cursoId));
        const grupo1 = gruposCurso.find((g) => g.nombre === "Grupo 1") || gruposCurso[0];
        const grupo2 = gruposCurso.find((g) => g.nombre === "Grupo 2") || gruposCurso[1];

        const setCell = (periodo, dia, grupoNombre, text) => {
          if (!grid[periodo] || !grid[periodo][dia]) return;
          const key = grupoNombre === "Grupo 2" ? "g2" : "g1";
          grid[periodo][dia][key] = text;
        };

        const planCurso = (app.rotacionesPlan || []).filter((r) => Number(r.curso_id) === Number(cursoId));
        planCurso.forEach((r) => {
          const d = normalizeDia(r.dia);
          [6, 7, 8].forEach((p) => {
            const base = `${r.materia} | ${r.docente}`;
            const txt = r.estado === "OK" ? base : `${base} (${r.estado})`;
            setCell(p, d, r.grupo, txt);
          });
        });

        const academicas = (app.asignaciones || []).filter((a) => Number(a.curso_id) === Number(cursoId) && !a.rotacion);
        const slotQueue = [];
        [5, 1, 2, 3, 4, 6, 7, 8].forEach((p) => days.forEach((d) => slotQueue.push({ p, d })));

        academicas.forEach((a) => {
          const docente = app.docentes.find((d) => Number(d.id) === Number(a.docente_id));
          const materia = app.materias.find((m) => Number(m.id) === Number(a.materia_id));
          const txt = `${materia ? materia.nombre : "Materia"} | ${docente ? docente.nombre : "Docente"}`;

          const slot = slotQueue.find((s) => {
            const c = grid[s.p][s.d];
            if (a.grupo_id) {
              const g = (app.grupos || []).find((x) => Number(x.id) === Number(a.grupo_id));
              if (!g) return false;
              return g.nombre === "Grupo 2" ? !c.g2 : !c.g1;
            }
            return !c.g1 && !c.g2;
          });

          if (!slot) return;
          if (a.grupo_id) {
            const g = (app.grupos || []).find((x) => Number(x.id) === Number(a.grupo_id));
            if (g) setCell(slot.p, slot.d, g.nombre, txt);
          } else {
            setCell(slot.p, slot.d, "Grupo 1", txt);
            setCell(slot.p, slot.d, "Grupo 2", txt);
          }
        });

        return { curso, grupo1, grupo2, periodos, days, grid };
      }

      function renderCuadroHorario(cuadro) {
        if (!cuadro) {
          return `<p class="text-sm text-slate-500">Selecciona un curso técnico para generar el cuadro horario.</p>`;
        }
        const { curso, periodos, days, grid } = cuadro;
        return `
          <h4 class="mb-3 text-center font-heading text-2xl font-semibold text-slate-900">${curso.nombre.toUpperCase()}</h4>
          <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table class="min-w-[1100px] text-xs">
              <thead class="bg-slate-100">
                <tr>
                  <th class="border border-slate-300 px-2 py-2">Hora</th>
                  ${days.map((d) => `<th class="border border-slate-300 px-2 py-2" colspan="2">${d}</th>`).join("")}
                </tr>
                <tr>
                  <th class="border border-slate-300 px-2 py-1"></th>
                  ${days.map(() => `<th class="border border-slate-300 px-2 py-1">Grupo 1</th><th class="border border-slate-300 px-2 py-1">Grupo 2</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${periodos
                  .map((p) => {
                    const row = `<tr><td class="border border-slate-300 px-2 py-2 font-semibold">${p.n}<br>${p.hora}</td>${days
                      .map((d) => `<td class="border border-slate-300 px-2 py-2 align-top">${grid[p.n][d].g1 || "-"}</td><td class="border border-slate-300 px-2 py-2 align-top">${grid[p.n][d].g2 || "-"}</td>`)
                      .join("")}</tr>`;
                    if (p.n === 4) {
                      return `${row}<tr><td class="border border-slate-300 bg-slate-50 px-2 py-2 text-center font-bold">RECREO</td><td class="border border-slate-300 bg-slate-50 px-2 py-2 text-center font-bold" colspan="10">10:00 - 10:20</td></tr>`;
                    }
                    return row;
                  })
                  .join("")}
              </tbody>
            </table>
          </div>
        `;
      }

      function gruposView() {
        const cursosTecnicos = getCursosTecnicos();
        return `
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 class="font-heading text-xl font-semibold">Grupo</h3>
            <p class="mt-1 text-sm text-slate-500">Solo aplica para carreras tecnicas (cursos de bachillerato).</p>

            <form id="grupoForm" class="mt-4 grid gap-3 md:grid-cols-4">
              <input data-field="id" type="number" required class="rounded-xl border border-slate-300 px-3 py-2" placeholder="id" />
              <select data-field="nombre" required class="rounded-xl border border-slate-300 px-3 py-2">
                <option value="">Seleccionar grupo</option>
                <option value="Grupo 1">Grupo 1</option>
                <option value="Grupo 2">Grupo 2</option>
              </select>
              <select data-field="curso_id" required class="rounded-xl border border-slate-300 px-3 py-2">
                <option value="">Seleccionar curso tecnico</option>
                ${cursosTecnicos.map((c) => `<option value="${c.id}">${c.nombre}</option>`).join("")}
              </select>
              <input data-field="estudiantes" type="number" min="1" required class="rounded-xl border border-slate-300 px-3 py-2" placeholder="estudiantes" value="20" />
              <button class="rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white">Guardar</button>
            </form>

            <div class="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table class="min-w-full text-sm">
                <thead class="bg-slate-100"><tr><th class="px-3 py-2 text-left">id</th><th class="px-3 py-2 text-left">nombre</th><th class="px-3 py-2 text-left">curso_id</th><th class="px-3 py-2 text-left">estudiantes</th><th class="px-3 py-2 text-left">Acciones</th></tr></thead>
                <tbody>
                  ${(app.grupos || [])
                    .map((g) => {
                      const curso = app.cursos.find((c) => c.id === Number(g.curso_id));
                      return `<tr class="border-t border-slate-100"><td class="px-3 py-2">${g.id}</td><td class="px-3 py-2">${g.nombre}</td><td class="px-3 py-2">${curso ? curso.nombre : g.curso_id}</td><td class="px-3 py-2">${Number(g.estudiantes) || 0}</td><td class="px-3 py-2"><button class="edit-grupo-btn rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700" data-id="${g.id}">Editar</button><button class="del-grupo-btn ml-2 rounded bg-rose-100 px-2 py-1 text-xs font-bold text-rose-700" data-id="${g.id}">Eliminar</button></td></tr>`;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>
          </section>
        `;
      }

      function asignacionesView() {
        const docentes = app.docentes || [];
        const materias = app.materias || [];
        const materiasTecnicas = materias.filter((m) => m.tipo_materia === "Técnica");
        const cursos = app.cursos || [];
        return `
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 class="font-heading text-xl font-semibold">Asignaciones</h3>
            <p class="mt-1 text-sm text-slate-500">Asigna Docente + Materia + Curso + Grupo. Puede ser Inicial, Básica o Bachillerato.</p>

            <form id="asignacionForm" class="mt-4 grid gap-3 md:grid-cols-5">
              <div id="normalDocenteWrap">
                <select data-field="docente_id" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2" id="asigDocente">
                  <option value="">Docente</option>
                  ${docentes.map((d) => `<option value="${d.id}">${d.nombre}</option>`).join("")}
                </select>
              </div>
              <select data-field="materia_id" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2" id="asigMateria">
                <option value="">Materia</option>
                ${materias.map((m) => `<option value="${m.id}">${m.nombre}</option>`).join("")}
              </select>
              <select data-field="curso_id" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2" id="asigCurso">
                <option value="">Curso</option>
                ${cursos.map((c) => `<option value="${c.id}">${c.nombre}</option>`).join("")}
              </select>
              <select data-field="grupo_id" class="w-full rounded-xl border border-slate-300 px-3 py-2" id="asigGrupo">
                <option value="">Seleccionar grupo</option>
              </select>
              <button class="rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white">Guardar</button>
            </form>

            <p id="asigHint" class="mt-2 text-xs text-slate-600">Para materias academicas: Docente + Materia + Curso (+ Grupo opcional).</p>

            <div id="rotacionFields" class="mt-3 hidden rounded-xl border border-brand-200 bg-brand-50 p-4">
              <p class="mb-3 text-sm font-semibold text-brand-700">Rotación técnica</p>
              <div class="grid gap-3 md:grid-cols-4">
                <input id="rotMateria1Label" class="rounded-xl border border-slate-300 bg-slate-100 px-3 py-2" value="Materia 1 (automatica)" readonly />
                <input id="rotMateria1" type="hidden" />
                <select id="rotDocente1" class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                  <option value="">Docente 1</option>
                  ${docentes.map((d) => `<option value="${d.id}">${d.nombre}</option>`).join("")}
                </select>
                <select id="rotMateria2" class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                  <option value="">Materia 2</option>
                  ${materiasTecnicas.map((m) => `<option value="${m.id}">${m.nombre}</option>`).join("")}
                </select>
                <select id="rotDocente2" class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                  <option value="">Docente 2</option>
                  ${docentes.map((d) => `<option value="${d.id}">${d.nombre}</option>`).join("")}
                </select>
              </div>
              <p class="mt-2 text-xs text-slate-600">Materia 1 se toma de la materia seleccionada. Grupo 1 recibe Materia 1 y Grupo 2 Materia 2; luego se intercambian.</p>
            </div>

            <div class="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table class="min-w-full text-sm">
                <thead class="bg-slate-100"><tr><th class="px-3 py-2 text-left">Docente</th><th class="px-3 py-2 text-left">Materia</th><th class="px-3 py-2 text-left">Curso</th><th class="px-3 py-2 text-left">Grupo</th><th class="px-3 py-2 text-left">Detalle</th><th class="px-3 py-2 text-left">Acciones</th></tr></thead>
                <tbody>
                  ${(app.asignaciones || [])
                    .map((a) => {
                      const docente = app.docentes.find((d) => d.id === Number(a.docente_id));
                      const materia = app.materias.find((m) => m.id === Number(a.materia_id));
                      const curso = app.cursos.find((c) => c.id === Number(a.curso_id));
                      const grupo = (app.grupos || []).find((g) => g.id === Number(a.grupo_id));
                      const rot = a.rotacion;
                      const rotDoc1 = rot ? app.docentes.find((d) => d.id === Number(rot.docente1_id)) : null;
                      const rotDoc2 = rot ? app.docentes.find((d) => d.id === Number(rot.docente2_id)) : null;
                      const rotMat1 = rot ? app.materias.find((m) => m.id === Number(rot.materia1_id)) : null;
                      const rotMat2 = rot ? app.materias.find((m) => m.id === Number(rot.materia2_id)) : null;
                      const docenteText = rot ? `${rotDoc1 ? rotDoc1.nombre : "-"} / ${rotDoc2 ? rotDoc2.nombre : "-"}` : (docente ? docente.nombre : "-");
                      const materiaText = rot ? `${rotMat1 ? rotMat1.nombre : "-"} / ${rotMat2 ? rotMat2.nombre : "-"}` : (materia ? materia.nombre : "-");
                      const detalle = rot ? "Rotación técnica" : "Asignación normal";
                      return `<tr class="border-t border-slate-100"><td class="px-3 py-2">${docenteText}</td><td class="px-3 py-2">${materiaText}</td><td class="px-3 py-2">${curso ? curso.nombre : "-"}</td><td class="px-3 py-2">${grupo ? grupo.nombre : "-"}</td><td class="px-3 py-2">${detalle}</td><td class="px-3 py-2"><button class="edit-asig-btn rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700" data-id="${a.id}">Editar</button><button class="del-asig-btn ml-2 rounded bg-rose-100 px-2 py-1 text-xs font-bold text-rose-700" data-id="${a.id}">Eliminar</button></td></tr>`;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>


          </section>
        `;
      }

      function horariosView() {
        return `
          <section class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 class="font-heading text-xl font-semibold">Asistente de horarios</h3>
                <p class="text-sm font-semibold text-brand-700">Paso ${app.step} de 5</p>
              </div>
              <button id="quickGenerate" class="w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700 sm:w-auto sm:px-5 sm:py-3">Generar horarios automaticamente</button>
            </div>
            <div class="grid gap-3 md:grid-cols-5">
              ${wizardSteps
                .map((s, i) => {
                  const n = i + 1;
                  const active = app.step === n ? "bg-brand-100 border-brand-300 text-brand-800" : "bg-white border-slate-200 text-slate-600";
                  return `<button class="step-btn rounded-xl border p-3 text-left ${active}" data-step="${n}"><p class="text-xs font-bold">Paso ${n}</p><p class="font-semibold">${s}</p></button>`;
                })
                .join("")}
            </div>

            <div class="mt-4 rounded-xl border border-slate-200 p-4" id="wizardBody">${wizardBody()}</div>
          </section>
        `;
      }

      function wizardBody() {
        if (app.step < 4) {
          return `<p class="text-sm text-slate-600">${wizardSteps[app.step - 1]} configurado. Continua al siguiente paso.</p>${navButtons()}`;
        }

        if (app.step === 4) {
          return `
            <div>
              <div class="h-4 overflow-hidden rounded-full bg-slate-200"><div id="progress" class="h-full w-0 bg-gradient-to-r from-brand-500 to-brand-700"></div></div>
              <p id="progressText" class="mt-2 text-sm text-slate-600">Listo para simular...</p>
              <ul id="timeline" class="mt-3 space-y-1 text-sm"></ul>
            </div>
            ${navButtons()}
          `;
        }

        const generated = generateSchedulesForCourses();
        const selectedId = Number(app.selectedHorarioCursoId || (generated[0] ? generated[0].cursoId : 0));
        const selected = generated.find((x) => Number(x.cursoId) === selectedId) || generated[0];

        return `
          <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 class="font-heading text-lg font-semibold">Horarios generados por curso</h4>
              <p class="text-xs text-slate-600">Se generan todos los horarios posibles e incluyen rotaciones técnicas de Asignaciones.</p>
            </div>
            <button id="regen" class="w-full rounded-lg bg-brand-600 px-3 py-2 text-sm font-bold text-white sm:w-auto">Regenerar todos los horarios</button>
          </div>

          <div class="mb-3 flex flex-wrap items-center gap-3">
            <p class="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">Total: ${generated.length} horarios</p>
            <select id="horarioCursoSelect" class="searchable-select w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:w-[28rem]">
              ${generated.map((g) => `<option value="${g.cursoId}" ${selected && Number(g.cursoId) === Number(selected.cursoId) ? "selected" : ""}>${g.cursoNombre}</option>`).join("")}
            </select>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-200">
            ${renderSelectedSchedule(selected)}
          </div>
          ${navButtons()}
        `;
      }

      function navButtons() {
        return `
          <div class="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button id="prevStep" class="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold ${app.step === 1 ? "invisible" : ""}">Anterior</button>
            <button id="nextStep" class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white ${app.step === 5 ? "hidden" : ""}">Siguiente</button>
          </div>
        `;
      }

      function parseGroupedCell(value) {
        const txt = String(value || "-");
        const g1Match = txt.match(/G1:\s*([^|]+)/i);
        const g2Match = txt.match(/G2:\s*([^|]+)/i);
        if (g1Match || g2Match) {
          return {
            g1: g1Match ? g1Match[1].trim() : "-",
            g2: g2Match ? g2Match[1].trim() : "-"
          };
        }
        return { g1: txt, g2: txt };
      }

      function escapeHtml(value) {
        return String(value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;");
      }

      function formatScheduleCell(value) {
        const raw = String(value || "-").trim();
        if (!raw || raw === "-") return "-";

        const entries = raw.split(" | ").map((x) => x.trim()).filter(Boolean);
        const html = entries
          .map((entry) => {
            const m = entry.match(/^(.*)\s\((.*)\)$/);
            if (!m) return `<span class="block">${escapeHtml(entry)}</span>`;
            const materia = escapeHtml(m[1]);
            const docente = escapeHtml(m[2]);
            return `<span class="block font-semibold text-slate-800 leading-tight">${materia}</span><span class="block text-[10px] text-slate-500 leading-tight">${docente}</span>`;
          })
          .join('<span class="block h-0.5"></span>');

        return html;
      }

      function renderScheduleMobileCards(selected, isTecnico) {
        const dayMap = {
          Lu: "Lunes",
          Ma: "Martes",
          Mi: "Miercoles",
          Ju: "Jueves",
          Vi: "Viernes"
        };
        const dias = ["Lu", "Ma", "Mi", "Ju", "Vi"];

        return `
          <div class="space-y-2 md:hidden">
            ${selected.rows
              .map((row, idx) => {
                const recreo = idx === 4
                  ? `<div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-[11px] font-bold">RECREO 10:00 - 10:20</div>`
                  : "";

                const daysHtml = dias
                  .map((d) => {
                    const raw = String(row[d] || "-");
                    const hasGroups = isTecnico && /G1:|G2:/i.test(raw);
                    if (hasGroups) {
                      const parsed = parseGroupedCell(raw);
                      return `
                        <div class="rounded-md border border-slate-200 bg-white p-2">
                          <p class="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">${dayMap[d]}</p>
                          <div class="grid grid-cols-2 gap-1">
                            <div class="rounded border border-slate-100 p-1"><p class="text-[10px] font-semibold text-slate-600">G1</p>${formatScheduleCell(parsed.g1 || "-")}</div>
                            <div class="rounded border border-slate-100 p-1"><p class="text-[10px] font-semibold text-slate-600">G2</p>${formatScheduleCell(parsed.g2 || "-")}</div>
                          </div>
                        </div>
                      `;
                    }

                    return `
                      <div class="rounded-md border border-slate-200 bg-white p-2">
                        <p class="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">${dayMap[d]}</p>
                        ${formatScheduleCell(raw)}
                      </div>
                    `;
                  })
                  .join("");

                return `
                  ${recreo}
                  <article class="rounded-lg border border-slate-200 bg-slate-50 p-2">
                    <p class="mb-2 text-[11px] font-bold text-slate-700">Hora: ${row.hora}</p>
                    <div class="grid grid-cols-1 gap-2">${daysHtml}</div>
                  </article>
                `;
              })
              .join("")}
          </div>
        `;
      }

      function renderSelectedSchedule(selected) {
        if (!selected) {
          return `<table class="min-w-full text-sm"><tbody><tr><td class="px-3 py-3 text-slate-500" colspan="6">No hay horarios generados todavía.</td></tr></tbody></table>`;
        }

        const isTecnico = selected.cursoNivel === "Bachillerato";
        if (!isTecnico) {
          const mobileCards = renderScheduleMobileCards(selected, false);
          return `
            ${mobileCards}
            <table class="hidden w-full table-fixed text-xs md:table">
              <thead class="bg-slate-100"><tr><th class="w-16 px-1.5 py-1.5 whitespace-nowrap">Hora</th><th class="px-1.5 py-1.5">Lunes</th><th class="px-1.5 py-1.5">Martes</th><th class="px-1.5 py-1.5">Miercoles</th><th class="px-1.5 py-1.5">Jueves</th><th class="px-1.5 py-1.5">Viernes</th></tr></thead>
              <tbody>
                ${selected.rows
                  .map((row, idx) => {
                    const recreo = idx === 4 ? `<tr class="border-t border-slate-100 bg-slate-50"><td class="px-1.5 py-1.5 text-center text-[10px] font-bold">RECREO</td><td class="px-1.5 py-1.5 text-center text-[10px] font-bold" colspan="5">10:00 - 10:20</td></tr>` : "";
                    return `${recreo}<tr class="border-t border-slate-100"><td class="px-1.5 py-1.5 text-[10px] font-semibold whitespace-nowrap">${row.hora}</td><td class="px-1.5 py-1.5 align-top leading-tight whitespace-normal break-all">${formatScheduleCell(row.Lu)}</td><td class="px-1.5 py-1.5 align-top leading-tight whitespace-normal break-all">${formatScheduleCell(row.Ma)}</td><td class="px-1.5 py-1.5 align-top leading-tight whitespace-normal break-all">${formatScheduleCell(row.Mi)}</td><td class="px-1.5 py-1.5 align-top leading-tight whitespace-normal break-all">${formatScheduleCell(row.Ju)}</td><td class="px-1.5 py-1.5 align-top leading-tight whitespace-normal break-all">${formatScheduleCell(row.Vi)}</td></tr>`;
                  })
                  .join("")}
              </tbody>
            </table>
          `;
        }

        const dias = ["Lu", "Ma", "Mi", "Ju", "Vi"];
        const mobileCards = renderScheduleMobileCards(selected, true);
        return `
          ${mobileCards}
          <table class="hidden w-full table-fixed text-[10px] md:table">
            <thead class="bg-slate-100">
              <tr>
                <th class="w-16 px-1 py-1 whitespace-nowrap" rowspan="2">Hora</th>
                ${dias.map((d) => `<th class="px-1 py-1" colspan="2">${d}</th>`).join("")}
              </tr>
              <tr>
                ${dias.map(() => `<th class="px-1 py-1 text-[10px]">G1</th><th class="px-1 py-1 text-[10px]">G2</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${selected.rows
                .map((row, idx) => {
                  const recreo = idx === 4
                    ? `<tr class="border-t border-slate-100 bg-slate-50"><td class="px-1 py-1 text-center text-[10px] font-bold">RECREO</td><td class="px-1 py-1 text-center text-[10px] font-bold" colspan="10">10:00 - 10:20</td></tr>`
                    : "";
                  const cells = dias
                    .map((d) => {
                      const raw = String(row[d] || "-");
                      const hasGroups = /G1:|G2:/i.test(raw);
                      if (hasGroups) {
                        const parsed = parseGroupedCell(raw);
                        return `<td class="px-1 py-1 align-top border-l border-slate-100 leading-tight whitespace-normal break-all">${formatScheduleCell(parsed.g1 || "-")}</td><td class="px-1 py-1 align-top border-l border-slate-100 leading-tight whitespace-normal break-all">${formatScheduleCell(parsed.g2 || "-")}</td>`;
                      }
                      return `<td class="px-1 py-1 align-top border-l border-slate-100 text-center leading-tight whitespace-normal break-all" colspan="2">${formatScheduleCell(raw || "-")}</td>`;
                    })
                    .join("");
                  return `${recreo}<tr class="border-t border-slate-100"><td class="px-1 py-1 text-[10px] font-semibold whitespace-nowrap">${row.hora}</td>${cells}</tr>`;
                })
                .join("")}
            </tbody>
          </table>
        `;
      }

      function buildCourseScheduleRows(curso) {
        const dias = ["Lu", "Ma", "Mi", "Ju", "Vi"];
        const horas = ["07:00-07:45", "07:45-08:30", "08:30-09:15", "09:15-10:00", "10:20-11:00", "11:00-11:40", "11:40-12:20", "12:20-13:00"];
        const rows = horas.map((hora) => ({ hora, Lu: "-", Ma: "-", Mi: "-", Ju: "-", Vi: "-" }));

        const setCell = (periodo, dia, value) => {
          const idx = periodo - 1;
          if (!rows[idx] || !dias.includes(dia)) return;
          rows[idx][dia] = rows[idx][dia] === "-" ? value : `${rows[idx][dia]} | ${value}`;
        };

        const asignacionesCurso = (app.asignaciones || []).filter((a) => Number(a.curso_id) === Number(curso.id));

        const pickDocente = (materia, seed) => {
          const docentes = app.docentes || [];
          if (!docentes.length) return { nombre: "Docente" };
          const key = String(materia?.nombre || "").toLowerCase();
          const byEspecialidad = docentes.find((d) => key.includes(String(d.especialidad || "").toLowerCase().split(" ")[0]));
          if (byEspecialidad) return byEspecialidad;
          return docentes[(seed + curso.id) % docentes.length];
        };

        const makeLabel = (materia, docente) => `${materia ? materia.nombre : "Materia"} (${docente ? docente.nombre : "Docente"})`;

        const materiasBase = (app.materias || []).filter((m) => {
          if (curso.nivel === "Educación Inicial") return m.nivel === "Educación Inicial";
          if (curso.nivel === "Educación Básica") return m.nivel === "Educación Básica";
          if (curso.nivel === "Bachillerato") return m.nivel === "Bachillerato" || m.nivel.startsWith("Bachillerato -");
          return false;
        });

        const especialidad = (String(curso.nombre).match(/Mecánica automotriz|Instalaciones|Equipos y máquinas eléctricas|Ciencias|Electrónica de consumo|Mecánica industrial/i) || [""])[0];
        const materiasTecnicasCurso = materiasBase.filter((m) => m.tipo_materia === "Técnica" && (!especialidad || m.nivel.includes(especialidad)));
        const materiasAcademicasCurso = materiasBase.filter((m) => m.tipo_materia !== "Técnica");

        const putSplit = (periodo, dia, g1, g2) => {
          setCell(periodo, dia, `G1: ${g1} | G2: ${g2}`);
        };

        // Plantilla técnica similar al formato institucional compartido
        if (curso.nivel === "Bachillerato") {
          const rotaciones = asignacionesCurso.filter((a) => a.rotacion);
          const pares = rotaciones
            .map((a) => {
              const m1 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia1_id));
              const m2 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia2_id));
              const d1 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente1_id));
              const d2 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente2_id));
              if (!m1 || !m2 || !d1 || !d2) return null;
              return {
                a: makeLabel(m1, d1),
                b: makeLabel(m2, d2),
                aSwap: makeLabel(m2, d2),
                bSwap: makeLabel(m1, d1)
              };
            })
            .filter(Boolean);

          const fallbackA = materiasTecnicasCurso[0] || materiasBase[0] || { nombre: "Taller Técnico" };
          const fallbackB = materiasTecnicasCurso[1] || materiasBase[1] || fallbackA;
          const fallbackPair = {
            a: makeLabel(fallbackA, pickDocente(fallbackA, 10)),
            b: makeLabel(fallbackB, pickDocente(fallbackB, 20)),
            aSwap: makeLabel(fallbackB, pickDocente(fallbackB, 20)),
            bSwap: makeLabel(fallbackA, pickDocente(fallbackA, 10))
          };

          const pair1 = pares[0] || fallbackPair;
          const pair2 = pares[1] || fallbackPair;

          const noRot = asignacionesCurso.filter((a) => !a.rotacion);
          const academicasAsignadas = noRot.map((a) => {
            const m = app.materias.find((x) => Number(x.id) === Number(a.materia_id));
            const d = app.docentes.find((x) => Number(x.id) === Number(a.docente_id));
            return makeLabel(m, d);
          });
          const commons = academicasAsignadas.length
            ? academicasAsignadas
            : materiasAcademicasCurso.slice(0, 10).map((m, i) => makeLabel(m, pickDocente(m, i + 30)));
          const c = (i) => commons[i % Math.max(1, commons.length)] || "Materia Académica";

          // Mañana: énfasis técnico + rotación por grupos
          [1, 2, 3].forEach((p) => putSplit(p, "Lu", pair1.a, pair1.b));
          setCell(4, "Lu", c(0));

          [1, 2, 3, 4].forEach((p) => putSplit(p, "Ma", pair1.b, pair1.a));

          setCell(1, "Mi", c(1));
          [2, 3, 4].forEach((p) => putSplit(p, "Mi", pair2.aSwap, pair2.bSwap));

          [1, 2, 3, 4].forEach((p) => putSplit(p, "Ju", pair1.a, pair1.b));

          [1, 2, 3].forEach((p) => putSplit(p, "Vi", pair2.a, pair2.b));
          setCell(4, "Vi", c(2));

          // Después de recreo: mayormente bloque académico común
          [5, 6].forEach((p) => putSplit(p, "Lu", pair2.a, pair1.b));
          setCell(7, "Lu", c(3));
          setCell(8, "Lu", c(3));

          [5, 6].forEach((p) => setCell(p, "Ma", c(4)));
          [7, 8].forEach((p) => setCell(p, "Ma", c(5)));

          [5, 6].forEach((p) => setCell(p, "Mi", c(6)));
          [7, 8].forEach((p) => setCell(p, "Mi", c(7)));

          [5, 6].forEach((p) => setCell(p, "Ju", c(8)));
          [7, 8].forEach((p) => setCell(p, "Ju", c(9)));

          [5, 6].forEach((p) => setCell(p, "Vi", c(10)));
          [7, 8].forEach((p) => setCell(p, "Vi", c(11)));

          return rows;
        }

        // 1) Relleno base para cursos no técnicos
        const pool = [...materiasAcademicasCurso, ...materiasTecnicasCurso, ...materiasAcademicasCurso];

        let idx = 0;
        for (let p = 1; p <= 8; p += 1) {
          for (const d of dias) {
            const materia = pool[idx % Math.max(1, pool.length)] || { nombre: "Materia" };
            const docente = pickDocente(materia, idx);
            rows[p - 1][d] = `${materia.nombre} (${docente.nombre})`;
            idx += 1;
          }
        }

        // 2) Aplicar rotaciones técnicas creadas en Asignaciones (sobrescriben base)
        asignacionesCurso.filter((a) => a.rotacion).forEach((a) => {
          const m1 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia1_id));
          const m2 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia2_id));
          const d1 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente1_id));
          const d2 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente2_id));

          const lunes = `G1: ${m1 ? m1.nombre : "-"} (${d1 ? d1.nombre : "-"}) | G2: ${m2 ? m2.nombre : "-"} (${d2 ? d2.nombre : "-"})`;
          const miercoles = `G1: ${m2 ? m2.nombre : "-"} (${d2 ? d2.nombre : "-"}) | G2: ${m1 ? m1.nombre : "-"} (${d1 ? d1.nombre : "-"})`;

          [6, 7, 8].forEach((p) => {
            setCell(p, "Lu", lunes);
            setCell(p, "Mi", miercoles);
          });
        });

        // 3) Aplicar asignaciones normales (sobrescriben base)
        const noRot = asignacionesCurso.filter((a) => !a.rotacion);
        const order = [];
        for (let p = 1; p <= 8; p += 1) {
          dias.forEach((d) => order.push({ p, d }));
        }

        noRot.forEach((a) => {
          const materia = app.materias.find((m) => Number(m.id) === Number(a.materia_id));
          const docente = app.docentes.find((d) => Number(d.id) === Number(a.docente_id));
          const grupo = a.grupo_id ? (app.grupos || []).find((g) => Number(g.id) === Number(a.grupo_id)) : null;
          const labelGrupo = grupo ? `${grupo.nombre}: ` : "";
          const txt = `${labelGrupo}${materia ? materia.nombre : "Materia"} (${docente ? docente.nombre : "Docente"})`;

          const slot = order.find((s) => rows[s.p - 1][s.d] && !rows[s.p - 1][s.d].includes("G1:") && !rows[s.p - 1][s.d].includes("G2:"));
          if (!slot) return;
          rows[slot.p - 1][slot.d] = txt;
        });

        return rows;
      }

      function generateSchedulesForCourses() {
        const cursos = app.cursos || [];
        return cursos.map((curso) => ({
          cursoId: curso.id,
          cursoNombre: curso.nombre,
          cursoNivel: curso.nivel,
          rows: buildCourseScheduleRows(curso)
        }));
      }

      function crudView(key, fields) {
        const list = app[key];
        return `
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 class="font-heading text-xl font-semibold capitalize">${key}</h3>

            <form id="crudForm" class="mt-4 grid gap-3 md:grid-cols-4">
              ${fields.map((f) => {
                if (f === "nivel") {
                  return `<select data-field="${f}" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="">Seleccionar nivel</option>
                    ${NIVELES.map((n) => `<option value="${n.label}">${n.label}</option>`).join("")}
                  </select>`;
                }
                if (f === "jornada") {
                  return `<select data-field="${f}" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="">Seleccionar jornada</option>
                    ${JORNADAS.map((j) => `<option value="${j.label}">${j.label}</option>`).join("")}
                  </select>`;
                }
                if (f === "bloque") {
                  return `<select data-field="${f}" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="">Seleccionar bloque</option>
                    ${BLOQUES.map((b) => `<option value="${b.label}">${b.label}</option>`).join("")}
                  </select>`;
                }
                if (f === "tipo") {
                  return `<select data-field="${f}" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="">Seleccionar tipo</option>
                    ${TIPOS.map((t) => `<option value="${t.label}">${t.label}</option>`).join("")}
                  </select>`;
                }
                if (f === "tipo_materia") {
                  return `<select data-field="${f}" required class="searchable-select w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="">Seleccionar tipo de materia</option>
                    ${TIPOS_MATERIA.map((t) => `<option value="${t.label}">${t.label}</option>`).join("")}
                  </select>`;
                }
                return `<input data-field="${f}" required class="rounded-xl border border-slate-300 px-3 py-2" placeholder="${f}" />`;
              }).join("")}
              <button class="rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white">Guardar</button>
            </form>

            <div class="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table class="min-w-full text-sm">
                <thead class="bg-slate-100"><tr>${fields.map((f) => `<th class="px-3 py-2 text-left">${f}</th>`).join("")}<th class="px-3 py-2 text-left">Acciones</th></tr></thead>
                <tbody>
                  ${list
                    .map(
                      (item) => `<tr class="border-t border-slate-100">
                        ${fields.map((f) => `<td class="px-3 py-2">${item[f]}</td>`).join("")}
                        <td class="px-3 py-2">
                          <button class="edit-btn rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700" data-id="${item.id}">Editar</button>
                          <button class="del-btn ml-2 rounded bg-rose-100 px-2 py-1 text-xs font-bold text-rose-700" data-id="${item.id}">Eliminar</button>
                        </td>
                      </tr>`
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </section>
        `;
      }

      function bindCommon() {
        document.querySelectorAll(".menu-btn[data-view]").forEach((btn) => {
          btn.addEventListener("click", () => {
            setView(btn.dataset.view);
            closeMobileMenu();
          });
        });

        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        if (mobileMenuToggle) {
          mobileMenuToggle.addEventListener("click", toggleMobileMenu);
        }

        const mobileBackdrop = document.getElementById("mobileAdminBackdrop");
        if (mobileBackdrop) {
          mobileBackdrop.addEventListener("click", closeMobileMenu);
        }

        document.querySelectorAll(".logout-menu-btn").forEach((logoutBtn) => {
          logoutBtn.addEventListener("click", () => {
            clearAuth();
            window.location.href = "inicio.html?login=1";
          });
        });

        const quickGenerate = document.getElementById("quickGenerate");
        if (quickGenerate) {
          quickGenerate.addEventListener("click", () => {
            setView("horarios");
            app.step = 1;
            save();
            autoplay();
          });
        }
      }

      function bindHorarios() {
        document.querySelectorAll(".step-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            app.step = Number(btn.dataset.step);
            save();
            render();
          });
        });

        const prev = document.getElementById("prevStep");
        const next = document.getElementById("nextStep");
        if (prev) prev.addEventListener("click", () => { app.step = Math.max(1, app.step - 1); save(); render(); });
        if (next) next.addEventListener("click", () => { app.step = Math.min(5, app.step + 1); save(); render(); });

        if (app.step === 4) runSim();

        const regen = document.getElementById("regen");
        if (regen) {
          regen.addEventListener("click", () => {
            const regenerated = generateSchedulesForCourses();
            app.selectedHorarioCursoId = regenerated[0] ? regenerated[0].cursoId : null;
            save();
            render();
          });
        }

        const horarioCursoSelect = document.getElementById("horarioCursoSelect");
        if (horarioCursoSelect) {
          horarioCursoSelect.addEventListener("change", () => {
            app.selectedHorarioCursoId = Number(horarioCursoSelect.value) || null;
            save();
            render();
          });
        }
      }

      function autoplay() {
        [2, 3, 4].forEach((s, i) => {
          setTimeout(() => {
            if (app.view !== "horarios") return;
            app.step = s;
            save();
            render();
          }, (i + 1) * 500);
        });
      }

      function toggleMobileMenu() {
        adminMenuOpen = !adminMenuOpen;
        const mobileMenu = document.getElementById("mobileAdminMenu");
        const mobileBackdrop = document.getElementById("mobileAdminBackdrop");
        if (mobileMenu) {
          mobileMenu.classList.toggle("open", adminMenuOpen);
        }
        if (mobileBackdrop) {
          mobileBackdrop.classList.toggle("open", adminMenuOpen);
        }
      }

      function closeMobileMenu() {
        adminMenuOpen = false;
        const mobileMenu = document.getElementById("mobileAdminMenu");
        const mobileBackdrop = document.getElementById("mobileAdminBackdrop");
        if (mobileMenu) {
          mobileMenu.classList.remove("open");
        }
        if (mobileBackdrop) {
          mobileBackdrop.classList.remove("open");
        }
      }

      function runSim() {
        const progress = document.getElementById("progress");
        const progressText = document.getElementById("progressText");
        const lines = document.getElementById("timeline");
        if (!progress || !progressText || !lines) return;

        clearInterval(timer);
        progress.style.width = "0%";
        lines.innerHTML = "";

        let p = 0;
        let i = 0;
        timer = setInterval(() => {
          p = Math.min(100, p + 10);
          progress.style.width = `${p}%`;
          if (i < timeline.length && p >= (i + 1) * 18) {
            progressText.textContent = timeline[i];
            lines.innerHTML += `<li class="${i === timeline.length - 1 ? "font-bold text-emerald-700" : ""}">- ${timeline[i]}</li>`;
            i += 1;
          }
          if (p >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              const generated = generateSchedulesForCourses();
              app.selectedHorarioCursoId = generated[0] ? generated[0].cursoId : null;
              app.step = 5;
              save();
              render();
            }, 500);
          }
        }, 220);
      }

      function bindCrud(key) {
        const form = document.getElementById("crudForm");
        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const fields = [...form.querySelectorAll("[data-field]")];
            const data = { id: Date.now() };
            fields.forEach((f) => {
              data[f.dataset.field] = f.value.trim();
            });
            app[key].unshift(data);
            save();
            render();
          });
        }

        document.querySelectorAll(".del-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            app[key] = app[key].filter((x) => x.id !== id);
            save();
            render();
          });
        });

        document.querySelectorAll(".edit-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const item = app[key].find((x) => x.id === id);
            if (!item) return;
            const keys = Object.keys(item).filter((k) => k !== "id");
            keys.forEach((k) => {
              const value = prompt(`Editar ${k}`, item[k]);
              if (value !== null) item[k] = value.trim();
            });
            save();
            render();
          });
        });
      }

      function bindGrupos() {
        const form = document.getElementById("grupoForm");
        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const idInput = form.querySelector('[data-field="id"]');
            const nombreInput = form.querySelector('[data-field="nombre"]');
            const cursoInput = form.querySelector('[data-field="curso_id"]');
            const estudiantesInput = form.querySelector('[data-field="estudiantes"]');

            const id = Number(idInput.value);
            const nombre = nombreInput.value;
            const curso_id = Number(cursoInput.value);
            const estudiantes = Number(estudiantesInput.value);
            if (!id || !nombre || !curso_id || !estudiantes) return;

            const curso = app.cursos.find((c) => c.id === curso_id);
            if (!curso || curso.nivel !== "Bachillerato") {
              alert("Solo puedes crear grupos para cursos tecnicos de bachillerato.");
              return;
            }

            const exists = (app.grupos || []).some((g) => Number(g.id) === id);
            if (exists) {
              alert("El id de grupo ya existe.");
              return;
            }

            app.grupos = app.grupos || [];
            app.grupos.unshift({ id, nombre, curso_id, estudiantes });
            save();
            render();
          });
        }

        document.querySelectorAll(".del-grupo-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            app.grupos = (app.grupos || []).filter((g) => Number(g.id) !== id);
            app.asignaciones = (app.asignaciones || []).map((a) => (Number(a.grupo_id) === id ? { ...a, grupo_id: null } : a));
            save();
            render();
          });
        });

        document.querySelectorAll(".edit-grupo-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const grupo = (app.grupos || []).find((g) => Number(g.id) === id);
            if (!grupo) return;

            const nuevoNombre = prompt("Editar nombre (Grupo 1 o Grupo 2)", grupo.nombre);
            if (nuevoNombre === null) return;
            const nuevoCursoId = prompt("Editar curso_id (solo bachillerato)", String(grupo.curso_id));
            if (nuevoCursoId === null) return;
            const nuevoEstudiantes = prompt("Editar estudiantes", String(grupo.estudiantes || 20));
            if (nuevoEstudiantes === null) return;

            const curso = app.cursos.find((c) => c.id === Number(nuevoCursoId));
            if (!curso || curso.nivel !== "Bachillerato") {
              alert("curso_id invalido para grupos.");
              return;
            }

            grupo.nombre = nuevoNombre.trim() || grupo.nombre;
            grupo.curso_id = Number(nuevoCursoId);
            grupo.estudiantes = Number(nuevoEstudiantes) || 20;
            save();
            render();
          });
        });
      }

      function buildRotacionesPlan() {
        const horarios = [];
        const labs = (app.espacios || [])
          .filter((e) => e.tipo === "Laboratorio")
          .sort((a, b) => Number(a.capacidad) - Number(b.capacidad));
        const usedLabsBySlot = {};
        const usedDocBySlot = {};

        const reservarLaboratorio = (slot, estudiantes) => {
          const usados = usedLabsBySlot[slot] || new Set();
          const elegido = labs.find((lab) => !usados.has(lab.id) && Number(lab.capacidad) >= Number(estudiantes));
          if (!elegido) return null;
          usados.add(elegido.id);
          usedLabsBySlot[slot] = usados;
          return elegido;
        };

        const reservarDocente = (slot, docenteId) => {
          const usados = usedDocBySlot[slot] || new Set();
          if (usados.has(docenteId)) return false;
          usados.add(docenteId);
          usedDocBySlot[slot] = usados;
          return true;
        };

        (app.asignaciones || [])
          .filter((a) => a.rotacion)
          .forEach((a) => {
            const curso = app.cursos.find((c) => Number(c.id) === Number(a.curso_id));
            const grupos = (app.grupos || []).filter((g) => Number(g.curso_id) === Number(a.curso_id));
            const grupo1 = grupos.find((g) => g.nombre === "Grupo 1") || grupos[0];
            const grupo2 = grupos.find((g) => g.nombre === "Grupo 2") || grupos[1];

            if (!curso || !grupo1 || !grupo2) return;

            const d1 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente1_id));
            const d2 = app.docentes.find((d) => Number(d.id) === Number(a.rotacion.docente2_id));
            const m1 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia1_id));
            const m2 = app.materias.find((m) => Number(m.id) === Number(a.rotacion.materia2_id));

            const sesiones = [
              { dia: "Lunes", hora: "11:00-13:00", grupo: grupo1, materia: m1, docente: d1 },
              { dia: "Lunes", hora: "11:00-13:00", grupo: grupo2, materia: m2, docente: d2 },
              { dia: "Miércoles", hora: "11:00-13:00", grupo: grupo1, materia: m2, docente: d2 },
              { dia: "Miércoles", hora: "11:00-13:00", grupo: grupo2, materia: m1, docente: d1 }
            ];

            sesiones.forEach((s) => {
              const slot = `${s.dia}|${s.hora}`;
              const estudiantes = Number(s.grupo.estudiantes) || 20;
              const docenteOk = s.docente ? reservarDocente(slot, s.docente.id) : false;
              const lab = docenteOk ? reservarLaboratorio(slot, estudiantes) : null;

              let estado = "OK";
              if (!docenteOk) estado = "Conflicto docente";
              else if (!lab) estado = "Sin laboratorio/capacidad";

              horarios.push({
                curso_id: curso.id,
                curso: curso.nombre,
                grupo_id: s.grupo.id,
                grupo: s.grupo.nombre,
                dia: s.dia,
                hora: s.hora,
                materia_id: s.materia ? s.materia.id : null,
                materia: s.materia ? s.materia.nombre : "-",
                docente_id: s.docente ? s.docente.id : null,
                docente: s.docente ? s.docente.nombre : "-",
                laboratorio_id: lab ? lab.id : null,
                laboratorio: lab ? lab.nombre : "-",
                capacidad: lab ? lab.capacidad : "-",
                estudiantes,
                estado
              });
            });
          });

        return horarios;
      }

      function bindAsignaciones() {
        const form = document.getElementById("asignacionForm");
        const cursoSelect = document.getElementById("asigCurso");
        const grupoSelect = document.getElementById("asigGrupo");
        const normalDocenteWrap = document.getElementById("normalDocenteWrap");
        const asigHint = document.getElementById("asigHint");
        const docenteSelect = document.getElementById("asigDocente");
        const materiaSelect = form ? form.querySelector('[data-field="materia_id"]') : null;
        const rotacionFields = document.getElementById("rotacionFields");
        const rotMateria1 = document.getElementById("rotMateria1");
        const rotMateria1Label = document.getElementById("rotMateria1Label");
        const rotDocente1 = document.getElementById("rotDocente1");
        const rotMateria2 = document.getElementById("rotMateria2");
        const rotDocente2 = document.getElementById("rotDocente2");

        const isMateriaTecnica = (materiaIdRaw) => {
          const materiaId = Number(materiaIdRaw);
          const materia = (app.materias || []).find((m) => Number(m.id) === materiaId);
          return materia ? materia.tipo_materia === "Técnica" : false;
        };

        const toggleRotacion = () => {
          if (!rotacionFields || !materiaSelect) return;
          const tecnica = isMateriaTecnica(materiaSelect.value);
          rotacionFields.classList.toggle("hidden", !tecnica);

          if (normalDocenteWrap && docenteSelect) {
            normalDocenteWrap.classList.remove("hidden");
            docenteSelect.required = !tecnica;
          }

          if (asigHint) {
            asigHint.textContent = tecnica
              ? "Materia tecnica detectada: Materia 1 se toma automaticamente y el docente base se copia a Docente 1."
              : "Para materias academicas: Docente + Materia + Curso (+ Grupo opcional).";
          }

          if (tecnica && rotMateria1) {
            rotMateria1.value = materiaSelect.value || "";
            if (rotMateria1Label) {
              const txt = materiaSelect.options[materiaSelect.selectedIndex]?.text || "";
              rotMateria1Label.value = txt ? `Materia 1: ${txt}` : "Materia 1 (automatica)";
            }
            if (rotDocente1 && !rotDocente1.value && docenteSelect && docenteSelect.value) {
              rotDocente1.value = docenteSelect.value;
            }
          } else if (rotMateria1Label) {
            rotMateria1Label.value = "Materia 1 (automatica)";
          }

          [rotMateria1, rotDocente1, rotMateria2, rotDocente2].forEach((el) => {
            if (!el) return;
            el.required = tecnica && el !== rotMateria1;
            if (!tecnica) el.value = "";
          });
        };

        const fillGrupoOptions = (cursoIdRaw) => {
          if (!grupoSelect) return;
          const cursoId = Number(cursoIdRaw);
          const gruposCurso = (app.grupos || []).filter((g) => Number(g.curso_id) === cursoId);
          grupoSelect.innerHTML = `<option value="">Seleccionar grupo</option>${gruposCurso.map((g) => `<option value="${g.id}">${g.nombre}</option>`).join("")}`;
        };

        if (cursoSelect) {
          cursoSelect.addEventListener("change", () => fillGrupoOptions(cursoSelect.value));
        }

        if (materiaSelect) {
          materiaSelect.addEventListener("change", toggleRotacion);
          toggleRotacion();
        }

        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const materia_id = Number(form.querySelector('[data-field="materia_id"]').value);
            const curso_id = Number(form.querySelector('[data-field="curso_id"]').value);
            const grupoRaw = form.querySelector('[data-field="grupo_id"]').value;
            const grupo_id = grupoRaw ? Number(grupoRaw) : null;
            const tecnica = isMateriaTecnica(materia_id);

            let docente_id = docenteSelect ? Number(docenteSelect.value) : 0;

            let rotacion = null;
            if (tecnica) {
              const materia1_id = materia_id;
              const docente1Raw = rotDocente1 && rotDocente1.value ? Number(rotDocente1.value) : (docenteSelect ? Number(docenteSelect.value) : 0);
              const docente1_id = docente1Raw;
              const materia2_id = rotMateria2 ? Number(rotMateria2.value) : 0;
              const docente2_id = rotDocente2 ? Number(rotDocente2.value) : 0;

              if (!materia1_id || !docente1_id || !materia2_id || !docente2_id) {
                alert("Para materia técnica debes completar Materia 1, Docente 1, Materia 2 y Docente 2.");
                return;
              }

              docente_id = docente1_id;
              rotacion = { materia1_id, docente1_id, materia2_id, docente2_id };
            } else if (!docente_id) {
              alert("Selecciona un docente para la asignacion academica.");
              return;
            }

            if (grupo_id) {
              const grupo = (app.grupos || []).find((g) => Number(g.id) === grupo_id);
              if (!grupo || Number(grupo.curso_id) !== curso_id) {
                alert("El grupo seleccionado no pertenece al curso.");
                return;
              }
            }

            app.asignaciones = app.asignaciones || [];
            app.asignaciones.unshift({ id: Date.now(), docente_id, materia_id, curso_id, grupo_id, rotacion });
            save();
            render();
          });
        }

        document.querySelectorAll(".del-asig-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            app.asignaciones = (app.asignaciones || []).filter((a) => Number(a.id) !== id);
            save();
            render();
          });
        });

        document.querySelectorAll(".edit-asig-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const a = (app.asignaciones || []).find((x) => Number(x.id) === id);
            if (!a) return;

            const docente_id = prompt("Editar docente_id", String(a.docente_id));
            if (docente_id === null) return;
            const materia_id = prompt("Editar materia_id", String(a.materia_id));
            if (materia_id === null) return;
            const curso_id = prompt("Editar curso_id", String(a.curso_id));
            if (curso_id === null) return;
            const grupo_id = prompt("Editar grupo_id (vacío para quitar)", a.grupo_id == null ? "" : String(a.grupo_id));
            if (grupo_id === null) return;

            const parsedGrupo = grupo_id.trim() === "" ? null : Number(grupo_id);
            if (parsedGrupo) {
              const grupo = (app.grupos || []).find((g) => Number(g.id) === parsedGrupo);
              if (!grupo || Number(grupo.curso_id) !== Number(curso_id)) {
                alert("grupo_id no corresponde al curso.");
                return;
              }
            }

            a.docente_id = Number(docente_id);
            a.materia_id = Number(materia_id);
            a.curso_id = Number(curso_id);
            a.grupo_id = parsedGrupo;
            save();
            render();
          });
        });
      }

      bootstrapPortal();
  }
});
