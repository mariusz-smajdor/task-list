{
  const tasks = [
    { content: "test1", done: true },
    { content: "test2", done: false },
  ];

  const render = () => {
    let tasksToHTML = "";

    for (const task of tasks) {
      tasksToHTML += `
        <li class="list__item">
        <button class="list__button">${task.done ? "✖" : "✔"}</button>
          <span class="list__content ${task.done ? "list__content--done" : ""}">
            ${task.content}
          </span>
          <button class="list__button list__button--remove">🗑</button>
        </li>
      `;
    }

    document.querySelector(".js-list").innerHTML = tasksToHTML;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    render();
  };

  const init = () => {
    document.querySelector(".js-form").addEventListener("submit", onFormSubmit);
  };

  init();
}
