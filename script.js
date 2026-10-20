
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-title-input");
const taskSection = document.querySelector("#list-title").parentElement;

const taskList = document.createElement("ul");
taskSection.querySelector("p").remove();
taskSection.appendChild(taskList);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskTitle = taskInput.value.trim();

    if (taskTitle === "") {
        alert("Veuillez saisir une tâche.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskTitle;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();
});
