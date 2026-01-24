// Contador
let cuenta = 0;
// Constantes
const pantalla = document.getElementById("numero");
const botonIncrementar = document.getElementById("btn-inc");
const botonReset =document.getElementById("btn-res");
// Función para actualizar texto
function actualizarPantalla(){
    pantalla.innerText = cuenta;
}
// evento incrementar
botonIncrementar.addEventListener("click",()=>{
    cuenta++;
    actualizarPantalla();
})
//evento resetear
botonReset.addEventListener("click",()=>{
    cuenta = 0
    actualizarPantalla();
})