


function cambiarVisible(siono,clase,elementosAcambiar) {
    if (siono) {
        elementosAcambiar.forEach((element)=>{
            element.classList.replace(clase,"no-visible");
        })
    }
    else{
        elementosAcambiar.forEach((element)=>{
            element.classList.replace("no-visible",clase);
        })
    }
}

function toggleClase(elementohtml) {
    elementohtml.classList.toggle("no-visible");
}

export{cambiarVisible,toggleClase}