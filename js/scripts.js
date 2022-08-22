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

	document.querySelector("h2#landmark").innerText = "Landmarks: " + sea.landmark;
	document.querySelector("h2#season").innerText = "Best Season to Visit: " + sea.season;
	document.querySelector("h2#notes").innerText = "Other Notes: " + sea.notes;
	console.log(sea.landmark)
}

function formSubmitSf(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + sf.landmark;	
document.querySelector("h2#season").innerText = "Best Season to Visit: " + sf.season;
document.querySelector("h2#notes").innerText = "Other Notes: " + sf.notes;
console.log(sf.notes)
}

function formSubmitNyc(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + nyc.landmark;
document.querySelector("h2#season").innerText = "Best Season to Visit: " + nyc.season;
document.querySelector("h2#notes").innerText = "Other Notes: " + nyc.notes;
	console.log(nyc.landmark)
}

function formSubmitPort(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + port.landmark;
document.querySelector("h2#season").innerText = "Best Season to Visit: " + port.season;
document.querySelector("h2#notes").innerText = "Other Notes: " + port.notes;
console.log(port.season)
}

function formSubmitNola(event){
	event.preventDefault();
document.querySelector("h2#landmark").innerText = "Landmarks: " + nola.landmark;
document.querySelector("h2#season").innerText = "Best Season to Visit: " + nola.season;
document.querySelector("h2#notes").innerText = "Other Notes: " + nola.notes;
console.log(nola.season)
}


window.addEventListener("load", function(){
	console.log("window load event listener");
	let seaForm = document.getElementById("seaForm");
	seaForm.addEventListener("submit", formSubmitSea);
	let sfForm = document.getElementById("sfForm");
	sfForm.addEventListener("submit", formSubmitSf);
	let nycForm = document.getElementById("nycForm");
	nycForm.addEventListener("submit", formSubmitNyc);
	let pdxForm = document.getElementById("pdxForm");
	pdxForm.addEventListener("submit", formSubmitPort);
	let nolaForm = document.getElementById("nolaForm");
	nolaForm.addEventListener("submit", formSubmitNola);
})
