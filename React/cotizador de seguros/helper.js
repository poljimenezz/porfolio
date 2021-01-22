//Función para calcular la diferencia de años 
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}
//Función para calcular el incremento según la marca entrada
export function calcularMarca(marca) {
    let incremento;

    if (marca === 'europeo'){
        incremento = 1.30;
    }
    else if (marca === 'americano'){
        incremento = 1.15;
    }
    else if (marca === 'asiatico'){
        incremento = 1.05;
    }

    return incremento;
}
//Función para calcular el plan
export function obtenerPlan(plan) {
    return (plan === 'basico')? 1.20 : 1.50;
}

//Función para mostrar la primera letra en mayúscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}