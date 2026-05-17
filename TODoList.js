let inputBox = document.querySelector(".input-Box");
let addBtn = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
function addTask() {
  if (inputBox.value.trim() == "") {
    document.querySelector(".empty").style.display = "block";
  } else {
    document.querySelector(".empty").style.display = "none";

    let task = document.createElement("li");
    task.innerHTML = inputBox.value;
    tasks.appendChild(task);

    let uncheckedSpan = document.createElement("span");
    uncheckedSpan.className = "unchecked-span";
    task.prepend(uncheckedSpan);

    let checkedSpan = document.createElement("span");
    checkedSpan.className = "checked-span";
    task.prepend(checkedSpan);

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete-span";
    deleteSpan.innerHTML = "\u00d7";
    task.appendChild(deleteSpan);

    inputBox.value = "";
  }

  saveData();
}

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("unchecked-span")) {
    e.target.parentElement.classList.toggle("checked");

    e.target.parentElement.querySelector(".checked-span").style.display =
      "block";
  } else if (e.target.classList.contains("delete-span")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("checked-span")) {
    e.target.style.display = "none";
    e.target.parentElement.classList.toggle("checked");
  }
  saveData();
});
function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}
function callData() {
  tasks.innerHTML = localStorage.getItem("data");
}
callData();
