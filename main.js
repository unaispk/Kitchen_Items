let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemslist = document.getElementById("kitchen-items-list");

// step 2
// add kitchen items
function addKitchenItems() {
    let kitchenInputData = kitchenInput.value;
    // Create DOM elements now
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    li.style.cssText = "animation-name: slideIn;";
    kitchenItemslist.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();
    // Create trash butoon
    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fa", "fa-trash");
    li.appendChild(trashBtn);
}

// Delete item from kitchen list
function deleteKitchenItem(event){
    console.log(event.target.classList[0]);
    if(event.target.classList[0] === "fa") {  // event.target is "i"
      let item = event.target.parentElement;
      item.classList.add("slideOut");
      item.addEventListener("transitionend", function () {
        item.remove();
      })
      // item.remove();
    }
}

// step 1
// add an event listener to the button
addBtn.addEventListener("click", addKitchenItems)


// Enter key for add items
kitchenInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add-btn").click();
    }
  }) 


  kitchenItemslist.addEventListener("click", deleteKitchenItem);