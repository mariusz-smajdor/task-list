{
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const init = () => {
    document.querySelector(".js-form").addEventListener("submit", onFormSubmit);
  };

  init();
}
