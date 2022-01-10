const slider = document.querySelector(".container");
const innerSlider = document.querySelector(".slider");

// console.log(container);

// const imgList = [
//   {
//     id: 1,
//     imgURL: "a1.jpg",
//   },
//   {
//     id: 2,
//     imgURL: "a2.jpg",
//   },
//   {
//     id: 3,
//     imgURL: "a3.jpg",
//   },
//   {
//     id: 4,
//     imgURL: "a4.png",
//   },
// ];

// imgList.forEach((e) => {
//   const divEl = document.createElement("div");
//   divEl.classList.add("slider_box");
//   divEl.innerHTML = `<img src="../images/${e.imgURL}">`;
//   box.appendChild(divEl);
// });

let pressed = false;
let startx;
let x;

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", () => {
  slider.style.cursor = "default";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;
  innerSlider.style.left = `${x - startx}px`;

  checkboundary();
});

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right > outer.right) {
    innerSlider.style.left = `${inner.width - outer.width}px`;
  }
  if (parseInt(innerSlider.style.left) < -3300) {
    innerSlider.style.left = "0px";
  }
}
