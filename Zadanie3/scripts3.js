let arr_history = [];

window.history.replaceState({ record: "0" }, "page 0", "?page=0");
arr_history.push(window.location.href);
window.history.pushState({ record: "1" }, "page 1", "?page=1");
arr_history.push(window.location.href);
window.history.pushState({ record: "2" }, "page 2", "?page=2");
arr_history.push(window.location.href);
window.history.pushState({ record: "3" }, "page 3", "?page=3");
arr_history.push(window.location.href);
window.history.go(-3);

function CheckHistory() {
  let child = document.createElement("ul");
  child.className = "collection";
  let str = "";
  for (let ur of arr_history) {
    if (ur === window.location.href) {
      str += `<li class='collection-item active'>${ur}</li>`;
    } else {
      str += `<li class='collection-item'>${ur}</li>`;
    }
  }
  child.innerHTML = str;
  console.log(child);
  let parent = document.getElementById("main");
  parent.append(child);
}

function HistoryBack() {
  let ul = document.querySelector("ul");
  ul.remove();
  window.history.back();
}

function HistoryForward() {
  let ul = document.querySelector("ul");
  ul.remove();
  window.history.forward();
}
