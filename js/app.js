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
});