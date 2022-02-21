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
		console.log(nom, prenom, email, ville, pays);
		if (nom === "" || prenom === "" || email === "" || ville === "" || pays === "") {
			el.innerText = "Veuillez remplir tous les champs";
			el.classList.add("error");
		} else {
			el.innerText = "Votre formulaire a bien été envoyé";
			el.classList.add("success");
		}
	};
});