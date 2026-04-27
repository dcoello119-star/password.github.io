document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (user === "admin" && pass === "password") {
    window.location.href = "PROYECTOS PYTHON/index.html";
  } else {
    message.textContent = "Usuario o contraseña incorrectos";
  }
});