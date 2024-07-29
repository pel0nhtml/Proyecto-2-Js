const mail = document.getElementById("mail");
const passwordI = document.getElementById("passwordI");
const btnIden = document.getElementById("btnIden");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

///Recuperar la información del usuario del local storage///
const listaScRegis = JSON.parse(localStorage.getItem("userInfo")) || [];

btnIden.addEventListener("click", function () {
    let userFound = false; // Variable para rastrear si se encontró un usuario

    for (let index = 0; index < listaScRegis.length; index++) {
        if (listaScRegis[index].password1 === passwordI.value && listaScRegis[index].mail === mail.value) {
            userFound = true;
            ///Redirigir a la página principal///
            window.location.href = "indexMainPage.html";
            break; ///Salir del bucle///
        }
    }

    
    if (!userFound) {
        alert("Correo electrónico o contraseña incorrectos");
    }
});
