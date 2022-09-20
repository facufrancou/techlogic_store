/* window.onload = function () { */
  console.log("estoy cargado en la vista");
  /* Tengo que consumir la api de usuarios, para luego al introducir un email 
realizar la busqueda y mostrar la imagen de usuario que intenta loguearse */

  /* let userInput = document.querySelector('.email-login').value; */
  let passLogin = document.querySelector(".pass-login");
  let emailLogin = document.querySelector("#email");

  fetch("http://localhost:3030/api/users/")
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      let usersToBrowse = users.users;

      passLogin.addEventListener("focus", (e) => {

        console.log("me estoy ejecutando despues del evento");

        let userInput = document.querySelector(".email-login").value;

        console.log("contenido el imput: " + userInput);

        for (let i = 0; i < usersToBrowse.length; i++) {
          usersToBrowse = usersToBrowse[i];

          console.log(usersToBrowse.email);

          if (usersToBrowse.email == userInput) {

            console.log("es verdadero");

            let imgUserLogin = document.getElementById("img-login"); // Llamo al div que contiene la imagen de perfil 

            imgUserLogin.insertAdjacentHTML( // inserta la imagen de usuario si existe
              "afterBegin",
              '<img src="/img/users/' +
                usersToBrowse.image +
                '"' +
                ' alt="" class="profileImage" id="profileImage">'
                ); 
            }else{
                
            } 
            /* else {

            console.log("es falso");

            let imgUserLogin = document.getElementById("img-login");

            imgUserLogin.insertAdjacentHTML( //inserta la imagen de usuario predeterminado si no existe
              "afterBegin",
              '<img src="/img/users/usuario-predeterminado.png" alt="" class="profileImage" id="profileImage">'
            );
          } */
        }
      });
    })
    .catch((e) => {
      console.log(e);
    });

 
    

