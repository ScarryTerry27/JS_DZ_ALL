let btn1 = document.getElementById("one");

btn1.onmousedown = function (event) {
  btn1.style.position = "absolute";
  btn1.style.zIndex = 1000;
  document.body.append(btn1);
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    btn1.style.left = pageX - btn1.offsetWidth / 2 + "px";
    btn1.style.top = pageY - btn1.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);

  btn1.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    btn1.onmouseup = null;
  };
};

let btn2 = document.getElementById("two");

btn2.onmousedown = function (event) {
  btn2.style.position = "absolute";
  btn2.style.zIndex = 1000;
  document.body.append(btn2);
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    btn2.style.left = pageX - btn2.offsetWidth / 2 + "px";
    btn2.style.top = pageY - btn2.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);

  btn2.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    btn2.onmouseup = null;
  };
};

let btn3 = document.getElementById("three");

btn3.onmousedown = function (event) {
  btn3.style.position = "absolute";
  btn3.style.zIndex = 1000;
  document.body.append(btn3);
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    btn3.style.left = pageX - btn3.offsetWidth / 2 + "px";
    btn3.style.top = pageY - btn3.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);

  btn3.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    btn3.onmouseup = null;
  };
};
