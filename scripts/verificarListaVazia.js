const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
console.log(mensagemListaVazia)

function verificarListaVazia(listaDeCompras) {
    const itensDaLista  = listaDeCompras.querySelector ("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;