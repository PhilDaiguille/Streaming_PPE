document.addEventListener("DOMContentLoaded", () => {
	/*APP*/
	console.log("charged");
	let date = new Date();
	let footer = document.querySelector("footer p");
	let body = document.querySelector("body");
	let el = document.querySelector("main p");

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
	/*FORM*/
	let btn, nom, prenom, email, ville, pays;
	btn = document.getElementsByTagName("input")[3];
	nom = document.getElementsByTagName("input")[0].value;
	prenom = document.getElementsByTagName("input")[1].value;
	email = document.getElementsByTagName("input")[2].value;
	ville = document.getElementsByTagName("select")[0].value;
	pays = document.getElementsByTagName("select")[1].value;
	btn.addEventListener("click", e => {
		e.preventDefault();
		Formulaire();
	});
	let Formulaire = () => {
		btn = document.getElementsByTagName("input")[3];
		nom = document.getElementsByTagName("input")[0].value;
		prenom = document.getElementsByTagName("input")[1].value;
		email = document.getElementsByTagName("input")[2].value;
		ville = document.getElementsByTagName("select")[0].value;
		pays = document.getElementsByTagName("select")[1].value;
		console.log(nom, prenom, email, ville, pays);
		if (nom === "" || prenom === "" || email === "" || ville === "" || pays === "") {
			el.innerText = "Veuillez remplir tous les champs ";
			el.classList.remove("success");
			el.classList.add("error");
		} else {
			el.innerText = "Votre formulaire a bien été envoyé";
			el.classList.remove("error");
			el.classList.add("success");
			localStorage.setItem("user", nom + " | " + prenom + " | " + email + " | " + ville + " | " + pays);
			sessionStorage.setItem("user", "sessionid");

		}
	};

	let el2, modal, closed, open_modal, closed_all, rows;
	
	el2 = document.querySelectorAll(".grid-picture-large li");
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
	for (rows of el2) {
		rows.addEventListener("click", open_modal);
	}
	closed.addEventListener("click", () => {
		modal.classList.remove("modale-active");
	});
	closed_all.addEventListener("click", () => {
		modal.classList.remove("modale-active");
	});
});