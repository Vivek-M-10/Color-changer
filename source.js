const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // e itself a object.

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

    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
