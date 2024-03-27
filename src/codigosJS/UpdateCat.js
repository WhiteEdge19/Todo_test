

function updateCats(arrayCat,espaciohtml) {
    
    espaciohtml.innerHTML = ``;
    for (let i = 0; i < arrayCat.length; i++) {
        espaciohtml.innerHTML += `
        <option value="${arrayCat[i].valorCat}">${arrayCat[i].nombreCat}</option>`;
        
    }
}

export{updateCats}