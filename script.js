
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-title-input");
const taskSection = document.querySelector("#list-title").parentElement;
const emptyMessage = taskSection.querySelector("p");

const taskList = document.createElement("ul");
taskSection.appendChild(taskList);

const STORAGE_KEY = "taskflow-tasks";

let tasks = [];

try {
    const savedTasks = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (Array.isArray(savedTasks)) {
        tasks = savedTasks
            .filter(task =>
                typeof task === "string" ||
                (task && typeof task.title === "string")
            )
            .map(task => {
                if (typeof task === "string") {
                    return { title: task, completed: false };
                }

                return {
                    title: task.title,
                    completed: task.completed === true
                };
            });
    }
} catch (error) {
    console.error("Impossible de charger les tâches :", error);
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach(function (task, index) {
        const taskItem = document.createElement("li");
        const taskLabel = document.createElement("label");
        const checkbox = document.createElement("input");
        const taskText = document.createElement("span");
        const actions = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        taskItem.className = task.completed ? "task-item completed" : "task-item";
        taskLabel.className = "task-label";

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Marquer comme terminée");

        taskText.className = "task-text";
        taskText.textContent = task.title;

        actions.className = "task-actions";

        editButton.type = "button";
        editButton.textContent = "Modifier";
        editButton.className = "edit-button";

        deleteButton.type = "button";
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "delete-button";

        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        editButton.addEventListener("click", function () {
            const newTitle = prompt("Modifier la tâche :", task.title);

            if (newTitle === null) {
                return;
            }

            const cleanedTitle = newTitle.trim();

            if (cleanedTitle === "") {
                alert("Le titre ne peut pas être vide.");
                return;
            }

            tasks[index].title = cleanedTitle;
            saveTasks();
            renderTasks();
        });

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        taskLabel.appendChild(checkbox);
        taskLabel.appendChild(taskText);

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        taskItem.appendChild(taskLabel);
        taskItem.appendChild(actions);

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

    tasks.push({
        title: taskTitle,
        completed: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

renderTasks();
