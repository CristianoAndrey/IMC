    function  IMCCalcular() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var calculado = document.getElementById('IMCCalculado');
    var Resultado = peso/(altura**2)
    if(Resultado < 18.5){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Magreza";
    } 
    else if(Resultado > 18.5 & Resultado < 24.9){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Normal"
    } 
    else if(Resultado > 25 & Resultado < 29.9){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Sobrepeso"
 
    } 
    else if(Resultado > 30 & Resultado < 34.9){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Obesidade grau I"
     
    } 
    else if(Resultado > 35 & Resultado < 39.9){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Obesidade grau II"
       
    } 
    else if(Resultado > 40){
        calculado.innerText= "Seu IMC: " + Resultado + " Categoria: Obesidade grau III"
    } 
}
