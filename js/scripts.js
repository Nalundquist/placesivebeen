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

 