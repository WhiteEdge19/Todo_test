
function MostrarTareas(ArrayTareas) {
    const AreaDeTareas = document.querySelector(".work-area");
    AreaDeTareas.innerHTML= ``;
    for (let i = 0; i < ArrayTareas.length; i++) {
            AreaDeTareas.innerHTML+=`
            <div class="tarea">
                <p><p>
                <p></p>
                <p></p>
                <p></p>                
                <input type="checkbox">
                <button value="${i}">Prueba</prueba>
            </div>`
        
    }
}

function rellenarInfoTareas(ArrayTareas) {
    const espaciosAcompletar = document.querySelectorAll(".tarea");
    for (let i = 0; i < ArrayTareas.length; i++) {
        

        espaciosAcompletar[i].children[0].innerText=`${ArrayTareas[i].nombre}`;
        espaciosAcompletar[i].children[1].innerText=`${ArrayTareas[i].descripcion}`;
        espaciosAcompletar[i].children[2].innerText=`${ArrayTareas[i].dateOdays}`;
        espaciosAcompletar[i].children[3].innerText=`${ArrayTareas[i].hora}`;
        espaciosAcompletar[i].hidden=ArrayTareas[i].oculto;
        console.log(ArrayTareas[i].oculto);
    }
}
export{MostrarTareas,rellenarInfoTareas}