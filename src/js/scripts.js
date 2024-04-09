// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
console.log("Hello");

const MyName = "Lydia";
const MyAge = 200;
console.log(MyAge + 1);

//Practical JS Show and Hide
const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

//Function
function toggledParagraph() {
	toggledParagraph.classList.toggle("show");
	toggledParagraph.classList.toggle("hide");
	console.log(toggledParagraph);
}
//Call function
toggledParagraph();


//Find the button and toggle paragraph when clicked
const toggledButton = document.querySelector('#toggle-control');
console.log("toggledButton");

//event lister
toggledButton.addEventListener("click", toggledParagraph);
