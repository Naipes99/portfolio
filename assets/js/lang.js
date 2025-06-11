document.addEventListener("DOMContentLoaded", () => {
	const langToggle = document.getElementById("language-toggle");

	// Traducciones
	const translations = {
		es: {
			"nav.home": "Inicio",
            "nav.about": "Acerca de Mí",
            "nav.skills": "Habilidades",
            "nav.projects": "Portafolio",
            "nav.contact": "Contacto",
            "home.title": "Hola, soy David",
		    "home.description": "Soy ingeniero, entusiasta en la programación y el desarrollo",
            "home.download": "Descargar CV",
            "about.title": "Acerca de Mí",
            "about.description": "Soy un apasionado por la programación, los videojuegos y la música. Me encanta aprender cosas nuevas, desarrollar soluciones creativas y mantenerme activo haciendo ejercicio. Disfruto combinar la lógica del código con la inspiración que encuentro en mis hobbies para crecer tanto personal como profesionalmente.",
            "skl.title": "Habilidades",
            "skl.description": "Soy un programador full stack con experiencia en desarrollo web, tanto en frontend como backend. Me enfoco en crear soluciones funcionales, escalables y con una experiencia de usuario clara y eficiente.",
            "skl.card1":"Lenguaje base para la creación de páginas web. Estructura el contenido mediante etiquetas, permitiendo una presentación clara y ordenada del sitio.",
            "skl.card2":"Se utiliza para diseñar y personalizar la apariencia visual de un sitio web. Permite aplicar estilos, animaciones, layouts responsivos y efectos visuales.",
            "skl.card3":"Lenguaje de programación esencial para el desarrollo web. Permite crear funcionalidades dinámicas, interactividad y conectar con servicios externos mediante APIs.",
            "skl.card4":"Lenguaje de programación de propósito general, orientado a objetos. Ideal para el desarrollo de videojuegos, software de sistemas y aplicaciones de alto rendimiento.",
            "skl.card5":"Biblioteca de JavaScript enfocada en la construcción de interfaces modernas. Usa componentes reutilizables, mejora el rendimiento y facilita el desarrollo escalable.",
            "skl.card6":"Lenguaje utilizado para crear, consultar y administrar bases de datos. Permite almacenar, organizar y recuperar datos de forma eficiente y segura.",
            "skl.tags.title": "Habilidades Blandas",
            "skl.tag1": "Responsable",
            "skl.tag2": "Trabajo en equipo",
            "skl.tag3": "Creativo",
            "skl.tag4": "Puntual",
            "skl.tag5": "Proactivo",
            "skl.tag6": "Autodidacta",
            "skl.tag7": "Pensamiento lógico",
            "skl.tag8": "Comunicación efectiva",
            "skl.tag9": "Adaptabilidad",
            "pjt.title": "Proyectos",
            "cnt.title": "Contacto",
            "cnt.description":"Comunicate a cualquier canal, contestare lo antes posible.",
            "cnt.WhatsApp": "Enviar mensaje a WhatsApp",
            "frm.title": "Enviar mensaje",
            "frm.name": "Nombre",
            "frm.email": "Correo",
            "frm.subject": "Asunto",
            "frm.message": "Mensaje",
            "frm.modal": "Formulario enviado con éxito!",
            "frm.close": "Cerrar",
            "frm.send": "Enviar",
            "ftr.description": "Soy desarrollador web, apasionado por la tecnología y la programación."
            

		},
		en: {
			"nav.home": "Home",
            "nav.about": "About Me",
            "nav.skills": "Skills",
            "nav.projects": "Portfolio",
            "nav.contact": "Contact",
            "home.title": "Hi, I'm David",
		    "home.description": "I'm an engineer, passionate about programming and development",
            "home.download": "Download CV",
            "about.title": "About Me",
            "about.description": "I'm passionate about programming, video games, and music. I love learning new things, developing creative solutions, and staying active through exercise. I enjoy combining the logic of code with the inspiration I find in my hobbies to grow both personally and professionally.",
            "skl.title": "Skills",
            "skl.description": "I'm a full-stack developer with experience in both front- and back-end web development. I focus on creating functional, scalable solutions with a clear and efficient user experience.",
            "skl.card1":"Base language for creating web pages. It structures content using tags, allowing for a clear and organized presentation of the site.",
            "skl.card2":"It's used to design and customize the visual appearance of a website. It allows you to apply styles, animations, responsive layouts, and visual effects.",
            "skl.card3":"Essential programming language for web development. It allows you to create dynamic features and interactivity, and connect to external services via APIs.",
            "skl.card4":"General-purpose, object-oriented programming language. Ideal for developing video games, systems software, and high-performance applications.",
            "skl.card5":"JavaScript library focused on building modern interfaces. It uses reusable components, improves performance, and facilitates scalable development.",
            "skl.card6":"Language used to create, query, and manage databases. It allows you to store, organize, and retrieve data efficiently and securely.",
            "skl.tags.title": "Soft Skills",
            "skl.tag1": "Responsible",
            "skl.tag2": "Teamwork",
            "skl.tag3": "Creative",
            "skl.tag4": "Punctual",
            "skl.tag5": "Proactive",
            "skl.tag6": "Self-taught",
            "skl.tag7": "Logical thinking",
            "skl.tag8": "Effective communication",
            "skl.tag9": "Adaptability",
            "pjt.title": "Projects",
            "cnt.title": "Contact",
            "cnt.description": "Contact me through any channel, I will reply as soon as possible.",
            "cnt.WhatsApp": "Send message via WhatsApp",
            "frm.title": "Send message",
            "frm.name": "Name",
            "frm.email": "Email",
            "frm.subject": "Subject",
            "frm.message": "Message",
            "frm.modal": "Form submitted successfully!",
            "frm.close": "Close",
            "frm.send": "Send",
            "ftr.description": "I am a web developer, passionate about technology and programming."

		}
	};

	function setLanguage(lang) {
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			if (translations[lang] && translations[lang][key]) {
				el.textContent = translations[lang][key];
			}
		});
	}

	// Detectar cambio de toggle
	langToggle.addEventListener("change", () => {
		const lang = langToggle.checked ? "en" : "es";
		setLanguage(lang);
	});

	// Inicializar con español
	setLanguage("es");
});
