 let ul = document.getElementById("Ulid");
let Input = document.getElementById("ToDoInput");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    ul.innerHTML = "";
    tasks.forEach((task, index) => {
        createTaskElement(task, index);
    });
}

function createTaskElement(task, index) {
    let li = document.createElement("div");

    let buttonSULL = document.createElement("button");
    buttonSULL.textContent = "";
    li.appendChild(buttonSULL);

    let span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    let buttonDELL = document.createElement("button");
    buttonDELL.textContent = "🗑";
    li.appendChild(buttonDELL);

    ul.appendChild(li);

    buttonSULL.onclick = function() {
        span.classList.toggle("done");
        buttonSULL.classList.toggle("active");
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    buttonDELL.onclick = function() {
        li.remove();
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };

    if (task.completed) {
        span.classList.add("done");
        buttonSULL.classList.add("active");
    }
}

function ButtonClick() {
    let TextInput = Input.value.trim();
    if (TextInput == "") {
        alert('введіть задачу');
        return;
    }

    tasks.push({
        text: TextInput,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    Input.value = "";
    renderTasks();
}

Input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        ButtonClick();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    renderTasks();
});

