function createpost() {
  var p = Document.createElement("p");
  var place = Document.getElementById("createplace")
  p.textContent = "New Post"
  place.appendChild(p)
}

fetch('levels.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("we kinda messed up on teh json: ", error));

Document.getElementById("createpostbutton").onclick = createpost;
