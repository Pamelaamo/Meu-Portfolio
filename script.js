
var id = null;
function movimento() {
    var elem = document.getElementById("animaçao");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if(pos == 305) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.center = pos + 'px';
            elem.style.bottom= pos + 'px';
            
           
        }
    }
}