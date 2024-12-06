const container = document.querySelector(".container");
checkUser();

for (let input of document.querySelectorAll("input")) {
  input.addEventListener("blur", (e) => isValid(e.target));
}
form.addEventListener("submit", (e) => register(e));

function isValid(input) {
  const invalid = (input) => {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  };

  const regex = {
    username: /\w{8,}/,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    password: /\w{8,}/,
  };

  if (input === email) {
    if (usersList.find((u) => u.email === input.value)) {
      input.nextElementSibling.textContent =
        "Email already used please enter unique email.";
      invalid(input);
      return false;
    } else {
      input.nextElementSibling.textContent = "Please enter valid email.";
    }
  }
  if (!regex[input.id].test(input.value)) {
    invalid(input);
    return false;
  }
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");

  return true;
}

function formIsValid() {
  return isValid(userName) && isValid(email) && isValid(password);
}

function register(e) {
  e.preventDefault();
  if (formIsValid()) {
    const newUser = {
      userName: userName.value,
      email: email.value,
      password: password.value,
    };
    usersList.push(newUser);
    alert();
    localStorage.setItem("usersList", JSON.stringify(usersList));
    setTimeout(() => {
      location.href = "./index.html";
    }, 2000);
  }
}

function alert() {
  const alert = document.createElement("div");
  alert.classList.add(
    "col-11",
    "col-md-6",
    "col-lg-4",
    "alert",
    "alert-success",
    "position-absolute",
    "start-50",
    "top-0",
    "translate-middle-x",
    "fade",
    "show"
  );
  alert.textContent = "Succesfully signed up, you'll be redirected..";
  container.appendChild(alert);
}
