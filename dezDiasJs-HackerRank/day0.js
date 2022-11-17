/* Objetivo

Hoje, estamos discutindo tipos de dados. Confira o tutorial em anexo para mais detalhes.
Tarefa

Variáveis ​​nomeadas,, esão declarados para você no editor abaixo. Você deve usar ooperador para executar a seguinte sequência de operações:

Convertera um número inteiro (tipo de número) e, em seguida, some-o come imprima o resultado em uma nova linha usando console.log.
Convertera um número de ponto flutuante (tipo de número) e, em seguida, some-o come imprima o resultado em uma nova linha usando console.log.
Imprima a concatenação deeem uma nova linha usando console.log. Observe que deve ser impresso primeiro.
Formato de entrada

Tipo de dados	Parâmetro	Descrição
string		A representação de string de um número inteiro com o qual você deve somar.
string		A representação de string de um número de ponto flutuante com o qual você deve somar.
string		Uma sequência de uma ou mais palavras separadas por espaço que você deve anexar.
Formato de saída

Imprima as três linhas de saída a seguir:

Na primeira linha, imprima a soma dee a representação inteira de.
Na segunda linha, imprima a soma dee a representação de ponto flutuante de.
Na terceira linha, imprimaconcatenado com. Você deve imprimirantes da.
Exemplo de Entrada 0

12 
4.32 
é o melhor lugar para aprender e praticar codificação!
Saída de amostra 0

16 
8.32 
HackerRank é o melhor lugar para aprender e praticar codificação!
Explicação 0

Quando somamos os inteiros, obtemos o inteiro.
Quando somamos os números de ponto flutuante, Nós temos. Quando concatenamos HackerRankcom is the best place to learn and practice coding!, obtemos HackerRank is the best place to learn and practice coding!.
Você não passará neste desafio se tentar atribuir os valores do Caso de Amostra às suas variáveis ​​em vez de seguir as instruções acima.

 */

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank ';

  // Solução
  console.log(firstInteger * firstDecimal);
  console.log(firstDecimal + parseFloat(secondDecimal));
  console.log(firstString + secondString);
}


function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();

  performOperation(secondInteger, secondDecimal, secondString);
}