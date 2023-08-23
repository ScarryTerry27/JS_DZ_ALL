const languages = navigator.languages;
let str = "";
for (let lang of languages) {
  if (lang != "ru") {
    str += `<li class='collection-item'>${lang}</li>`;
  } else {
    str += `<li class='collection-item active'>${lang}</li>`;
  }
}
var child = document.createElement("ul");
child.className = "collection";
child.innerHTML = str;
document.getElementById("list").appendChild(child);
