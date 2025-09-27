function createpost() {
  var p = Document.createElement("p");
  var place = Document.getElementById("createplace")
  p.textContent = "New Post"
  place.appendChild(p)
}
