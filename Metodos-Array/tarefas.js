let tarefas = ["Estudar","Colocar comida pro Thor","Ler meu livro","Arrumar o quarto","Lavar a louça","Ir à academia","Estudar para concurso","Fazer revisão para o teste","Fazer exercícios de matemática","Comprar mercado"];

console.log(`Antes do push: ${tarefas}`);

//Adiciona novas tarefas ao array 

tarefas.push("Varrer a casa","Jogar o lixo fora");

console.log(`Depois do push: ${tarefas}`);

//Removendo a última tarefa do array

let tarefaRemovida = tarefas.pop();


console.log(`Depois do pop: ${tarefas}`);
console.log(`Tarefa removida: ${tarefaRemovida}`);
