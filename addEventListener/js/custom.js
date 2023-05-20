var mydiv1 = document.getElementById("mydiv1");
var myp1 = document.getElementById("myp1");
myp1.addEventListener("click", function(){mydiv1.style.background="red"});

//onclick function is also wrok in this postion
myp1.onclick = function(){mydiv1.style.background="green"}; 