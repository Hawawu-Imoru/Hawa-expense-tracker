const form = document.getElementById("form-container");
const item = document.getElementById("item");

// function that will submit our data
form.addEventListener("submit", (e) => {
  e.preventdefault();

  let description = form.description.value;
  let amount = form.amount.value;

  generateHTML(description, amount);
})

//function that generate html structure
const generateHTML = (description, amount) => {
  if (amount < 0) {
    let HTML = `
            <li class="expense" >
            <span>${description}</span>
            <span>${amount}</span>
            </li>`
    item.innerHTML += HTML;
  } else {
    let HTML = ` 
          <li class="income">
            <span>${description}</span>
            <span>${amount}</span>
          </li>`
    item.innerHTML += HTML
  }
};
