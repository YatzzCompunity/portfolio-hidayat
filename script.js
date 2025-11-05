function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Dummy login check
  if (user === "admin" && pass === "potion123") {
    message.textContent = "☠️ Access Granted ☠️";
    message.style.color = "#00ff88";
  } else {
    message.textContent = "☠️ Invalid Credentials ☠️";
    message.style.color = "#ff2e63";
  }
}
