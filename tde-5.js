function next(){
  document.write(`<br>`)
}
document.write(`<br>1. Escreva uma função que retorne o cubo de um número fornecido pelo usuário.`)
next()
n = Number(prompt('Digite o numero: '))
function cbrt(n){
  return Math.cbrt(n);
}
next()
document.write(`<br>O número digitado foi: ${n}`)
document.write(`<br>A raiz cúbica: ${cbrt(n)}`)
next()
document.write(`<br>2. Escreva uma função que retorne a área de um triângulo, a partir dos valores de base.`)

next()
b = +(prompt('digite a base do triângulo: '))
h = +(prompt('Digite a altura do triângulo: '))
function triagle(b,h){
  return (b * h) / 2;
}
document.write(`<br>A base do triângulo é igual: ${b}`)
document.write(`<br>A altura do triângulo é igual: ${h}`)
document.write(`<br>A area do triângulo é igual: ${triagle(b,h)}`)

next()

document.write(`<br>3. Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. 
Use a fórmula: M = C * (1+i)t
<br>
Onde:
<br>
■ C = Capital inicial investido<br>
■ i = Taxa de juros, em percentual<br>
■ t = Tempo do investimento, em meses<br>
Exiba o resultado com duas casas decimais.`)
next()
c = +(prompt('Digite o montante do capital inicial ivenstido: '))
i = +(prompt('Digite taxa de juros ao mês: '))
t = +(prompt('Digite o tempo em meses do Capital investido: '))

function invest(c,i,t){
  invest = c * (1 + i) * t
  return invest;
}

next()
document.write(`<br>C = Capital inicial investido: R$ ${c.toFixed(2)}`)
document.write(`<br>i = Taxa de juros, em percentual: ${i.toFixed(2)} %`)
document.write(`<br>t = Tempo do investimento, em meses: ${t} meses`)
document.write(`<br>O retorno do capital investido é: R$ ${invest(c,i,t).toFixed(2)}`)

next()
document.write(`<br>4. Criar uma função que junte dois arrays e retorno o resultado como um novo array`)

next()

viagem = ['Hotel', 'Passeios', 'Feirinha', 'Jantar Romântico']
adicionais = ['Passagem aérea', 'Translado', 'Cotação da moeda','Guia turistico']

ferias = viagem.concat(adicionais).sort().join(' <br> ')

document.write(`<br>No planejamento das férias temos que colocar os seguintes itens:<br> ${ferias}`)

next()
document.write(`<br>5. Escreva um programa que receba dois números reais e um código de seleção do usuário. 
<br>Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente digitados e mostrar o resultado; 
<br>se o código de seleção for 2, os números deverão ser multiplicados; 
<br>se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo.`)
next()
valueone = Number(prompt('Digite o primeiro valor: '))
valuetwo = Number(prompt('Digite o segundo valor: '))

selector = prompt('Digite os códigos - 1 somar, 2 - multiplicar, 3 - dividir.')
switch(selector){
  case '1':
          sum = valueone + valuetwo
          document.write(`A soma é igual: ${sum}`)
  break;
  case '2':
          multiplication = valueone * valuetwo
          document.write(`A multiplicação é igual: ${multiplication}`)
  break;
  case '3':
          division = valueone / valuetwo
          document.write(`A divisão é igual: ${division}`)
  break;
  default: document.write(`Número Inválido.`)
}

next()
document.write(`<br>6. Um número é dito perfeito quando ele é igual a soma de seus fatores. Por exemplo, os fatores de 6 são 1, 2 e 3 (ou seja, podemos dividir 6 por 1, por 2 e por 3) e 6=1+2+3, logo 6 é um número perfeito. Escreva uma função que recebe um inteiro e dizer se é perfeito ou não. Em outra função, peça um inteiro n e mostre todos os números perfeitos até n.`)

next()
x = parseInt(prompt('Digite um número: '))
res = perfect(x)
function perfect(x){
  for(i=1;i<x;i--){
    if(x%i!= 0){
      i=0
      document.write(`<br>O valor é imperfeito. ${i}`)
    }
    if(x%i==6){
      p=x
      document.write(`<br>O valor é perfeito. ${p}`)
      return;
    }
    }
}

next()

document.write(`7. Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.`)

////taxa de imposto - qtd porcentagem - custo em R$.

value = Number(prompt('Digite o valor do produto: '))
juros = parseFloat(prompt('Digite a porcentagem de imposto (0 a 100): '))

res = taxaImposto(value,juros)
t = somaImposto(value,juros)

document.write(`<br>Valor do produto R$ ${value.toFixed(2)}`)
document.write(`<br>O valor do imposto é: ${res.toFixed(0)}%`)
document.write(`<br>O valor do do produto com imposto é: R$ ${t.toFixed(2)}`)

function taxaImposto(value,juros){
  resultado = value * (juros/100)
  return resultado
}
function somaImposto(value,juros){
  resultado = value + (value * (juros/100))
  return resultado
}
next()
document.write(`Good bye`)