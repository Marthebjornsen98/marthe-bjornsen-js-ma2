// imports always go on top
import { testLengthOfInput } from "./libs/validation.js";
import writeToDOM from "./libs/writeToDom.js";
import {
  saveToLocalStorage,
  getStorageItem,
} from "./libs/localStorageHelper.js";

const itemInput = document.querySelector(".itemInput");
const addItem = document.querySelector(".addItem");
const items = document.querySelector(".items");
const clearStorageAndList = document.querySelector(".clear__btn");
let groceryArray = getStorageItem("groceryArrayKey");

writeToDOM(items, groceryArray);

addItem.onclick = function () {
  let valueOfGroceryInputBox = itemInput.value;
  if (testLengthOfInput(valueOfGroceryInputBox, 3)) {
    let groceryItem = {
      id: groceryArray.length,
      name: valueOfGroceryInputBox,
    };
    groceryArray.push(groceryItem);
    saveToLocalStorage("groceryArrayKey", groceryArray);
    writeToDOM(items, groceryArray);
  } else {
    console.log("Input needs more characters");
  }
  itemInput.value = "";
};

clearStorageAndList.onclick = function () {
  localStorage.clear();
  items.innerHTML = "";
  location.reload();
};
