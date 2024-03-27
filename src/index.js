import { crearButCats } from './codigosJS/CrearCatbuttons';
import { EstadoInicialCats } from './codigosJS/EstadoInicialCat';
import { TareasXcat } from './codigosJS/SeeTareasXcat';
import { updateCats } from './codigosJS/UpdateCat';
import { revisionCheckbocks, toggleChecks } from './codigosJS/checkbox';
import { ProcesarDataFormTarea } from './codigosJS/dataFormularioAdd';
import { estadoInicialTareas } from './codigosJS/estadoInicialTarea';
import { MostrarTareas, rellenarInfoTareas } from './codigosJS/mostrarTareas';
import { cambiarVisible, toggleClase } from './codigosJS/visible';
import './style.css';
console.log("OK");


const espaciodeFecha = document.querySelectorAll(".cfecha");
const eventosMenu = document.querySelector(".interacciones-menu");
const inputFecha = document.querySelector("#fecha");

eventosMenu.addEventListener('click',(event)=>{
    const botonClikeado = event.target;

    switch (botonClikeado.value) {
        case "All/notAll":
            toggleChecks();
            cambiarVisible(revisionCheckbocks(),"cfecha",espaciodeFecha);
            inputFecha.value ='';
            if (revisionCheckbocks()) {
                inputFecha.required=false;
            }
            else{
                inputFecha.required=true;
            }
            
            break;
        
        case "add-new-tarea":
            const FormuAddTarea = document.querySelector(".add-tarea");
            inputFecha.value ='';
            toggleClase(FormuAddTarea);
            
            break;
        case "activar-categoria":
            const FormAddCat = document.querySelector(".add-categoria");
            toggleClase(FormAddCat);
            break;
        default:
            break;
    }
   
})

const espacioCheck = document.querySelector(".frecuencia");

espacioCheck.addEventListener('change',(event)=>{
    const checkVisto = event.target.checked;
    inputFecha.value ='';
    cambiarVisible(revisionCheckbocks(),"cfecha",espaciodeFecha);
    if (revisionCheckbocks()) {
        inputFecha.required=false;
    }
    else{
        inputFecha.required=true;
    }
})


let dataAorganizar =[]; 
//variable q almacena la info

const formularioAddT = document.querySelector(".add-tarea");
//Para agregar nueva tarea
formularioAddT.addEventListener("submit", function(event) {
    event.preventDefault();
    const Dataform =Object.fromEntries(
        new FormData(event.target));
    console.log(Dataform);
    dataAorganizar.push(ProcesarDataFormTarea(Dataform));
    console.log(dataAorganizar);
    TareasXcat(dataAorganizar,dataAorganizar[dataAorganizar.length-1].categoria);

    MostrarTareas(dataAorganizar);
    rellenarInfoTareas(dataAorganizar);
    localStorage.setItem("DataTareasMaster",JSON.stringify(dataAorganizar));

});


//Variable de select categorias
/* let SelectCat = document.querySelector("#categoria");
let opcionesCat = SelectCat.querySelector("option");
let SelectCatEliminar = document.querySelector("#eliminar-categoria"); */
//Inicialmente cuando carga la pagina cargamos datos
let infoCat = [];
//variable q almacena las categorias
window.addEventListener("load",function (event) {
    if (localStorage.getItem("categorias")==null) {
        
        infoCat=EstadoInicialCats();
        localStorage.setItem("categorias",JSON.stringify(infoCat));
    }
    else{
        infoCat = JSON.parse(localStorage.getItem("categorias"));
        const ListaCat = document.querySelector("#categoria");
        updateCats(infoCat,ListaCat);//actualiza categorias seleccionables
        const selectDelCat = document.querySelector("#eliminar-categoria");
        updateCats(infoCat,selectDelCat);//actualiza lista categoria eliminar
        crearButCats(infoCat);
        if (localStorage.getItem("DataTareasMaster")==null) {
            console.log("DATATAREAS");
            dataAorganizar=estadoInicialTareas();
            TareasXcat(dataAorganizar,"0");
            MostrarTareas(dataAorganizar);
            rellenarInfoTareas(dataAorganizar);
            localStorage.setItem("DataTareasMaster",JSON.stringify(dataAorganizar));

        }
        else{
            dataAorganizar=JSON.parse(localStorage.getItem("DataTareasMaster"));
            TareasXcat(dataAorganizar,"0");
            MostrarTareas(dataAorganizar);
            rellenarInfoTareas(dataAorganizar);
        }
    }  
    
});



//Para añadir categoria

const formAddCat = document.querySelector(".add-categoria");

formAddCat.addEventListener("submit",function(event){
    event.preventDefault();
    const DataCat =Object.fromEntries(
        new FormData(event.target));
    
    let NextCat = {
        nombreCat:DataCat.categoria ,
        valorCat: `${infoCat.length}`
    };
    
    infoCat.push(NextCat);
    console.log(infoCat);
    const ListaCat = document.querySelector("#categoria");

    updateCats(infoCat,ListaCat);
    localStorage.setItem("categorias",JSON.stringify(infoCat));
    const selectDelCat = document.querySelector("#eliminar-categoria");
    updateCats(infoCat,selectDelCat);
    crearButCats(infoCat);
})


//para eliminar categoria
const formDeleteCat = document.querySelector(".delete-cat");

formDeleteCat.addEventListener("submit", function(event){
    event.preventDefault();
    const DataCat =Object.fromEntries(
        new FormData(event.target));
            
    infoCat.splice(DataCat.categoria,1);
    
    for (let i = 0; i < infoCat.length; i++) {
        infoCat[i].valorCat=`${i}`;
        
    }

    const ListaCat = document.querySelector("#categoria");
    updateCats(infoCat,ListaCat);
    const selectDelCat = document.querySelector("#eliminar-categoria");
    updateCats(infoCat,selectDelCat);
    crearButCats(infoCat);
    localStorage.setItem("categorias",JSON.stringify(infoCat));
    if(infoCat.length==0){
        infoCat=EstadoInicialCats();
        localStorage.setItem("categorias",JSON.stringify(infoCat));
    }
    
})


//Para crear los botones de las categorias
const AreaCatsButtons =document.querySelector(".projects");

AreaCatsButtons.addEventListener("click",function(event){
    const catClickeada = event.target.value;    
    TareasXcat(dataAorganizar,catClickeada);
    MostrarTareas(dataAorganizar);
    rellenarInfoTareas(dataAorganizar);
    console.log("probandobuttsCATS");
    console.log(dataAorganizar);


})

//Para los botones de cada tarea

const espacioDeTareas = document.querySelector(".work-area");

espacioDeTareas.addEventListener("click",function(event){
    
    const elementoClick= event.target;
    if(elementoClick.tagName=="BUTTON"){
        
        const catPrevia = dataAorganizar[elementoClick.value].categoria;
        dataAorganizar.splice(elementoClick.value,1);
        localStorage.setItem("DataTareasMaster",JSON.stringify(dataAorganizar));
        console.log(dataAorganizar);
        TareasXcat(dataAorganizar,catPrevia);
        MostrarTareas(dataAorganizar);
        rellenarInfoTareas(dataAorganizar);
    }


})
