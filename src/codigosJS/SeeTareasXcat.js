
function TareasXcat(ArrayTareas,categoriaSelec) {
    for (let i = 0; i < ArrayTareas.length; i++) {
        if (ArrayTareas[i].categoria==categoriaSelec) {
            ArrayTareas[i].oculto=false;  

        }
        else{
            ArrayTareas[i].oculto=true;            
        }      
    }
}

export{TareasXcat}