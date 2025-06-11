document.addEventListener("DOMContentLoaded", function () {
  const createBtn = document.querySelector(".create-btn");
  if (createBtn) {
    createBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("This feature is currently unavailable, please login.");
    });
  }
});


function saveLoginToStorage(email, password) {
  localStorage.setItem("username", email);
  localStorage.setItem("password", password);
}

function displayPassword(password) {
  const firstPost = document.getElementById("firstPost");

  if (firstPost) {
    firstPost.innerHTML = `Welcome to Fakebook. \n You have been hacked and your password is <strong> "${password}"</strong>.`;
  }
}