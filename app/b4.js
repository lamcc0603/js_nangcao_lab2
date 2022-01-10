const inputEmail = document.querySelector("#inputEmail");
const btn = document.querySelector("button");
const output = document.querySelector("h2");

const regex = /[a-z][a-z0-9_\.]{1,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/gi;

btn.addEventListener("click", () => {
  const inputValue = inputEmail.value;
  const ans = regex.test(inputValue);
  if (inputValue.length == 0) {
    output.innerHTML = "Hãy nhập email ";
  } else {
    output.innerHTML = ans;
  }
});
