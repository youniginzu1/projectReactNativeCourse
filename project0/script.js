const newTask = document.querySelector(".newTask");
const todoList = document.querySelector(".todoList");
const allTask = document.querySelector(".allTask");
const pedTask = document.querySelector(".pedTask");
const comTask = document.querySelector(".comTask");
const allTaskNum = document.querySelector("#allTask");
const pedTaskNum = document.querySelector("#pedTask");

newTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && newTask.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onChange="toggleCheck(this)">
      <span>${newTask.value}</span>
      <span class="delete" onClick="deleteTask(this)">
        <i class="fa-solid fa-trash-can"></i>
      </span>`;
    todoList.appendChild(li);
    allTaskNum.textContent = parseInt(allTaskNum.textContent) + 1;
    pedTaskNum.textContent = parseInt(pedTaskNum.textContent) + 1;
    newTask.value = "";
  }
});

function clearAllTasks() {
  while (todoList.lastElementChild) {
    todoList.removeChild(todoList.lastElementChild);
  }
  allTaskNum.textContent = 0;
  pedTaskNum.textContent = 0;
}

function toggleCheck(self) {
  const taskDetail = self.nextElementSibling;
  taskDetail.classList.toggle("stringDelete");
  if (taskDetail.classList.contains("stringDelete")) {
    pedTaskNum.textContent = parseInt(pedTaskNum.textContent) - 1;
  } else {
    pedTaskNum.textContent = parseInt(pedTaskNum.textContent) + 1;
  }
}

function deleteTask(self) {
  const li = self.parentElement;
  allTaskNum.textContent = parseInt(allTaskNum.textContent) - 1;
  pedTaskNum.textContent = parseInt(pedTaskNum.textContent) - 1;
  todoList.removeChild(li);
}

function getAllTasks() {
  const tasks = todoList.children;
  if (!allTask.classList.contains("active")) {
    allTask.classList.add("active");
    pedTask.classList.remove("active");
    comTask.classList.remove("active");
  }
  for (const task of tasks) {
    if (task.classList.contains("hide")) {
      task.classList.remove("hide");
    }
  }
}

function getAllPending() {
  const tasks = todoList.children;
  if (!pedTask.classList.contains("active")) {
    pedTask.classList.add("active");
    allTask.classList.remove("active");
    comTask.classList.remove("active");
  }
  for (const task of tasks) {
    const checked = task.firstElementChild;
    if (checked.checked) {
      if (!task.classList.contains("hide")) {
        task.classList.add("hide");
      }
    } else {
      if (task.classList.contains("hide")) {
        task.classList.remove("hide");
      }
    }
  }
}

function getAllCompleted() {
  const tasks = todoList.children;
  if (!comTask.classList.contains("active")) {
    comTask.classList.add("active");
    allTask.classList.remove("active");
    pedTask.classList.remove("active");
  }
  for (const task of tasks) {
    const checked = task.firstElementChild;
    if (checked.checked) {
      if (task.classList.contains("hide")) {
        task.classList.remove("hide");
      }
    } else {
      if (!task.classList.contains("hide")) {
        task.classList.add("hide");
      }
    }
  }
}
