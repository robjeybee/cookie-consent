const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const loginForm = document.getElementById("login-form")

setTimeout(function () {
  modal.style.display = "block";
  console.log("Modal Opened!");
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  console.log("button is clicked");
  modal.style.display = "none";
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault()
})
