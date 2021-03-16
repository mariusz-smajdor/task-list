{
  let tasks = [];

  const render = () => {
    let tasksToHTML = "";

    for (const task of tasks) {
      tasksToHTML += `
        <li class="list__item">
          <button class="list__button js-toggleDone">${
            task.done ? "✖" : "✔"
          }</button>
            <span class="list__content ${
              task.done ? "list__content--done" : ""
            }">
              ${task.content}
            </span>
          <button class="list__button list__button--remove js-removeTask">🗑</button>
        </li>
      `;
    }

    document.querySelector(".js-list").innerHTML = tasksToHTML;

    bindTaskEvents();
  };

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];

    render();
  };

  const removeTask = (index) => {
    tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];

    render();
  };

  const toggleTaskDone = (index) => {
    tasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], done: !tasks[index].done },
      ...tasks.slice(index + 1),
    ];

    render();
  };

  const bindTaskEvents = () => {
    const removeButtons = document.querySelectorAll(".js-removeTask");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    newTaskElement.value = "";
    newTaskElement.focus();

    if (newTaskContent === "") return;

    addNewTask(newTaskContent);
  };

  const init = () => {
    document.querySelector(".js-form").addEventListener("submit", onFormSubmit);
  };

  init();
}
