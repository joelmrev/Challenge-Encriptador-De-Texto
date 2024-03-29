console.log("Hola mundo")

const campoTexto = document.querySelector("#textoEncriptado");
const campoMensaje = document.getElementById("campoMensaje");

const matrizCode = [
["e", "enter"], // INDICE 0
["i", "imes"], // indice 1
["a", "ai"], // indice 2
["o", "ober"], // indice 3
["u", "ufat"] // indice 4
];




function btnEncriptar() {
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]
                );
        }    
    }
    return fraseEncriptada;
}


function btnDesencriptar() {
    const texto = desencriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function desencriptar (fraseDesencriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseDesencriptada.includes(matrizCode[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0]
            );
        }
    }
    return fraseDesencriptada   
}


function copiarTexto() {
    var copyText = document.getElementById('campoMensaje');

    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    alert('Texto Copiado: ' + copyText.value);
}





btnEncriptar();
btnDesencriptar();
