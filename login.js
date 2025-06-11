function handleLogin() {
  const email = document.querySelector('input[type="email"]')?.value.trim();
  const password = document.querySelector('input[type="password"]')?.value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  if (email.includes("@") && password.length >= 8) {
    localStorage.setItem("username", email);
    localStorage.setItem("password", password);
    window.location.href = "/home/home.html";
  } else {
    alert("Invalid email or password format.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", handleLogin);
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleLogin();
      }
    });
  }
});
