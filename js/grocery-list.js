//declare variable - const below

const listCount = document.getElementById("count");
const listTarget = document.getElementById("grocery-list");
const newButton = document.getElementById("btn-new");
const addItemButton = document.getElementById("btn-add-item");
const itemTextInput = document.getElementById("input-item");
const form = document.getElementById("form-add-item");
const saveButton = document.getElementById("btn-save-item");


//hide the add field unless add item button is click
newButton.addEventListener("click", function() {		   
	form.removeAttribute("class");
	newButton.setAttribute("class", "hide");

 });


//adding item
addItemButton.addEventListener("click", function(event) {
	newButton.removeAttribute("class");
	form.setAttribute("class", "hide");
	let itemText = itemTextInput.value.trim();
	if (itemText != ""){
		createListItem(itemText);
		updateCountby(1);
	}
	itemTextInput.value = "";	
	event.preventDefault();
	
});


//create list item
function createListItem(text) {

	let listItem = document.createElement("li");
	let span = document.createElement("span");
	let spanText = document.createTextNode(text);
	span.appendChild(spanText);
	listItem.appendChild(span);
	
		
	let icon = document.createElement("i");
	icon.setAttribute("class", "glyphicon glyphicon-remove");
	listItem.appendChild(icon);
	
	
	listTarget.appendChild(listItem);
	listItem.addEventListener("click", function () {
		removeListItem(listItem);	
		
					
	});
	
}

//removing item with by clicking the x button
function removeListItem(item) {
	
	listTarget.removeChild(item);
	updateCountby(-1);
	
}

//update the count in the list whenever adding an item
function updateCountby(num) {
	let text = listCount.childNodes[0].nodeValue;
	let count = parseInt(text);
	listCount.childNodes[0].nodeValue = count + num;
}

//function to save items in local storage
saveButton.addEventListener("click", function() {

let str = JSON.stringify(listTarget);
	// save to storage

	localStorage.setItem("Groceries", listTarget.textContent);
	
	
	// retrieve from storage
	let storedList = localStorage.getItem("Groceries");
	
	
	alert("Your list is saved!")

	
});