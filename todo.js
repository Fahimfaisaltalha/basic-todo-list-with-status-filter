let todos=[
    {title: "learn JS",done: false},
    {title: "learn HTML",done: true},
    {title: "Do Homework",done: false},
    {title: "Understanding the array",done: true},
]

let doneTodos=[]
let onGoingTodos=[]

todos.forEach((todo)=>{
    if(todo.done){
        doneTodos.push(todo);
    }else{
       onGoingTodos.push(todo);
    }
})


console.log("✅ Done Todos: ");
doneTodos.forEach((todo)=>{
    console.log(`- ${todo.title}`);
})

console.log("\n⏳ On Going Todos: ");
onGoingTodos.forEach((todo)=>{
    console.log(`- ${todo.title}`);
})
