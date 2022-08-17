
const tbody = document.querySelector("#tabla-datos");

//cargamos el array
document.addEventListener('DOMContentLoaded', () => {
    mostrar(array);
});


//imprime  el array
function mostrar(array) {
    tbody.innerHTML="";
    promedio();
    let indice = 0;
    for (const iterator of array) {
        html = `<tr class="text-black align-middle">
        <td>00${indice}</td>
        <td>${capitalizarPrimeraLetra(iterator.nombre)}</td>
        <td>${capitalizarPrimeraLetra(iterator.apellido)}</td>
        <td>${capitalizarPrimeraLetra(iterator.curso)}</td>
        <td><input type="text" size="1" id ="nota1${indice}" value="${iterator.notas[0]}" disabled></td>
        <td><input type="text" size="1" id ="nota2${indice}" value="${iterator.notas[1]}" disabled></td>
        <td><input type="text" size="1" id ="nota3${indice}" value="${iterator.notas[2]}" disabled></td>
        <td><input type="text" size="1" id ="promedio" value="${iterator.promedio}" disabled></td>
        <td><input type="button" value="Editar" id ="editar" class="btn btn-warning" onclick ="editar(${indice})"></input></td> 
        <td><input type="button" value="Guardar" id ="guardar" class="btn btn-danger" onclick ="guardar(${indice})"></input></td>
        </tr>`
        tbody.innerHTML += html;
        indice++;
    }
}
//guarda en el array
function guardar(indice){
    array[indice].notas[0] = document.getElementById(`nota1${indice}`).value;
    array[indice].notas[1]  = document.getElementById(`nota2${indice}`).value;
    array[indice].notas[2]  = document.getElementById(`nota3${indice}`).value;
    mostrar(array);
}

//edita los input y los habilita 
function editar(indice) {
    document.getElementById(`nota1${indice}`).removeAttribute("disabled")
    document.getElementById(`nota2${indice}`).removeAttribute("disabled")
    document.getElementById(`nota3${indice}`).removeAttribute("disabled")
}

//funcion primera letra mayuscula
function capitalizarPrimeraLetra(str) {
    let arrayPalabra = str.split(" ");
    let obtiene = "";
    for (const key in arrayPalabra) {
        let elemento = arrayPalabra[key];
        obtiene += elemento.charAt(0).toUpperCase() + elemento.slice(1) + " ";
    }
    return obtiene;
}

//funcion genera promedio
function promedio() {
    for (const iterator of array) {
        let promedio = (parseInt(iterator.notas[0]) + parseInt(iterator.notas[1]) + parseInt(iterator.notas[2])) / 3;
        iterator.promedio = promedio.toFixed(2);
    }
}