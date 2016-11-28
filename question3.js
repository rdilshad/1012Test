function myfunc(a, b, c) {
	return {};
}

function validate() {
	var out = document.getElementById("output");

	test = myfunc([1,2,3,4], "abc123def456", "hello")
	if (JSON.stringify(test["first"]) == JSON.stringify([1,4,9,16]) && test["2nd"] == "123456" && test["three"] == "hhhhhello") {
		out.innerHTML += "Passed test 1 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	} else {
		out.innerHTML += "!!!!! Failed test 1 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	}

	test = myfunc([10,5,6,4], "...1--def46", "test")
	if (JSON.stringify(test["first"]) == JSON.stringify([100,25,36,16]) && test["2nd"] == "146" && test["three"] == "tttttest") {
		out.innerHTML += "Passed test 2 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	} else {
		out.innerHTML += "!!!!! Failed test 2 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	}

	test1 = myfunc([-1,12,-3], "aeligha", "why")
	if (JSON.stringify(test1["first"]) == JSON.stringify([1,144,9]) && test1["2nd"] == "" && test1["three"] == "wwwwwhy") {
		out.innerHTML += "Passed test 3 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	} else {
		out.innerHTML += "!!!!! Failed test 3 " + test["first"] + " " + test["2nd"] + " " + test["three"] + "<br>";
	}
}

window.onload = validate
