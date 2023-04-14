const radios = document.querySelectorAll('input[type="radio"]');
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const answers = [];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      answers.push(radios[i].value);
    }
  }

  if (
    answers.length === 5 &&
    answers.every((answer) => answer === "Да" || answer === "Плохо")
  ) {
    document.body.innerHTML = "<h1>Ну ты и сам знаешь что ты Никита....</h1>";
  } else if (answers.slice(0, 3).every((answer) => answer === "Да")) {
    document.body.innerHTML = "<h1>Не дорос....</h1>";
  } else {
    document.body.innerHTML = "<h1>Пронесло брат, пронесло!</h1>";
  }
});
