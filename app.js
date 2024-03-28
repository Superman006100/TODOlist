const toDoList = document.getElementById("todolist");
const itemList = document.getElementById("item");

function addTask() {
    toDoList.value.trim();
    if (toDoList.value === ''){
        alert("Please fillup the Add Tasks field.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = toDoList.value;
        itemList.appendChild(li);
    }
    toDoList.value = "";
}

