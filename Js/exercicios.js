/*const nome = prompt("por favor, informe seu nome:");
    alert(`bem vindo ao sistema ${nome}`);
//---------------------------------------------------------------------------

const nome1 = prompt("por favor, informe seu nome:");
const idade = prompt("por favor, informe sua idade:");
    alert (`${nome1} sua idade é ${idade} `);*/
//---------------------------------------------------------------------------
const br = prompt ("Qual é a população do Brasil:");
const china = prompt ("qual é a população da China");
    if(br>china){
        alert(`A população ${br} é a maior`);
    }
    else if(china>br){
        alert(`A população ${china} é a maior`);
    }
    else{
        alert(`ERRO! as duas populações não podem ser iguais.`);
    }
