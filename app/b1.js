const input = document.querySelector("#input");
const btn = document.querySelector("button");
const output = document.querySelector("h2");
btn.addEventListener("click", () => {
  const ans = input.value.length;
  output.innerHTML = ans;
});
