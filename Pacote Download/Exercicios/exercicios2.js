/**
 * 11) Elabore uma função que recebe um ano e calcula se ele é
 * ano bissexto, imprimindo no console a mensagem e retornando
 * true ou false.
 */
 function anoBissexto(ano) {
    
    if(ano % 400 == 0){
        return `O ano de ${ano} é bissexto!`
   } else if (ano % 100 == 0) {
        return `O ano de ${ano} não é bissexto!`
   } else if (ano % 4 == 0) {
        return `O ano de ${ano} é bissexto`
   } else {
        return `O ano de ${ano} não é ano bissexto`
   }   
   
}
console.log("###### Questão 11 ######");
console.log(anoBissexto(2020));
console.log();


/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */
function fatorial(numero){
     let novoNumero = 1;
     for(let i = 1; i <= numero; i++) {
          novoNumero *= i;
     }
     return novoNumero;
}
console.log("###### Questão 12 ######");
console.log(fatorial(10));
console.log();

/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou 
 * dia inválido dado o número referente ao dia. Considere que domingo é o
 * dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */
function diaUtil(numero) {
     switch(numero){
          case 1:
               return 'Domingo!';
               break;
          case 2:
               return 'Segunda-feira!';
               break;
          case 3:
               return 'Terça-feira!';
               break;
          case 4:
               return 'Quarta-feira!';
               break;
          case 5:
               return 'Quinta-feira!';
               break;
          case 6:
               return 'Sexta-feira!';
               break;
          case 7:
               return 'Sábado';
               break;
          default:
               return 'Dia Inválido. Retorne outro número'
     }
}
console.log("###### Questão 13 ######");
console.log(diaUtil(1));
console.log();

/**
 * 14) Crie uma estrutura condicional switch que receba uma string com
 * o nome de uma fruta e que possua três casos: 
 * Caso maçã, retorne no console "Não vendemos essa fruta aqui"
 * Caso kiwi, retone "Estamos com escassez de kiwis"
 * Caso melancia, retorne "Aqui está, são 3 reais o quilo"
 * Teste com estas três opções. Crie também um default, que retornará uma
 * mensagem de erro no console.
 */
function opcoesDeFrutas(fruta) {
     let nome = 'fruta'.toLowerCase();
     switch(fruta) {
          case 'maçã':
          case 'maça':
          case 'macã':
          case 'maca':
               return "Não vendemos essa fruta aqui";
               break;
          case 'kiwi':
               return "Estamos com escassez de kiwis";
               break;
          case 'melancia':
               return "Aqui está, são R$ 3,00 o quilo"
               break;
          default:
               return "Erro. Informe outra fruta"
     }
}
console.log("###### Questão 14 ######");
console.log(opcoesDeFrutas('kiwi'));
console.log();


/**
 * 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar 
 * um carro hatch, e a revenda possui, além dos carros hatch, sedans, 
 * motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
 * comprador queira o hatch, retorne "Compra efetuada com sucesso". Nas outras 
 * opções, retorne "Tem certeza que não prefere este modelo?". Case seja especificado 
 * um modelo que não esteja disponível, retorne no console: "Não trabalhamos com 
 * esse tipo de automóvel aqui".
 */
function escolhaDeCarro(carro) {
     switch(carro){
          case 'hatch':
               return "Compra efetuada com sucesso!";
               break;
          case 'sedan':
          case 'motocicleta':
          case 'caminhonete':
               return "Tem certeza que não prefere este modelo?";
               break;
          default:
               return "Não trabalhamos com esse tipo de automóvel aqui!"
     }
}
console.log("###### Questão 15 ######");
console.log(escolhaDeCarro('caminhonete'));
console.log();


/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule
 * uma calculadora básica. O programa recebe como parâmetros dois 
 * valores numéricos e uma string referente à operação e a realize
 * com os valores numéricos na ordem que foram inseridos.   
 */
function calculadoraBasica(numero1, operador, numero2) {
     switch(operador) {
          case '+':
               return `${numero1} + ${numero2} = ${numero1 + numero2}`;
               break;
          case '-':
               return `${numero1} - ${numero2} = ${numero1 - numero2}`;
               break;
          case '*':
               return `${numero1} * ${numero2} = ${numero1 * numero2}`;
               break;
          case '/':
               return `${numero1} / ${numero2} = ${numero1 / numero2}`;
               break;
          default:
               return 'Operação inválida!'
     }
}
console.log("###### Questão 16 ######");
console.log(calculadoraBasica(2, 'm', 3));
console.log();


/**
 * 17) Um funcionário irá receber um aumento de acordo com seu 
 * plano de trabalho, de acordo com a tabela abaixo:
 *      | Plano | Aumento |
 *      |  A    |   10%   |
 *      |  B    |   15%   |
 *      |  C    |   20%   |
 * Faça uma função que leia o plano de trabalho e o salário atual
 * de um funcionário e calcule e imprima seu novo salário. Use a 
 * estrutura Switch e faça um caso default que indique que o plano
 * é inválido.  
 */
function aumentoSalarial(plano, salario) {
     switch(plano) {
          case 'a':
               return salario * 1.1;
               break;
          case 'b':
               return salario * 1.15;
               break;
          case 'c':
               return salario * 1.2;
               break;
          default:
               return 'Plano inválido!';
     }
}
console.log("###### Questão 17 ######");
console.log(aumentoSalarial('a', 1000));
console.log();


/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva
 * esse número por extenso. Use o comando Switch. Crie um caso 
 * default que escreva 'Número fora do intervalo'.
 */
function numeroPorExtenso(numero) {
     switch(numero) {
          case 0:
               return 'Zero!';
               break;
          case 1:
               return 'Um!';
               break;
          case 2:
               return 'Dois!';
               break;
          case 3:
               return 'Três!';
               break;
          case 4:
               return 'Quatro!';
               break;
          case 5:
               return 'Cinco!';
               break;
          case 6:
               return 'Seis!';
               break;
          case 7:
               return 'Sete!';
               break;
          case 8:
               return 'Oito!';
               break;
          case 9:
               return 'Nove!';
               break;
          case 10:
               return 'Dez!';
               break;
          default:
               return 'Número fora do intervalo!';
     }
}
console.log("###### Questão 18 ######");
console.log(numeroPorExtenso(-1));
console.log();


/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 *       | Código | Descrição do Produto |  Preço  |
 *       |   100  |    Cachorro Quente   | R$ 3,00 |
 *       |   200  |  Hambúrguer Simples  | R$ 4,00 |
 *       |   300  |     Cheeseburguer    | R$ 5,50 |
 *       |   400  |         Bauru        | R$ 7,50 |
 *       |   500  |      Refrigerante    | R$ 3,50 |
 *       |   600  |          Suco        | R$ 2,80 |
 * Implemente uma função que receba como parâmetros o código do item
 * pedido, a quantidade e calcule o valor a ser pago por aquele lanche.
 * Considere que a cada execução somente será calculado um item. Use o 
 * comando Switch. Crie um caso default para produto inexistente.
 */
function cardapioLanche(codigo, qtd) {
     switch(codigo) {
          case 100:
               return `O valor do lanche é de R$ ${qtd * 3}`
               break;
          case 200:
               return `O valor do lanche é de R$ ${qtd * 4}`
               break;
          case 300:
               return `O valor do lanche é de R$ ${qtd * 5.5}`
               break;
          case 400:
               return `O valor do lanche é de R$ ${qtd * 7.5}`
               break;
          case 500:
               return `O valor do lanche é de R$ ${qtd * 3.5}`
               break;
          case 600:
               return `O valor do lanche é de R$ ${qtd * 2.8}`
               break;
          default:
               return `Produto Inexistente!`
     }
}
console.log("###### Questão 19 ######");
console.log(cardapioLanche(400, 10));
console.log();

/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias
 * para entregar o mínimo de cédulas para um determinado valor informado 
 * pelo usário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1. Seu
 * programa deve mostrar apenas as notas utilizadas.
 */
function cedulas(valor) {
     
}
console.log("###### Questão 20 ######");
console.log(cedulas());
console.log();