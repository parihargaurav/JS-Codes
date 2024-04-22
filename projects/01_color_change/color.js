const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);

// as it is node list so it will have for each method
buttons.forEach(function (button) {
  console.log(button);
  // adding event listner for handling the events
  button.addEventListener("click", function (e) {
    console.log(e); // helps to understand where event is coming from
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
