// Check colour constant exists
if (typeof colours === "undefined") {
	alert("Colours are not imported");
}

// flipperBox
const flipperBox = document.getElementById("flipperBox");

// clickButton
const clickButton = document.getElementById("clickButton");

// Click event
clickButton.addEventListener("click", function () {
	// Create random index
	const randomIndex = Math.floor(Math.random() * colours.length);

	// Change the background color of the flipperBox with random colour
	flipperBox.style.backgroundColor = colours[randomIndex];

	if (flipperBox.style.transform == "perspective(20px) rotateX(2deg)") {
		flipperBox.style.transform = "perspective(20px) rotateY(2deg)";
	} else {
		flipperBox.style.transform = "perspective(20px) rotateX(2deg)";
	}
});
