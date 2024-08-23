/*(if) "sempre vai ser primeiro" 
(Else if) "será os intermediarios" 
(Else) "sempre vai ser o Ultimo"*/

const n1 = parseInt (prompt("Informe o 1º número:"));
const n2 = parseInt (prompt("Informe o 2º número:"));
const n3 = parseInt (prompt("Informe o 3º número:"));


//Calular se todos os números são iguais, ou se existem números diferentes


if(n1>n2){
   alert(`o maior número é ${n1}`);
   
} 
else if(n2>n1){
    alert(`o maior número é ${n2}`);
}

else if(n2>n3){
    alert (`o maior número é ${n2}`);
}
else if (n3>n2){
    alert(`o maior número é ${n3}`);
}


else if(n3>n1){
    alert (`o maior número é ${n3}`);
}
else if(n1>n3){
    alert(`o maior número é ${n1}`);
}
else{
    alert("ERRO!");
}
