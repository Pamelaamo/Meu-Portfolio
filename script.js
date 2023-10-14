
var id = null;
function movimento() {
    var elemento = document.getElementById("animaçao");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if(pos == 304) {
            clearInterval(id);
        } else {
            pos++;
            elemento.style.center = pos + 'px';
            elemento.style.bottom = pos + 'px';
            
        }
    }
}