let totalGeral = 0;
let valorGeral = document.getElementById('valor-total');

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnitario = produto.split('R$')[1];
    let precoTotal = parseInt(precoUnitario * quantidade);
    let carrinhoTotal = document.getElementById('lista-produtos');
    carrinhoTotal.innerHTML = carrinhoTotal.innerHTML + `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotal}</span>
    </section>`;
    totalGeral = totalGeral + precoTotal;
    valorGeral.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;
    console.log(totalGeral)
    console.log(valorGeral)
}

function limpar() {
    let carrinhoTotal = document.getElementById('lista-produtos');
    carrinhoTotal.innerHTML = '';
    totalGeral = 0;
    valorGeral.innerHTML = `R$${totalGeral}`;
    console.log(totalGeral)
    console.log(valorGeral)
}

// FUNCOES CHAMADAS QUANDO INICIA
limpar();
