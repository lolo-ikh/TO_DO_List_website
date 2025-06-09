let tasks =[];
const addTask = ()=>{
    const taskInput = document.getElementById("taskInput");
    const text = textInput.value.trim()
    if(text){
        tasks.push({text: text, complete: false});
        updateTasksList();
    }
};
const updateTasksList = () => {
    const taskList = document.getElementById("task-list")
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li")
        listItem.innerHTML = `
        <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class="checkbox" ${task.completed ? "checked": ""}/>
        <p>${task.text}</p>
        </div>
        <div class="icons">
        <i class="fas fa-pen" onClick="editTask(${index})"></i>
        <i class="fas fa-trash" onClick="deleteTask(${index})"></i>
        </div>
        </div>
        `;
        listItem.addEventListener("change", () => toggleTaskComplete(index));
        tasklist.appendChild(listItem);

    });
};
document.getElementById("newtask").addEventListener("click",function(e){
    e.preventDefault()
    addTask()
});