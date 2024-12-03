document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (!user) {
      errorMessage.textContent = "Invalid email or password!";
      return;
    }
  
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "home.html";
  });
  