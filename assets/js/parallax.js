document.addEventListener("DOMContentLoaded", () => {
	const layers = document.querySelectorAll(".home__layer");

	document.addEventListener("mousemove", (e) => {
		const x = (window.innerWidth / 2 - e.clientX) / 25;
		const y = (window.innerHeight / 2 - e.clientY) / 25;

		layers.forEach((layer) => {
			const speed = layer.getAttribute("data-speed");
			const moveX = (e.clientX - window.innerWidth / 2) * (speed / 100);
			const moveY = (e.clientY - window.innerHeight / 2) * (speed / 100);

			layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
		});
	});
});
