checkUser();

form.addEventListener("submit", (e) => login(e));


function formIsValid() {
  const user = usersList.find(
    (user) => user.email.toLowerCase() === email.value.toLowerCase() && user.password === password.value
  );
  if (user) {
    email.classList.add("is-valid");
    password.classList.add("is-valid");
    return user;
  }
  email.classList.add("is-invalid");
  password.classList.add("is-invalid");
  return false;
}

function login(e) {
  e.preventDefault();
  const user = formIsValid();
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    location.href = "./home.html";
  }
}
