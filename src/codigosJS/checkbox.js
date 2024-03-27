
//Para marcar y desmarcar TODOS los
//checks de los dias semana

const diascheck= document.querySelectorAll(".frecuencia input[type=checkbox]");


function toggleChecks() {    
    diascheck[0].checked = !(diascheck[0].checked);
    for (let i = 1; i < diascheck.length; i++) {
        diascheck[i].checked = diascheck[0].checked;
    }
    
}

function revisionCheckbocks() {

    for (let i = 0; i < diascheck.length; i++) {
        if (diascheck[i].checked) {
            return true;
        }
    }
    return false;
}

export {toggleChecks,revisionCheckbocks};