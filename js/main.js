const divNingunMensaje = document.getElementById("ningun-mensaje");
const divMensajeEncriptado = document.getElementById("mensaje-encriptado");
const textArea = document.getElementById("textoOriginal");

// ENCRIPTAR
const btnEncriptar = document.getElementById("encriptar");
btnEncriptar.addEventListener("click", function () {
  if (textArea.value !== "") {
    encriptar();
  }
});

function encriptar() {
  // Obtiene el valor del textarea
  let textoOriginal = textArea.value;

  // Reemplaza las letras según las llaves de encriptación
  let textoEncriptado = textoOriginal.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

  // Ocultar el contenedor ningun-mensaje
  divNingunMensaje.classList.add("disable");

  // Mostrar el contenedor mensaje-encriptado y el boton copiar
  divMensajeEncriptado.classList.remove("disable");
  btnCopiar.classList.remove("disable");

  // Muestra el texto encriptado en el p correspondiente
  document.getElementById("resultadoTexto").innerText = textoEncriptado;
}

// DESENCRIPTAR
const btnDesencriptar = document.getElementById("desencriptar");
btnDesencriptar.addEventListener("click", function () {
  if (textArea.value !== "") {
    desencriptar();
  }
});
function desencriptar() {
  let textoDesencriptado = textArea.value;

  // Reemplazar las llaves de encriptación por las letras originales correspondientes
  textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
  textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
  textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
  textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
  textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

  // Ocultar el contenedor ningun-mensaje
  divNingunMensaje.classList.add("disable");

  // Mostrar el contenedor mensaje-encriptado y el boton copiar
  divMensajeEncriptado.classList.remove("disable");
  btnCopiar.classList.remove("disable");

  // Muestra el texto encriptado en el p correspondiente
  document.getElementById("resultadoTexto").innerText = textoDesencriptado;
}

// COPIAR EN EL PORTAPAPELES
const btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click", () => {
  let texto = document.getElementById("resultadoTexto").innerText;
  navigator.clipboard.writeText(texto).then(
    function () {
      console.log("El texto se ha copiado al portapapeles.");
    },
    function () {
      console.error("Error al copiar el texto al portapapeles.");
    }
  );
});
