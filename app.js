const btn = document.querySelector(".button");
btn.addEventListener("click", (e) => {
  addItem();
});

function addItem() {
    window.localStorage.setItem("name", "farouk");
}
