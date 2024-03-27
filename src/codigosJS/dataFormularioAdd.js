


let DataTotalTarea = {};

function ProcesarDataFormTarea(objetoAtratar) {
    let fechaODias = "";

    if(objetoAtratar.fecha==""){
        let arrayDias = [];
        const dias = ["lun","mar","mie","jue","vie","sab","dom"];

        for (let i = 0; i < dias.length; i++) {
            if (objetoAtratar.hasOwnProperty(dias[i])) {
                arrayDias.push(dias[i]);
            }
        }
        fechaODias = arrayDias.join("-");
    }
    else{
        fechaODias = objetoAtratar.fecha;
    }
        
        DataTotalTarea={
            nombre : objetoAtratar.nombre ,
            descripcion : objetoAtratar.descripcion ,
            dateOdays : fechaODias ,
            hora : objetoAtratar.hora ,
            categoria : objetoAtratar.categoria ,
            check : '-1',
            cerrar : '-1',
            oculto: false 
        }
        console.log(DataTotalTarea);

    return DataTotalTarea ;
}


export{ProcesarDataFormTarea}