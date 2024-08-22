let fechaNacimiento = new Date('03-28-2003');
let ahora = new Date();

let anios = ahora.getFullYear() - fechaNacimiento.getFullYear();

fechaNacimiento.setFullYear(ahora.getFullYear());

if(ahora < fechaNacimiento){
    --anios;
}

document.getElementById("edad").textContent = (anios);