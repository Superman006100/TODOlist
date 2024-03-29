const inputTask = document.querySelector("#inputTask");
const btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener('click', () => {
    if (inputTask.value.trim().length == '') {
    alert("Please enter tasks to add!")
    return;

    }

    else{

        //create new division for list
        // console.log(inputTask.value)
        const listContainer = document.getElementById("list")
        const listItem = document.createElement("div");
        listItem.className = "item";
        listContainer.appendChild(listItem);

        //create new list
        const listTask = document.createElement("p");
        listTask.id = "todo-list";
        listTask.innerHTML = inputTask.value;
        listItem.appendChild(listTask);

        const btnEdit = document.createElement("button");
        btnEdit.className = "Edit";
        btnEdit.innerHTML = "Edit";
        listItem.appendChild(btnEdit);

        btnEdit.addEventListener('click', () => {
            inputTask.value = listTask.innerText;
            btnEdit.parentElement.remove();

            
            document.getElementById('btnAdd').innerText = "Update";
        })




        
    }
    inputTask.value = '';
    document.getElementById('btnAdd').innerText = "Add";
 }
)


