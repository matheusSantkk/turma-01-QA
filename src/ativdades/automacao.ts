import promptSync from 'prompt-sync';

const prompt = promptSync();

let automatizaveis = 0 
let naoAutomatizaveis = 0

for (let i = 1; i <= 5; i++) {
    const cenario = prompt(`Digite o ${i} cenario: `)
    const resposta = prompt(`É automatizavel? (s/n) `).toLowerCase()

    if (resposta === "sim" || resposta === 's') {
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++
    } else if (resposta === "nao" || resposta === "não" || resposta === 'n') {
        console.log(`${cenario} -> Não automatizar`);
        naoAutomatizaveis++
    } else {
        console.log("Ocorreu um erro!");
    }
}

         

console.log("Automatizaveis: " + automatizaveis);
console.log("Não Automatizaveis: " + naoAutomatizaveis);



