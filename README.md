# Tarefas Sobre Métodos de Array ╰(*°▽°*)╯

Objetivo: Criar um sistema simples de gerenciamento de tarefas, onde você usará diferentes operações para modificar, consultar e organizar as tarefas.

## Adicionando um array  

let tarefas = ["Estudar","Colocar comida pro Thor","Ler meu livro","Arrumar o quarto","Lavar a louça","Ir à academia","Estudar para concurso","Fazer revisão para o teste","Fazer exercícios de matemática","Comprar mercado"];

## Adicionando Novas Tarefas Com O Método Push

tarefas.push("Varrer a casa","Jogar o lixo fora");

## Removendo a Última Tarefa Com o Método Pop

let tarefaRemovida = tarefas.pop();

## Adicionando Uma Tarefa no Início Com O Método Unshift

tarefas.unshift("Lavar o cabelo");

## Removendo a Primeira Tarefa Com O Método Shift

let tarefaRemovida01= tarefas.shift();

## Verificando Se Uma Tarefa Existe Com O Método Includes

tarefas.includes("Ir à academia")

## Transformando a Lista em String Com O Método Join

tarefas.join(', ')

## Extraindo As Tarefas do índice 2 ao 4 Com O Método Splice

tarefas.splice(2,2)

## Alterando a Lista Com O Método Splice

tarefas.splice(3,0,"Fazer almoço")

## Concatenando Tarefas Com o Método Concat

tarefas.concat(tarefasAdicionais)

## Transformando as Tarefas Com O Método Map

tarefas.map(tarefa=>"Fazer: " + tarefa)

## Filtrando Tarefas Com O Método Filter

tarefas.filter(tarefas => tarefas.length <15)

## Ordenando as Tarefas Com O Método Sort

tarefas.sort()

## Invertendo a Ordem das Tarefas Com O Método Reverse

tarefas.reverse()
