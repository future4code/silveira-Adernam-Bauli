/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!");

const jogar = () => {
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const carta1Pc = comprarCarta();
   const carta2Pc = comprarCarta();

   let pontuacaoJogador = carta1.valor + carta2.valor;
   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor;

   console.log("Jogador...: Cartas:", carta1.texto, carta2.texto, "--- Pontuação Jogador...:", pontuacaoJogador);
   console.log("Computador: Cartas:", carta1Pc.texto, carta2Pc.texto, "--- Pontuação Computador:", pontuacaoPc);

   if (pontuacaoJogador > pontuacaoPc) {
      console.log("Parabéns, você venceu o computador!");
      let confirm3 = confirm("Deseja jogar novamente ?");
      if (confirm3) {
         jogar();
      } else {
         console.log("O jogo acabou.");
      }
   } else if (pontuacaoPc > pontuacaoJogador) {
      console.log("O computador venceu :(");
      let confirm2 = confirm("Deseja jogar novamente ?");
      if (confirm2) {
         jogar();
      } else {
         console.log("O jogo acabou.");
      }
   } else if (pontuacaoJogador === pontuacaoPc) {
      console.log("O jogo empatou.");
      let confirm4 = confirm("Deseja jogar novamente ?");
      if (confirm4) {
         jogar();
      } else {
         console.log("O jogo acabou.");
      }      
   }
}
const rodada = confirm("Deseja iniciar uma nova rodada ?");

if (rodada) {
   jogar();
} else {
   console.log("O jogo acabou.");
}