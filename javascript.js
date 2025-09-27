function createpost() {
  var p = Document.createElement("p");
  var place = Document.getElementById("createplace")
  p.textContent = "New Post"
  place.appendChild(p)
}

// fetch('levels.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("we kinda messed up on teh json: ", error));

async function fetchJSONData() {
  try {
    const response = await fetch('./levels.json'); // Replace 'data.json' with your file path
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse the JSON data
    console.log(data); // Work with the parsed JSON object
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchJSONData();

Document.getElementById("createpostbutton").onclick = createpost;
