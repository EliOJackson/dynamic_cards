// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

let input = document.getElementById("userInput");
let createButton = document.getElementById("create");
let output = document.getElementById("outputField")


let printToDom = (inputText) =>{
    let card = document.createElement("div");
    card.setAttribute("id", "newCard");
    console.log(card);
}

createButton.addEventListener('click', printToDom);



// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.