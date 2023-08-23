let btn1 = document.getElementById("one");

btn1.addEventListener("mousedown", (event) => {
  console.log("привет");
  btn1.addEventListener("mousemove", mouseMove(event));
});
btn1.addEventListener("mouseup", mouseUp);

function mouseMove(ev) {
  console.log(ev.clientX, ev.clientY);
}

function mouseUp() {
  console.log("пока");
  btn1.removeEventListener("mousemove", mouseMove);
