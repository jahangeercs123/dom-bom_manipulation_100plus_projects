//on mouse Click
function changeColorRed(obj){
    obj.style.color = 'red';
}
//on button Click
function changebgcolor(){
    document.querySelector('body').style.background = "green";
}
document.getElementById('btn').onclick = changebgcolor;

