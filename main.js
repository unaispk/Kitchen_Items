let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemslist = document.getElementById("kitchen-items-list");

// step 2
// add kitchen items
function addKitchenItems() {
  let kitchenInputData = kitchenInput.value;
  // Create DOM elements now
  let li = document.createElement("li");

  let spanEl = document.createElement("span");
  li.appendChild(spanEl);
  spanEl.innerText = kitchenInputData;

  li.style.cssText = "animation-name: slideIn;";
  kitchenItemslist.appendChild(li);
  kitchenInput.value = "";
  kitchenInput.focus();
  // Create trash butoon
  let trashBtn = document.createElement("i");
  trashBtn.classList.add("fa", "fa-trash");
  li.appendChild(trashBtn);

  let editBtn = document.createElement("i");
  editBtn.classList.add("fas", "fa-edit");
  li.appendChild(editBtn);
}

// Delete item from kitchen list
function deleteKitchenItem(event) {
  if (event.target.classList[1] === "fa-trash") {  // event.target is "i"
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("transitionend", function () {
      item.remove();
    })
    // item.remove();
  }
}

// Edit Kitchen Item
function editKitchenItem(event) {
    if (event.target.classList[1] === "fa-edit") {  // event.target is "i"
      let editValue = prompt("Please add new text");
      let item = event.target.parentElement;
      let spanEl = item.querySelector("span");
      spanEl.innerText = editValue;
      console.log(spanEl);
    }
}

// Enter key for add items
kitchenInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-btn").click();
  }
})

// step 1
// add an event listener to the button
addBtn.addEventListener("click", addKitchenItems);
kitchenItemslist.addEventListener("click", deleteKitchenItem);
kitchenItemslist.addEventListener("click", editKitchenItem);

