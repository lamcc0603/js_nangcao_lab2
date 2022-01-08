const inputTxt = document.querySelector("#inputTxt");
const inputNumber = document.querySelector("#inputNumber");

const btn = document.querySelector("button");
const output = document.querySelector("h2");

btn.addEventListener("click", () => {
  const txtValue = inputTxt.value;
  const numberValue = Number(inputNumber.value);

  const ans = txtValue.slice(0, numberValue);

  console.log(txtValue.length, ans.length);

  if (txtValue.length > ans.length) {
    output.innerHTML = `${ans}...`;
  } else {
    output.innerHTML = `${ans}.`;
  }
});
