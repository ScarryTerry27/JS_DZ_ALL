let myWind;

function openNewWindow() {
  if (myWind) {
    alert("Окно уже открыто");
  } else {
    let params =
      "resizable=yes,toolbar=no,menubar=no,width=640,height=480,left=400,top=300";
    myWind = window.open("https://journal.top-academy.ru", "TOP", params);
    myWind.resizeTo(640, 480);
    console.log(myWind.outerWidth, myWind.outerHeight);
  }
}

function closeNewWindow() {
  if (myWind) {
    myWind.close();
    myWind = null;
  } else {
    alert("Нет открытых окон");
  }
}
