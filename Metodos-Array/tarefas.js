let tarefas = ["Estudar","Colocar comida pro Thor","Ler meu livro","Arrumar o quarto","Lavar a louça","Ir à academia","Estudar para concurso","Fazer revisão para o teste","Fazer exercícios de matemática","Comprar mercado"];

console.log("Antes do push");
console.table(tarefas);

//Adiciona novas tarefas ao array 

tarefas.push("Varrer a casa","Jogar o lixo fora");

console.log("Depois do push:");
console.table(tarefas);

//Removendo a última tarefa do array

let tarefaRemovida = tarefas.pop();


console.log("Depois do pop:");
console.table(tarefas);
console.log(`Tarefa removida: ${tarefaRemovida}
    `);

//Adicionando uma nova tarefa no início do array

tarefas.unshift("Lavar o cabelo");

console.log("Depois do unshift:");
console.table(tarefas);

//Removendo a primeira tarefa do array 

let tarefaRemovida01= tarefas.shift();

console.log("Depois do shift:");
console.table(tarefas);

console.log(`Tarefa removida: ${tarefaRemovida01}
    `);

//Verificando se uma Tarefa Existe

console.log(`A lista inclui Ir à academia? ${tarefas.includes("Ir à academia")}
`);

//Transformando a Lista em String 

console.log(`Lista de tarefas como string: ${tarefas.join(', ')}
`);

//Extraindo uma parte da lista

let elementosRemovidos = tarefas.splice(2,2);

console.log("Depois do splice:");
console.table(tarefas);
console.log(`Tarefas removidas: ${elementosRemovidos.join(',')}`);

//Alterando lista 

console.log("Antes do splice:");
console.table(tarefas);

let elementoRemovido = tarefas.splice(3,0,"Fazer almoço");
console.table(tarefas);
