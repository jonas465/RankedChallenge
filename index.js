// Função que calcula o saldo e determina o nível

function calcularNivel(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorne a mensagem com o saldo e o nível do herói

    return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
  }
  
  // Exemplo de uso da função com 15 vitórias e 5 derrotas

  let resultado = calcularNivel(15, 5);
  
  console.log(resultado);
  