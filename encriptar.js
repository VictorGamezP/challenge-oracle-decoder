//console.log("Hola nundo");
/*var titulo=document.querySelector(".titulo");
console.log("Estoy imprimiendo desde principal.js");*/


var boton=document.querySelector("#btn-encriptar");
boton.addEventListener("click", function(event){
    event.preventDefault();
    var textoClave = document.getElementById("input-texto").value;
    var textoEncriptado=encriptar(textoClave);
    document.getElementById("msg").value = textoEncriptado;
});

document.querySelector("#btn-copy").addEventListener("click", copy);


var boton=document.querySelector("#btn-desencriptar");
boton.addEventListener("click", function(event){
    event.preventDefault();
    var textoClave = document.getElementById("input-texto").value;
    var textoDesencriptado=desencriptar(textoClave);
    document.getElementById("msg").value = textoDesencriptado;   
});



function encriptar(texto){
var valorEncriptado =""    
textoArray = Array.from(texto);

clave=["a","e","i","o","u"];
conversion=["ai","enter","imes","ober","ufat"];

for(posicion=0; posicion<textoArray.length; posicion++ ){

    letraArray = textoArray[posicion];
    if (clave.indexOf(letraArray)== -1) {
        valorEncriptado = valorEncriptado + letraArray;
    }
    else {
        valorEncriptado = valorEncriptado + conversion[clave.indexOf(letraArray)];
    }
}


return valorEncriptado;
}




function desencriptar(texto){
    var valorDesencriptado =""
    
    
    var clave=["a","e","i","o","u"];
    var conversion=["ai","enter","imes","ober","ufat"];

    
    
   for(posicion=0; posicion < conversion.length; posicion++ ){
      //valorDesencriptado=texto.replace(conversion[1],clave[1])
     
      valorDesencriptado=texto.replaceAll(conversion[posicion],clave[posicion]);
        texto=valorDesencriptado
    }
    console.log(valorDesencriptado);
    return valorDesencriptado;

}

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }