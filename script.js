const URL_BASE = "http://127.0.0.1:5004/";
const ENDPOINT_CHARADAS = "charadas/random"; // Endpoint para charada aleatória

// Função para buscar a charada e exibir no console
async function buscarCharada() {
    try {
        const resposta = await fetch(URL_BASE + ENDPOINT_CHARADAS);
        const dadosCharada = await resposta.json();
        console.log(dadosCharada.lista_charadas);  // Exibe a pergunta da charada no console
    } catch (erro) {
        console.log("Erro ao buscar charada:", erro);
    }
}

// Adicionando evento ao botão "Nova charada"
document.querySelector('.btn-charada').addEventListener('click', buscarCharada);

// Chama a função uma vez ao carregar a página
buscarCharada();
