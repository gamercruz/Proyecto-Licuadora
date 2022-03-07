var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById("blender-button-sonido")
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    }else{
        estadoLicuadora = "apagado"
        hacerBrrBrr();
        licuadora.classList.remove("active");
       /*  console.log("me apagaste"); */
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused ) {
        sonidoLicuadora.play();
    }else
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
}