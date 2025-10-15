// Handle Sign Up
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert("Email already registered! Try logging in.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    window.location.href = "index.html";
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    const errorMessage = document.getElementById("error-message");

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      window.location.href = "home.html";
    } else {
      errorMessage.textContent = "Invalid email or password!";
    }
  });
}
