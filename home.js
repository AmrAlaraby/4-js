const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("username").textContent = user.username;

document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});
