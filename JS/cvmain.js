function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.add("dark-mode");
}
function disableDarkMode() {
    let main_body = document.body;
    main_body.classList.remove("dark-mode");
}
/*Cambio de imagenes dark mode*/
var sol = document.getElementById("sol");
var luna = document.getElementById("luna");
var maletin = document.getElementById("maletin"); 
var idea = document.getElementById("idea");
var cuaderno = document.getElementById("cuaderno");   

document.getElementById("button2").addEventListener("click", apagarSol)

function apagarSol() {
    sol.src = "./Fotos/Sol apagado.png";
    luna.src = "./Fotos/Luna prendida.png";
    maletin.src = "./Fotos/Maletin negro.png"
    idea.src = "./Fotos/Idea negro.png"
    cuaderno.src = "./Fotos/Cuaderno negro.png"
        
}

document.getElementById("button1").addEventListener("click", prenderSol)

function prenderSol() {
    sol.src = "./Fotos/Sol prendido.png";
    luna.src = "./Fotos/Luna apagada.png";
    maletin.src = "./Fotos/Maletin.png"
    idea.src = "./Fotos/Idea blanco.png"
    cuaderno.src = "./Fotos/Cuaderno.png"
}