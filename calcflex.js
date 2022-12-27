var etanol,gasolina;
function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="Etanol.jpg";   
    }else{ 
        document.getElementById("status").src="Gasolina.jpg";
        }
}

function resetar(){
        document.getElementById("status").src="Neutro.jpg";
}



