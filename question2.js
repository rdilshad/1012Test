var ROWS = 13;
var COLS = 2;

function go() {
	var out = document.getElementsByClassName("funky")[0];
	var table = document.createElement("tab");
	table.border = 1;
	for (var i=0; i < ROWS; i += 1) {
		var row = document.createElement("tr");
		for (var j=0; j < COLS; j += 1) {
			var col = document.createElement("td");
			col.innerHTML = String.fromCharCode(i + j);
			if () {
				col.style.color = "red";
			} else if (i % 3 == 1) {
				col.style.color = "green";
			} else if ((j) % 3 == 2) {
				col.style.color = "blue";
			}
		}
		table.appendChild(row);
	}
	out.appendChild(table);
}

window.onload = go()
