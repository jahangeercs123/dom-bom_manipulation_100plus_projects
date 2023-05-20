window.addEventListener('resize', update);
var x = window.document.getElementById('demo');
update();
function update(){
    x.innerHTML = "browser inner width"+ window.innerWidth + "innerhight"+ window.innerHeight;
}
var newWindowobj = window.open("http://www.youtube.com", "newWindow", "widht:200, hight:200");