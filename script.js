

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-title-input");
const taskSection = document.querySelector("#list-title").parentElement;

const taskList = document.createElement("ul");
const emptyMessage = taskSection.querySelector("p");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskTitle = taskInput.value.trim();

    if (taskTitle === "") {
        alert("Veuillez saisir une tâche.");
        return;
    }

    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskText.textContent = taskTitle;
    deleteButton.textContent = "Supprimer";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
        taskItem.remove();

        if (taskList.children.length === 0) {
            emptyMessage.hidden = false;
        }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    if (!taskList.isConnected) {
        taskSection.appendChild(taskList);
    }

    emptyMessage.hidden = true;
    taskInput.value = "";
    taskInput.focus();
});

emptyMessage.hidden = false;
