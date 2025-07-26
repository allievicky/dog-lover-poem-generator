function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1, 
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d09ba683abb40fodbd98ft033cff44a6";
  let prompt = `User instructions: Generate a poem about dogs and ${instructionsInput.value}`;
  let context = "You are a dog expert and a dog lover. You love to write about all things dogs. Your mission is to write a short, 4 line poem, stack the lines using basic HTML. Make sure to use the topic defined in the user's instructions. Do not include a title to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);