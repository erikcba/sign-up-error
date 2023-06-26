const form = document.getElementById("miFormulario");
const mensajesError = document.querySelector(".mensaje-error");
const iconoError = document.querySelector("#icon-error");
let tipo = document.getElementById("tipo");
const inputMail = document.getElementById("email")


//Se evita la recarga de la pagina y se valida que el formulario estte bien antes de enviar
form.addEventListener("submit", function(event) {
    event.preventDefault();
    mostrarMensajesError();
});

function mostrarMensajesError() {
  var inputs = document.querySelectorAll("#miFormulario input");
  var mensajesError = document.querySelectorAll(".mensaje-error");
  var iconoErrorNombre = document.querySelector("#icon-error-nombre")
  var iconoErrorApellido = document.querySelector("#icon-error-apellido")
  var iconoErrorEmail = document.querySelector("#icon-error-email")
  var iconoErrorPassword = document.querySelector("#icon-error-password")

  for (let i = 0 ; i < mensajesError.length; i++) {
    mensajesError[i].textContent = "";
    iconoErrorNombre.style.display="none";
    iconoErrorApellido.style.display="none";
    iconoErrorEmail.style.display="none";
    iconoErrorPassword.style.display="none";
  }

  var mensajeErrorNombre = null;
  var mensajeErrorApellido = null;
  var mensajeErrorEmail = null;
  var mensajeErrorPassword = null;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var valor = input.value.trim();
    if (valor === "") {
      switch(input.id) {
        case "nombre":
          mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
          mensajeErrorNombre.textContent = "Nombre no puede estar vacio";
          iconoErrorNombre.style.display="block"
          break;
        case "apellido":
          mensajeErrorApellido = document.getElementById("mensajeErrorApellido");
          mensajeErrorApellido.textContent = "Apellido no puede estar vacio";
          iconoErrorApellido.style.display="block"
          break;
        case "email":
          mensajeErrorEmail = document.getElementById("mensajeErrorEmail");
          mensajeErrorEmail.textContent = "Email no puede estar vacio";
          iconoErrorEmail.style.display="block"
          break;
        case "password":
          mensajeErrorPassword = document.getElementById("mensajeErrorPassword");
          mensajeErrorPassword.textContent = "Contraseña no puede estar vacio";
          iconoErrorPassword.style.display="block"
          break;
      }
    }
  }

}

