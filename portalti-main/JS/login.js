function login(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;


    if(usuario === "admin" && senha === "123456"){

        window.location.href = "index.html";

    }else{

        alert("Usuário ou senha incorretos");

    }

}
