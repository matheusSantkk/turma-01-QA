export {}

// function buscarNome(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {  
//             resolve("Juan")
//         }, 1000) // mudei para somente 1 segundo de tempo
//     })
// }

// async function executar() {
//     const nome = await buscarNome()
//     console.log(nome);
//     console.log("Fim do programa...");
// }
// executar()


function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function buscarUsuario(id: number): Promise<string> {
    await delay(5000)
    return `Usuario #${id}`
}

console.log("Inicio do programa...");
const nome = await buscarUsuario(42)
console.log(nome)