
/*quise hace la funcion aparte para reusarla en cada boton, pero no pude por que se bugeaba
así que esta fue la forma de solucionarlo...*/
document.getElementById('button1').addEventListener('mouseenter', function() {
    document.getElementById("button1").style.backgroundColor = "#4DA6FF";
})

document.getElementById('button1').addEventListener('mouseout', function() {
    document.getElementById("button1").style.backgroundColor = "#FFFFFF";
})

document.getElementById('button2').addEventListener('mouseenter', function() {
    document.getElementById("button2").style.backgroundColor = "#4DA6FF";
})

document.getElementById('button2').addEventListener('mouseout', function() {
    document.getElementById("button2").style.backgroundColor = "#FFFFFF";
})

//Mostrar datos estudiante
document.getElementById("button2").addEventListener('click', traerDatos)

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/Json/date.json');
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);      
            document.getElementById("respuesta").innerHTML = `
            <h3>Nombre: ${datos.nombre}</h3>
            <h3>Apellido: ${datos.apellido}</h3>
            <h3>Edad: ${datos.edad}</h3>
            <h3>DNI: ${datos.dni}</h3>
            <h3>Telefono: ${datos.tel}</h3>
            <h3>Gmail: ${datos.gmail}</h3>`
            
        }
    }
document.getElementById("red1").style.display="block";
document.getElementById("red2").style.display="block";
document.getElementById("red3").style.display="block";
}
