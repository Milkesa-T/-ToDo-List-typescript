var todo = [];
function add(task) {
    var newtask = {
        id: Date.now(),
        task: task,
        completed: false,
    };
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
function remove(id) {
    var l = todo.length;
    todo = todo.filter(function (item) { return item.id !== id; });
    if (todo.length < l) {
        console.log("removed: ${id}");
    }
    console.log("id not found");
}
function display() {
    console.log("ToDo Lists..:");
    if (todo.length === 0) {
        console.log("no tasks");
    }
    else {
        todo.forEach(function (item) {
            console.log("- [".concat(item.completed ? 'x' : ' ', "] ID ").concat(item.id, ": ").concat(item.task));
        });
    }
}
add("Learn TypeScript");
add("Build a project");
display();
remove(todo[0].id);
display();
