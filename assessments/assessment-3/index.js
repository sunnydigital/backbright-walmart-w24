console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted successfully!")
}

function handleMouseOver(evt) {
	evt.preventDefault();
	alert("You look very nice today!")
}

let form = document.querySelector('#contact');
const image = document.querySelector('#steak')

form.addEventListener('submit', handleSubmit);
form.addEventListener('mouseover', handleMouseOver)