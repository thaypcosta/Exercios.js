diaDaSemana = prompt('Qual dia da semana?');
    if(diaDaSemana == 'Sábado') {
        alert('Bom fim de semana!');
    } else if(diaDaSemana == 'Domingo'){
        alert('Bom fim de semana!');
    } else {
    alert('Boa semana!');
    }
numero = prompt('Digite um numero:');
if(numero <0){
    alert('Negativo');
} else {
    alert('Positivo');
}
jogo = prompt('Pontuação:');
if(jogo >=100){
    alert('Parabéns, você venceu!');
} else{
    alert('Tente novamenete para ganhar.');
}
let saldoconta = 500
alert(`Seu saldo é R$${saldoconta}.`);

usuario = prompt('Insira seu nome:');
alert(`Boas-vindas, ${usuario}.`);