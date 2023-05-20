var para = document.createElement("p");
var node = document.createTextNode("this text is appended");
para.appendChild(node);
var parent = document.getElementById("div1");
parent.appendChild(para);

//this is an other node

var para2 = document.createElement("p");
para2.innerHTML = "the skay look like dimmond"

var child = document.getElementById("p1");
para3.innerHTML = "the override text";
//parent.insertBefore(para2, child);
parent.replaceChild(para3, child);