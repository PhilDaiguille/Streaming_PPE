document.addEventListener("DOMContentLoaded", () => {
	/*APP*/
	console.log("charged");
	let date = new Date();
	let footer = document.querySelector("footer p");
	let body = document.querySelector("body");

	footer.innerText += ` ${date.getFullYear()}`;
	/*ACCESSIBILITY*/
	let btn1 = document.querySelector("header ul li:nth-child(1)");
	let btn2 = document.querySelector("header ul li:nth-child(2)");

	btn1.addEventListener("click", () => {
		if (btn1.innerHTML === `<span class="material-icons">visibility</span>`) {
			btn1.innerHTML = `<span class="material-icons">visibility_off</span>`;
		} else {
			btn1.innerHTML = `<span class="material-icons">visibility</span>`;
		}
		body.classList.toggle("accessibility");
	});
	btn2.addEventListener("click", () => {
		if (btn2.innerHTML === `<span class="material-icons">light_mode</span>`) {
			btn2.innerHTML = `<span class="material-icons">dark_mode</span>`;
		} else {
			btn2.innerHTML = `<span class="material-icons">light_mode</span>`;
		}
		body.classList.toggle("light");
	});

	let el, modal, closed, open_modal, closed_all;

	el = document.querySelectorAll(".grid-picture-large li");
	modal = document.querySelector(".parent-modale");
	closed = document.querySelector(".modale button");
	closed_all = document.querySelector(".modale img");

	/* property elements */

	open_modal = function () {
		console.log(this.dataset);
		/* les variables */
		let image = this.dataset.image;
		let title = this.dataset.title;
		let desc = this.dataset.description;
		let dates = this.dataset.dates;
		modal.classList.add("modale-active"); /* ajouter la classe active */
		/* sélectionner les sélecteurs html*/
		document.querySelector(".modale img").setAttribute("src", image);
		document.querySelector(".modale .desc h3").innerText = title;
		document.querySelector(".modale .desc p").innerHTML = `<strong>Description : </strong>${desc}`;
		document.querySelector(".modale .desc time").innerText = `Année : ${dates}`;
		document.querySelector(".modale .desc time").setAttribute("datetime", dates);
	};
	for (rows of el) {
		rows.addEventListener("click", open_modal);
	}
	closed.addEventListener("click", () => {
		modal.classList.remove("modale-active");
	});
	closed_all.addEventListener("click", () => {
		modal.classList.remove("modale-active");
	});
});