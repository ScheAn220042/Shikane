let users = [
  { username: "TestUser", password: "1234" },
  { username: "Kauv", password: "Marcel" },
  { username: "Schernthaner", password: "Andreas" },
  { username: "Nguyen", password: "Tran" },
  { username: "ProjektJury", password: "hostprojektjury"},
];




function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginMessage = document.getElementById("loginMessage");


  const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase());

  if (user) {

    if (user.password && user.password !== password) {

      loginMessage.classList.add("error");
      loginMessage.textContent = "Passwort falsch.";
      return;
    }


    currentUser = user;
    document.getElementById("displayName").textContent = username;
    loginMessage.classList.remove("error");
    loginMessage.classList.add("success");
    loginMessage.textContent = "Erfolgreich angemeldet!";


    document.getElementById("loginSection").style.display = "none";
    document.getElementById("profileSection").style.display = "block";
  } else {

    if (username && password === "") {

      currentUser = { username: username };
      document.getElementById("displayName").textContent = username;
      loginMessage.classList.remove("error");
      loginMessage.classList.add("success");
      loginMessage.textContent = "Erfolgreich angemeldet!";


      document.getElementById("loginSection").style.display = "none";
      document.getElementById("profileSection").style.display = "block";
    } else {

      loginMessage.classList.add("error");
      loginMessage.textContent = "Benutzername oder Passwort falsch.";
    }
  }
}