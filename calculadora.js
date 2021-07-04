const query = require('synchronous-user-input');
const valor = parseFloat(query("Informe o valor que deseja investir: "));
console.log(" ");

let visualizacao = valor * 30
let contador = 0
let temp = 0 

clicam = valor * 3.6
if (clicam <=19){
    console.log("Não tem cliques");
}else {
    compartilham = valor * 0.54
    novasVisu = 21.6 * 12

        while(contador < 4){
            reClique = (novasVisu * 4);
            temp = reClique + temp
            contador += 1
        } 
    total = clicam + temp
}

console.log("A visualização original foi de: " + visualizacao.toFixed(2) + " pessoas. Dessas, " + clicam.toFixed(2) + " clicaram");
console.log(compartilham.toFixed(2) + " pessoas compartilharam e houve " + novasVisu.toFixed(2) + " novas visualizações");
console.log(temp.toLocaleString() + " Essa foi a quantidade de novos cliques.");
console.log(" ");
console.log("Com " + valor + " investido, o alcance foi : " + total.toFixed(1));