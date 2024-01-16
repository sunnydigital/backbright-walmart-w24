console.log("hello world");

function handleColor(evt) {
	evt.preventDefault();
	alert("My favorite color is turquois!")
}

function handlePlace(evt) {
	evt.preventDefault();
	alert("Home, it is where the hearth is!")
}

function handleRitual(evt) {
	evt.preventDefault();
	alert("Mindfulness, taking deep breathes")
}

let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', handleColor);
placeBtn.addEventListener('click', handlePlace);
ritualBtn.addEventListener('click', handleRitual);