//pegando as quantidades disponíveis de cada tipo
let pistaDisponivel = document.getElementById('qtd-pista').textContent;
let superiorDisponivel = document.getElementById('qtd-superior').textContent;
let inferiorDisponivel = document.getElementById('qtd-inferior').textContent;

function descontarQtd(tipo, quantidade) {
    if (tipo === 'inferior') {
        inferiorDisponivel -= quantidade;

    } else if (tipo == 'superior') {
        superiorDisponivel -= quantidade;
    } else {
        pistaDisponivel -= quantidade;
    }
}

function comprar() {
    //pegando o tipo do ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    console.log('Tipo: ' + tipoIngresso);
    //pegando a quantidade a ser comprada
    let quantidadeCompra = Number(document.getElementById('qtd').value);
    console.log('Qtd: ' + quantidadeCompra);
    
    console.log('pistaDisponivel: ' + pistaDisponivel); 
    console.log('superiorDisponivel: ' + superiorDisponivel); 
    console.log('inferiorDisponivel: ' + inferiorDisponivel); 

    if (quantidadeCompra.length == 0 || quantidadeCompra == 0) {
        window.alert('Informe uma quantidade válida.');
        console.log('aviso');
    } else {
        if (tipoIngresso == 'inferior' && quantidadeCompra > Number(inferiorDisponivel)) {
            window.alert('Quantidade indisponível para cadeira inferior!');
        } else if (tipoIngresso == 'superior' && quantidadeCompra > Number(superiorDisponivel)) {
            window.alert('Quantidade indisponível para cadeira superior!');
        } else if (tipoIngresso == 'pista' && quantidadeCompra > Number(pistaDisponivel)) {
            window.alert('Quantidade indisponível para pista!');
        } else {
            descontarQtd(tipoIngresso, quantidadeCompra);
        }

        //precisa entender pq não está atualizando na página a quantidade disponível depois de chamar a função descontarQtd

        console.log('ok');
    }
}