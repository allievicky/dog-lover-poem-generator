function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Woof woof woof",
    autoStart: true,
    delay: 1, 
    cursor: "",
  });
}

let poemFormElelment = document.querySelector("#poem-generator-form");
poemFormElelment.addEventListener("submit", generatePoem);