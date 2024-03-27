
function crearButCats(arrayCats) {
    const espacioButtonsCat = document.querySelector(".projects");
    espacioButtonsCat.innerHTML=``;
    for (let i = 0; i < arrayCats.length; i++) {
        espacioButtonsCat.innerHTML+=`
        <button value="${arrayCats[i].valorCat}">${arrayCats[i].nombreCat}</button> `;
        console.log(arrayCats[i])
    }
}
export{crearButCats}