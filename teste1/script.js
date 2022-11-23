
 var vetor1 = [1,1,0]
 var vetor2 = [1,3,1]
 var vetor3 = [2,2,3]

 
function comparaVetor(vetor) {
var result = 0
var calc1 = vetor[0] * vetor[1]
var calc2 = vetor[0] + vetor[2]
if (calc1 > calc2){
  result = calc2
}else{
  result = calc1
}
return result
}   
 
 
function calcula1(vetor) {

var result1 = 0;

var result1 = comparaVetor(vetor)
 return result1
}



function calcula2(vetor) {

 var resul2 = 0;
 var resul2 = comparaVetor(vetor)
     return resul2
}


function calcula3(vetor) {

 var resul3 = 0;
 var resul3 = comparaVetor(vetor)
 
     return resul3
}
 
function calculo1() {

   resposta = calcula1(vetor1);
         document.getElementById('resposta1').innerHTML = resposta;
}

function calculo2() {
                   
   resposta = calcula2(vetor2);
document.getElementById('resposta2').innerHTML = resposta;
}

function calculo3() {
                           
   resposta = calcula3(vetor3);
document.getElementById('resposta3').innerHTML = resposta;
}