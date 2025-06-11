document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("main section[id]");
	const navLinks = document.querySelectorAll(".navbar__link");

	function activateMenuOnScroll() {
		const scrollY = window.scrollY;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href") === `#${sectionId}`) {
						link.classList.add("active");
					}
				});
			}
		});
	}

	window.addEventListener("scroll", activateMenuOnScroll);
});
