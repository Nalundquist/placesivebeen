// business logic -----------------

function Destination(destLoc, destLand, destSea, destNote) {
	this.location = destLoc;
	this.landmark = destLand;
	this.season = destSea;
	this.notes = destNote;
}

let sea = new Destination("Seattle", "Space Needle", "Summer", "Passive Aggressive lol");
let sf = new Destination("San Francisco", "Golden Gate Bridge", "Summer", "Expensive, naked people");
let nyc = new Destination("New York City", "Statue of Liberty", "Spring", "Fast talking, cheap pizza, trash");
let port = new Destination("Portland", "Rose Gardens", "Summer", "Damp, bikes, no sales tax");
let nola = new Destination("New Orleans", "French Quarter", "Fall/Winter", "French, Drunk, Trash");


 // User Interface Logic ---------------

function formSubmitSea(event){
	event.preventDefault();

	// document.querySelector("h2#landmark").innerText = null;
	// document.querySelector("h2#season").innerText = null;
	// document.querySelector("h2#notes").innerText = null;

	document.querySelector("h2#landmark").innerText = "Landmarks: " + sea[1];
	document.querySelector("h2#season").innerText = "Best Season to Visit: " + sea[2];
	document.querySelector("h2#notes").innerText = "Other Notes: " + sea[3];
	console.log(sea[3])
}

function formSubmitSf(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + sf[1];	
document.querySelector("h2#season").innerText = "Best Season to Visit: " + sf[2];
document.querySelector("h2#notes").innerText = "Other Notes: " + sf[3]
console.log(sf[3])
}

function formSubmitNyc(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + nyc[1];
document.querySelector("h2#season").innerText = "Best Season to Visit: " + nyc[2];
document.querySelector("h2#notes").innerText = "Other Notes: " + nyc[3];
	console.log(nyc[3])
}

function formSubmitPort(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + port[1];
document.querySelector("h2#season").innerText = "Best Season to Visit: " + port[2];
document.querySelector("h2#notes").innerText = "Other Notes: " + port[3];
console.log(port[3])
}

function formSubmitNola(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + nola[1];
document.querySelector("h2#season").innerText = "Best Season to Visit: " + nola[2];
document.querySelector("h2#notes").innerText = "Other Notes: " + nola[3];
console.log(nola[3])
}


window.addEventListener("load", function(){
	let form = document.querySelector("form#destForm")
	console.log("window load event listener")
	form.addEventListener("submit", formSubmit);
	let seaForm = document.querySelector("button#seattle")
	seaForm.addEventListener("submit", function(){})
	let sfForm = document.querySelector("button#sanFran")
	sfForm.addEventListener("submit", function(){})
	let nycForm = document.querySelector("button#newYork")
	nycForm.addEventListener("submit", function(){})
	let pdxForm = document.getElementById("pdxForm")
	pdxForm.addEventListener("submit", function(){})
	let nolaForm = document.querySelector("button#newOrleans")
	nolaForm.addEventListener("submit", function(){})
})
