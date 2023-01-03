let visible = true
function ocultarMostrarMenu(){
    if(visible){
        document.getElementById("contenido").style.marginLeft = "-110%";
        document.getElementById("entradas").style.marginLeft = "50px";
        visible=false;
    }else{
        document.getElementById("contenido").style.marginLeft = "0";
        document.getElementById("entradas").style.marginLeft = "250px";
        visible=true;
    }

}