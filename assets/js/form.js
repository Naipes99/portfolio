document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	const modal = document.getElementById("modal");
	const btnClose = document.getElementById("btn_close-modal");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const serviceID = "service_icwlj5y"; 
		const templateID_admin = "template_jv3maai"; 
		const templateID_user = "template_a037d6s";

		emailjs.sendForm(serviceID, templateID_admin, form).then(
			() => {
				console.log("Correo enviado a ti correctamente.");
			},
			(error) => {
				console.error("Error al enviarte el correo:", error);
			}
		);

		emailjs.sendForm(serviceID, templateID_user, form).then(
			() => {
				console.log("Correo de confirmación enviado al visitante.");
				modal.showModal();
				form.reset();
			},
			(error) => {
				console.error("Error al enviar confirmación al visitante:", error);
				alert("Hubo un error al enviar el mensaje. Inténtalo más tarde.");
			}
		);
	});

	btnClose.addEventListener("click", () => {
		modal.close();
	});
});
