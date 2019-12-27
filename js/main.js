var array = [];
function onButtonClick() {
	let inputValue = document.getElementById("text-input").value;
	let newLength = array.push(inputValue);
	let heading = document.getElementById("btn");
	console.log(array);}
function check() {
	console.log(document.getElementById('text-input'));
	let inputValue = document.getElementById("text-input").value;
	if (inputValue >= 0){
		}
	else if (inputValue >= array.length){
		}
	else {
		alert("Веддите подходящий параметр")}}
document.getElementById("button2").click = check;
function buttonTwo() {
	let inputValue = document.getElementById("text-input").value;
	let first = array[inputValue];
	let heading = document.getElementById("btn");
	heading.innerHTML = first;}
document.getElementById("button3").click = check;
function buttonThree() {
	let inputValue = document.getElementById("text-input").value;
	let removedItem = array.splice(inputValue);
	let heading = document.getElementById("btn");
	heading.innerHTML = "Успешно удалено";}

