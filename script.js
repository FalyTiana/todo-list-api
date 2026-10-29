
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-title-input");
const taskSection = document.querySelector("#list-title").parentElement;
const emptyMessage = taskSection.querySelector("p");

const taskList = document.createElement("ul");
taskSection.appendChild(taskList);

const STORAGE_KEY = "taskflow-tasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach(function (task, index) {
        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        const deleteButton = document.createElement("button");

        taskText.textContent = task;
        deleteButton.textContent = "Supprimer";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });

    emptyMessage.hidden = tasks.length > 0;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskTitle = taskInput.value.trim();

    if (taskTitle === "") {
        alert("Veuillez saisir une tâche.");
        return;
    }

    tasks.push(taskTitle);
    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

renderTasks();
