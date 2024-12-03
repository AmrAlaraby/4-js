document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    if (!email.includes("@")) {
      errorMessage.textContent = "Invalid email address!";
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);
  
    if (existingUser) {
      errorMessage.textContent = "Email is already registered!";
      return;
    }
  
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
  });
  