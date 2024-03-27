

const SelectCat = document.querySelector("#categoria");

const SelectCatEliminar = document.querySelector("#eliminar-categoria");

function EstadoInicialCats() {
    SelectCat.innerHTML=`
        <option value="0">Sin Categorizar</option>
        `;
        SelectCatEliminar.innerHTML=`
        <option value="0">Sin Categorizar</option>
        `;

        const option0= {
            nombreCat : SelectCat[0].innerText ,
            valorCat : SelectCat[0].value
        };
        let infoCatinicial =[];
        infoCatinicial.push(option0);
        return infoCatinicial ;
        
}

export{EstadoInicialCats}