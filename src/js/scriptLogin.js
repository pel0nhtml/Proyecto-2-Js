const mail = document.getElementById("mail");
const passwordI = document.getElementById("passwordI");
const btnIden = document.getElementById("btnIden");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

///Recuperar la información del usuario del local storage///
const listaScRegis = JSON.parse(localStorage.getItem("userInfo")) || [];

btnIden.addEventListener("click", function () {
   
   
    ///Validación de datos: verificar si los campos de correo y contraseña están completos//
    if (mail.value === "" || passwordI.value === "") {
        alert("Por favor, complete todos los campos.");
        return; 
    }

    let userFound = false; // Variable para rastrear si se encontró un usuario

    ///Buscar usuario en la lista de registros///
    for (let index = 0; index < listaScRegis.length; index++) {
        if (listaScRegis[index].password1 === passwordI.value && listaScRegis[index].mail === mail.value) {
            userFound = true;
            window.location.href = "indexMainPage.html";
            break; 
        }
    }

    if (!userFound) {
        alert("Correo electrónico o contraseña incorrectos");
    }
});
