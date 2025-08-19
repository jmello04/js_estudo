const todos = [
    {
        id: 1,
        descripition: "Estudar programação" ,
        isCompleted: false,

    },
   {
        id: 2,
        descripition: "treinar",
        isCompleted: true,

    },
    {
        id: 3,
        descripition: "valorant ",
        isCompleted: true,

    },
];

//const descripitionOfLastTodo = todos[2].descripition;

//console.log(descripitionOfLastTodo);
const todosJSON = JSON.stringify(todos);

const todoList = JSON.parse(todosJSON);
console.log(todoList);
