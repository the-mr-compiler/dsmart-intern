var tasks = [
  //   { id: 0, task: "Eat Food", status: 0 },
  //   { id: 1, task: "Drink Water", status: 0 },
  //   { id: 2, task: "Sleep", status: 0 },
];
var count = -1;

const firstStart = () => {
  if (
    localStorage.getItem("tasks") !== null ||
    localStorage.getItem("tasks") !== undefined
  ) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null || tasks === undefined) tasks = [];
    if (tasks.length === 0) return;
    count = Math.max.apply(
      Math,
      tasks.map(function (o) {
        return o.id;
      })
    );
    init();
  }
};

const init = () => {
  if (!!tasks) document.getElementById("todos").innerHTML = "";
  document.getElementById("todoinprogress").innerHTML = "";
  document.getElementById("todocomplete").innerHTML = "";
  tasks.sort((a, b) => {
    return b.priority - a.priority;
  });
  tasks.forEach((task) => {
    switch (task.status) {
      case 0:
        document.getElementById("todos").innerHTML += createTodo(task);
        break;
      case 1:
        document.getElementById("todoinprogress").innerHTML += createTodo(task);
        break;
      case 2:
        document.getElementById("todocomplete").innerHTML += createTodo(task);
        break;
      default:
        break;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const submitTask = () => {
  let task = document.getElementById("taskinput").value;
  let priority = document.getElementById("priority").value;
  if (!task) return;
  tasks.push({ id: ++count, task: task.trim(), status: 0, priority });
  init();
  // document.getElementById("todos").innerHTML += createTodo(tasks[count]);
  document.getElementById("taskinput").value = "";
  document.getElementById("taskinput").focus();
};

const deleteTodo = (id) => {
  tasks = tasks.filter((el) => el.id !== id);
  init();
};
const setInProgress = (id) => {
  tasks.find((task) => {
    return task.id === id;
  }).status = 1;
  init();
};
const setComplete = (id) => {
  tasks.find((task) => {
    return task.id === id;
  }).status = 2;
  init();
};

const clearAllCompleted = () => {
  tasks = tasks.filter((task) => {
    return task.status !== 2;
  });
  init();
};

const createTodo = (task) => {
  switch (task.status) {
    case 0:
      return `<li class="list-group-item shadow-3 pro${
        task.priority
      }" id="item${task.id}">
            <div class="row">
              <div class="col-10">${task.task.replace(/\n/g, "<br />")}</div>
              <div class="col-1">
                <button class=" btn btn-outline-primary p-1 px-2 text-dark ms-auto me-0" onclick="setInProgress(${
                  task.id
                })">
                  <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div class="col-1">
                <button class="btn btn-outline-primary p-1 px-2 text-dark ms-auto me-0" onclick="deleteTodo(${
                  task.id
                })">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </li>`;
    case 1:
      return `<li class="list-group-item shadow-3 pro${
        task.priority
      }" id="item${task.id}">
              <div class="row">
                <div class="col-10">${task.task.replace(/\n/g, "<br />")}</div>
                <div class="col-1">
                  <button class=" btn btn-outline-primary p-1 px-2 text-dark ms-auto me-0" onclick="setComplete(${
                    task.id
                  })">
                    <i class="fas fa-check"></i>
                  </button>
                </div>
                <div class="col-1">
                  <button class="btn btn-outline-primary p-1 px-2 text-dark ms-auto me-0" onclick="deleteTodo(${
                    task.id
                  })">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </li>`;
    case 2:
      return `<li class="list-group-item shadow-3 pro${
        task.priority
      }" id="item${task.id}">
              <div class="row">
                <div class="col-11">${task.task.replace(/\n/g, "<br />")}</div>
               
                <div class="col-1">
                  <button class="btn btn-outline-primary p-1 px-2 text-dark ms-auto me-0" onclick="deleteTodo(${
                    task.id
                  })">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </li>`;
    default:
      break;
  }
};
