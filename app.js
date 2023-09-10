const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

let loopCount = 0;
meditateAnimation();

function meditateAnimation() {
	if (loopCount < 3) {
		text.innerHTML = "吸って！";
		container.className = "container grow";

		document.querySelector(".pointer-container").style.animation =
			"rotate 7500ms linear forwards infinite";

		setTimeout(() => {
			text.innerHTML = "止めて！";
			setTimeout(() => {
				text.innerHTML = "吐いて！";
				container.className = "container shrink";
				setTimeout(() => {
					loopCount++;
					meditateAnimation();
				}, breatheTime);
			}, holdTime);
		}, breatheTime);
	} else {
		text.innerHTML = "終了！";
		document.querySelector(".pointer-container").style.animation = "none";
	}
}
