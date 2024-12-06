const welcome = document.querySelector("h1 span");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const logOutBtn = document.getElementById("logout");
const dialog = document.querySelector("dialog");

openBtn.addEventListener("click", () => dialog.show());
closeBtn.addEventListener("click", () => dialog.close());

if (user) {
  document.body.classList.remove("d-none");
  welcome.textContent = `${user.userName}!`;
} else {
  location.href = "./index.html";
}

logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  location.href = "./index.html";
});
