
function estadoInicialTareas() {
    const tareaInicial = [{
        nombre: "Tarea de Muestra",
        descripcion : "Descripcion de prueba",
        dateOdays:"lun",
        hora:"12:00",
        categoria:"0",
        check:false,
        cerrar:0,
        oculto:true
    }]
    return tareaInicial;
}

export{
    estadoInicialTareas
}