/**
 * 01) Crie uma função que dado dois valores (passados 
 * como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */
function operations(x, y){
    return `Soma: ${x + y}
Subtração: ${x - y}
Multiplicação: ${x * y}
Divisão: ${x/y}`
}
console.log("###### Questão 01 ######");
console.log(operations(10, 2));
console.log();



/**
 * 02) Crie uma função que recebe os comprimentos dos três
 * lados de um triângulo e retorne a sua classificação
 * quanto ao tamanho dos seus lados.
 */
function triangle(x, y, z){
    if(x + y > z && x + z > y && y + z > x){
        if(x == y && x == z){
            return `Os lados ${x}, ${y}, ${z} formam um triângulo Equilátero.`
        }else if( x != y && x != z && y != z){
            return `Os lados ${x}, ${y}, ${z} formam um triângulo Escaleno.`
        }else{
            return `Os lados ${x}, ${y}, ${z} formam um triângulo Isósceles.`
        }
    }else{
        return `Os lados ${x}, ${y}, ${z} não formam um triângulo.`
    }
}
console.log("###### Questão 02 ######");
console.log(triangle(5, 7, 2));
console.log();


/**
 * 03) Crie uma função que recebe dois parâmetros, base e
 * expoente, e retorne a base elevada ao expoente.
 */
function exponencial(base, expoente){
    /**
     * Fist way =>  let resultado = base ** expoente;
     * Second Way => let resultado = Math.pow(base, expoente);
     */
    let resultado = 1;
    for(let i = 1; i <= expoente; i++){
        resultado *= base;
    }
    
    return resultado;
}
console.log("###### Questão 03 ######");
console.log(exponencial(5,3));
console.log();


/**
 * 04) Crie uma função que irá receber dois valores, o dividendo
 * e o divisor. A função deverá imprimir o resultado e o resto da
 * divisão destes dois valores.
 */
function quocienteRestoDaDivisao (dividendo, divisor){
    let divisao = dividendo / divisor;
    let resto = dividendo % divisor;
    return `O resultado da divisão é: ${divisao}
O resto da divisão é: ${resto}`

}
console.log("###### Questão 04 ######");
console.log(quocienteRestoDaDivisao(7, 5));
console.log();



/**
 * 05) Desenvolva uma função JavaScript para que ela receba
 * um valor como 0.30000000000000004 e retorne R$ 0,30.
 */
function conversao(numero1, numero2){
    let soma = numero1 + numero2;
    let resultadoFinal = parseFloat(soma).toFixed(2).replace('.', ',');
    return `R$ ${resultadoFinal}`;
}
console.log("###### Questão 05 ######");
console.log(conversao(0.1, 0.2));
console.log();



/**
 * 06) Elabore duas funções que recebam três parâmetros: capital inicial,
 * taxa de juros e tempo de aplicação. A primeira função retornará o 
 * montante da aplicação financeira sob o regime de juros simples e a 
 * segunda retornará o valor da aplicação sob o regime de juros compostos.
 */
function jurosSimples(capitalInicial, taxaJuros, tempo){
    let valorMensal = (capitalInicial * taxaJuros) / 100;
    let inicio = 0;

    for(let i = 1; i <= tempo; i++){
        inicio += valorMensal;
    } 
    return `Montante a Juros Simples: R$ ${capitalInicial + inicio}`
}

function jurosCompostos(capitalInicial, taxaJuros, tempo){
    let valorMensal = (capitalInicial * taxaJuros) / 100;

    for(let i = 1; i <= tempo; i++){
        capitalInicial = capitalInicial + ((capitalInicial * valorMensal) / 100);
    } 
    return `Montante a Juros Compostos: R$ ${capitalInicial}`
}
console.log("###### Questão 06 ######");
console.log(jurosSimples(100, 10, 5));
console.log(jurosCompostos(100, 10, 5));
console.log();


/**
 * 07) Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 * Para isso a função deve receber três parâmetros. Como retorno deve ser 
 * passado um vetor que tem 2 valores um para cada possível resultado,
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne,
 * ao invés do vetor, uma string com a frase: "Delta é negativo". 
 */
function calculoBhaskara(a, b, c){
    let bhaskara = Math.pow(b, 2) - 4 * a * c;
    let raiz1 = -b - Math.sqrt(bhaskara)/2*a; 
    let raiz2 = -b + Math.sqrt(bhaskara)/2*a;
    let vetor = [];

    if(bhaskara >= 0){
        vetor.push(raiz1, raiz2);
        return vetor;    
    }else{
        return 'Delta é negativo'
    } 
}
console.log("###### Questão 07 ######");
console.log(calculoBhaskara(1, -5, 4));
console.log();


/**
 * 08) Dada uma lista string = "Pontuação1 Pontuação2 Pontuação3 etc",
 * escreva uma função que ao recebê-la irá comparar os valores um a um
 * e irá retornar um vetor com o número de vezes que ele bateu seu recorde 
 * de maior número de pontos e quando fez seu pior jogo.
 */
const pontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1";
function trabalhandoComStrings(pontuacao){
    let meuArray = pontuacao.split(", ");
    let quantidade = 0;
    let indice = 1;
    let maiorPonto = meuArray[0];
    let menorPonto = meuArray[0];
    let vetor = [];

    for(let i = 1; i < meuArray.length; i++){
        if(meuArray[i] > maiorPonto){
            maiorPonto = meuArray[i];
            quantidade++;
        }else if(meuArray[i] < menorPonto){
            menorPonto = meuArray[i];
            indice = i + 1;
        }
    }

    vetor.push(quantidade, indice);

    return vetor;
}
console.log("###### Questão 08 ######");
console.log(trabalhandoComStrings(pontuacao));
console.log();


/**
 * 09) Construa uma função para um sistema de notas de uma instituição 
 * que possui a seguinte política de classificação: Todo aluno recebe 
 * uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As 
 * notas possuem a seguinte regra de arredondamento: se a diferença 
 * entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a
 * nota para esse próximo múltiplo de 5.
 */
let proximoMultiploDeCinco = (nota) => {
    if (nota < 0 || nota > 100) { return `A nota ${nota} é inválida!`; }
    if (nota < 40) { return `Você está reprovado!`; }

    // O método Math.ceil(x) retorna o menor nº inteiro maior ou igual a 'x' 
    let notaReal = Math.ceil(nota / 5) * 5;

    return `Sua pontuação é ${notaReal}`;
}   
console.log("###### Questão 09 ######");
console.log(proximoMultiploDeCinco(91));
console.log();


/**
 * 10) Crie uma função que verifca se um número inteiro passado como
 * parâmetro é divisível por 3 e retorne true ou false.
 */
function divisivelPorTres(numero) {
    const conversao = parseInt(numero);
    let divisao = conversao % 3;
    
    if (divisao !== 0) {
        return false;
    } else if (divisao == 0) {
        return true;
    }
}
console.log("###### Questão 10 ######");
console.log(divisivelPorTres(170));
console.log();