# 1012Test 
#Monday
1. [5 marks] Create the html file index1.html so that it contains the following (in order).
    0) a title "Today is Tuesday"
    1) link to the CSS question1.css.
    2)A div element with class "class1" containing the text "first line" and a span with id “spanid1" containing the text "first span"
    3)A table with 6 rows and 6 columns, every even row (starting from 0) should have the class "class2", every cell in an odd column (starting from 0) should have class "class3", elements along the diagonal should have id "idN" where N is the column number.
    4)An h1 element with class "class2" containing the text "This is my Header"
Create a file question1.css so that it contains the following selectors.
    5) The background colour of class "class1" should be green.
    6) The text colour of class class "class2" should be red.
    7) The background colour of elements inside an element with class "class2" should be yellow.
    8) The background colour of an element with class "class3" inside an element with class "class2" should be cyan.
You must upload index1.html and question1.css to the moodle assignment associated with your lab test.
2. [5 marks] Consider the following code fragments for index2.html
<html>
	<head>
		<title>Question 2</title>
		<script src="question2.js" type="text/javascript"></script>
	<head>
	<body>
		<div class="funky"></div>
	</body>
<html>
and for question2.js
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
Cut and paste the above code into your virtual box. There are a number of errors in the files you have been provided(question2.html, question2.js). Your task is to debug and correct these errors so that the html page produces the desired ouput. You should not try to rewrite all the code. The goal is to make as few changes as possible.
The html file should not be changed.
The javascript file should
	1) call the function go when the page loads
	2) the function go programatically adds a table inside the div with class "funky"
	3) the table should have 13 rows and 2 columns
	4) the cells of the table should contain a letter of the alphabet, such that all letters from a-z
	are in the table. The first row "a" "b", second row "c" "d" and last row "y" "z".
	5) each cell should have a text colour of either red, green or blue using the pattern
	r g
	b r
	g b
	r g
	.... 
You must upload question2.js to the moodle assignment associated with your lab test.
3. [5 marks] Consider the following code fragments for index3.html
<html>
	<head>
		<title>Question 3</title>
		<script src="question3.js" type="text/javascript"></script>
	<head>
	<body>
		<div id="output"></div>
	</body>
<html>
and for question3.js
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
Cut and paste the above code into your virtual box.  The function myfunc(a,b,c) is incomplete, your job is to finish writing the function
using the follow specification.
myfunc takes three parameters: an array of numbers, a string and another string.
myfunc should return an object with three attributes “first”, “2nd”, “three”.
The value of the attribute “first” should be an array of numbers that are the square of the numbers in the parameter a. [1,2,3] -> [1,4,9].
The value of the attribute “2nd” should be the string b with only number characters left over. “124segegg3” -> “1243”.
The value of the attribute “three” should be the the string c with the first letter repeated 5 times. “go” -> “gggggo”.
You must upload question3.js to the moodle assignment associated with your lab test and a screenshot of the output called screenshot3.jpg
4. [5 marks] Consider the following code fragments for index4.html
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="question4.js"> </script>
</head>
<body>
<div id="input">This text here</div>
<div id="output"></div>
</body>
</html>
and for question4.js
function go()
{
  var input = document.getElementById("input");
  var output = document.getElementById("output");
  output.innerText = input.innerText;
}
onload = go;
Cut and paste this code into your virtual machine and modify question4.js so that rather than copying the contents of the input element to the output element, instead your program should only copy those letters, in order that are vowels (that is one of a, e, i, o or u). So for the default value of input above, the output div should contain ieee upon completion of the function go(). Upload your revised question4.js file to the moodle assignment associated with your lab test. Only upload the revised file question4.js to the moodle site.
5. [5 marks] Consider the following code fragments for index5.html
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="question5.js"> </script>
</head>
<body>
<div id="results"></div>
</body>
</html>
and question5.js
function q5callback(json) {
  var output = document.getElementById("results");
  output.innerHTML = "Your output goes here";
}
function go() {
  access("select * from collection", q5callback);
}

var ajax;
var acallback=null;
function access(query, callback)
{
  acallback = callback;
  ajax = new XMLHttpRequest();
  ajax.onreadystatechange = ajaxProcess;
  ajax.open("GET", "http://127.0.0.1:8000/sql?query=" + query);
  ajax.send(null);
}
function ajaxProcess() {
  if((ajax.readyState == 4)&&(ajax.status == 200)){
    ajaxCompleted(ajax.responseText)
  }
}
function ajaxCompleted(text) {
  if(acallback != null) {
    var data = JSON.parse(text);
    acallback(data);
  }
}
onload=go;
This code utilizes the 'collections' table represented in the database in the virtual box used in the last two labs. Cut and paste the above code into your virtual box. Modify the code given in question5.js so that upon completion, the content of the results <div> is replaced with the sum of the year's of the albums in the collections table. Feel free to modify the above question5.js code in any manner you wish. Your code should work with any collection of records that follows the schema used for the collections table. Upload your revised question5.js file to the moodle assignment associated with your lab test. Only upload the revised file

