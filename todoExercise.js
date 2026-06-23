var tasks = [];
var totalTasks = tasks.length,completedTasks = 0;

const app = document.querySelector("#app");

const headerSection = document.createElement("h3");
headerSection.style.borderStyle = "dashed";
headerSection.style.padding = "10px";
headerSection.style.borderLeft = "none";
headerSection.style.borderRight = "none";
headerSection.innerText = "My To Do App";
app.append(headerSection);

app.append(document.createElement("br"));

const inputArea = document.createElement("div");
app.append(inputArea);
app.append(document.createElement("br"));

const inputField = document.createElement("input");
inputField.style.width = "400px";
inputField.style.marginRight = "20px";
inputArea.append(inputField);

const addButton = document.createElement("button");
addButton.innerText = "Add Task";
inputArea.append(addButton);

const createdTasksArea = document.createElement("div");


const taskStatistics = document.createElement("div");
taskStatistics.style.borderStyle = "dashed";
taskStatistics.style.padding = "10px";
taskStatistics.style.borderLeft = "none";
taskStatistics.style.borderRight = "none";

app.append(taskStatistics);

const totalTasksInfo = document.createElement("p");
totalTasksInfo.innerText = `Total tasks  :${totalTasks}`;
taskStatistics.append(totalTasksInfo);

const completedTasksInfo = document.createElement("p");
completedTasksInfo.innerText = `Completed Tasks:${completedTasks}`;
taskStatistics.append(completedTasksInfo);

app.append(document.createElement("br"));

const allTasks = document.createElement("div");
app.append(allTasks);
const taskList = document.createElement("ul");
allTasks.append(taskList);
taskList.style.listStyleType = "none";

function render(){
    taskList.innerHTML = "";
    const completedTaskCount = tasks.filter(task => task.completed == true).length;
    const totalTaskCount = tasks.length;
    totalTasksInfo.innerText = `Total tasks  :${totalTaskCount}`;
    completedTasksInfo.innerText = `Completed Tasks:${completedTaskCount}`;

    tasks.forEach((task,index) => {
        const taskListItem = document.createElement("li");
        taskList.append(taskListItem);

        taskListItem.innerText = task.text;
        if(task.completed == true)taskListItem.style.textDecoration = "line-through";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        taskListItem.prepend(checkBox);
        checkBox.style.marginRight = "10px";
        checkBox.checked = task.completed;

        checkBox.addEventListener("change",()=>{
            task.completed = checkBox.checked;
            render();
        })


        const deleteButton  = document.createElement("button");
        deleteButton.setAttribute("class","delBtn")
        taskListItem.append(deleteButton);
        deleteButton.innerText = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click",()=>{
            tasks.splice(index,1);
            render();
        })

    })

    inputField.value = ``;
}

function addTask(){
    const taskDescription = inputField.value;
    totalTasks = tasks.push({
        text : taskDescription,
        completed : false});
    render();
}

addButton.addEventListener("click",()=>addTask());
