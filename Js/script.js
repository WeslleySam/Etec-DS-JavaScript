/*Alert ("Hello World");
const nome = prompt("por favor, informe seu nome:");
const idade = prompt("por favor,informe a sua idade:")
const local = prompt("por favor, digite sua cidade natal");

alert(`Meu nome é ${nome} e tenho ${idade} anos. Moro em ${local} desde crinça`);*/
const n1 = parseInt (prompt("Informe um valor:"));
const n2 = parseInt (prompt("informe outro valor:"));
const result1 = n1+n2;
alert (`a soma dos valores é: ${result1}`);
const result2 = n1-n2;
alert (`a subtração dos valores é ${result2}`);
const result3 = n1*n2;
alert (`a multiplicação dos valores é ${result3}`);
const result4 = n1/n2;
alert (`a divisão dos valores é ${result4}`);
const result5 = n1**n2;
alert (`a exponenciação dos valores é ${result5}`);
const result6 = n1%n2;
alert (`o resto da divisão dos valores é ${result6}`);
const result = document.getElementById("result1");
result.innerText = result1;


