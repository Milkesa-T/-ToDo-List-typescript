interface TodoList{
    id: number;
    task:string;
    completed: boolean;
}
let todo: TodoList[] = [];
function add(task: string): void{
    const newtask: TodoList={
        id:Date.now(),
        task,
        completed:false,
    }
    todo.push(newtask);
    console.log("added: ${task}");

}
/*function remove(todo,id):{
    const foundId = todo.find(item=> item.id === id);
   
    if (foundId){
        console.log("cauthed : foundItem.title");
        return foundId.title;
    }
    console.log("error :id dont found");
}*/
function remove(id : number): void{
    const l= todo.length;
    todo = todo.filter(item=>item.id !==id);
    if (todo.length<l){
        console.log("removed: ${id}");
    }
    console.log("id not found");
}
function display(): void{
    console.log("ToDo Lists..:");
        if(todo.length===0){
            console.log("no tasks");
        }
        else{
            todo.forEach(item =>{
                console.log(`- [${item.completed ? 'x' : ' '}] ID ${item.id}: ${item.task}`);
            });
        }
    }
add("Learn TypeScript"); 
add("Build a project"); 
display();   
remove(todo[0].id); 
display();  