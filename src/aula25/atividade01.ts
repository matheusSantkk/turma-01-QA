const resultado: string[] = ["Passou", "Falhou", "Passou", "Falhou",]

let aprovados = 0
let reprovados = 0

for (let i = 0; i < resultado.length; i++) {
    const element = resultado[i];
    if (element === 'Passou') {
        aprovados++
    } else {
        reprovados++
    }
}

console.log(aprovados + " Alunos aprovados")  
console.log(reprovados + " Alunos reprovados")