const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
const user = JSON.parse(localStorage.getItem("user"));
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.forms[0];

form?.addEventListener("reset", () => {
  for (let input of document.querySelectorAll("input")) {
    input.classList.remove("is-invalid");
  }
});

function checkUser() {
  if (user) {
    const msg = document.createElement("div");
    msg.innerHTML = `<p class="display-4 text-center">
                Already signed in! <a href="./index.html" class="link-danger">logout</a>
            </p>`;
    form.parentElement.appendChild(msg);

    document.querySelector(".link-danger").addEventListener("click", () => {
      localStorage.removeItem("user");
      location.href = "./index.html";
    });
  } else {
    form.classList.remove("d-none");
  }
}
