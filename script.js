function countNumberOfAlbums() {
  let cards1 = document.querySelectorAll("#favorites_container .card");
  let reviewAlbum = document.querySelectorAll;
  ("#review_container img");
  let cards2 = document.querySelectorAll("#hall-of-shame_container .card");
  let theBestAlbum = document.querySelectorAll("#the-best_container img");
  let tapestryAlbums = document.querySelectorAll("#tapestry_container img");
  let trackListAlbums = document.querySelectorAll(
    "#review_container table tbody tr"
  );

  return (totalNumOfAlbums =
    cards1.length +
    cards2.length +
    reviewAlbum.length +
    theBestAlbum.length +
    tapestryAlbums.length +
    trackListAlbums.length);
}

function showTotalNumberOfAlbums() {
  document.getElementById(
    "number-of-albums"
  ).innerText = `Number of albums: ${countNumberOfAlbums()}`;
}

// function jumbotronFadeIn() { // ** alternative way of fade in animation for the jumbotron
//   document.getElementsByClassName("jumbotron")[0].style.opacity = "100%";
// }

function deleteFromTrackList() {
  let deleteButtonNode = document.querySelectorAll("#review_container .badge");
  for (but of deleteButtonNode) {
    but.addEventListener("click", (event) => {
      // event.target.parentNode.parentNode.outerHTML = ""; or
      event.target.closest("tr").outerHTML = "";
    });
  }
  showTotalNumberOfAlbums();
}

let trackList = document.querySelector("#review_container table tbody");
function addNewTrack() {
  let number = document.getElementById("track-num").value;
  let title = document.getElementById("track-title").value;
  let artist = document.getElementById("artist-name").value;
  let duration = document.getElementById("track-dur").value;

  if (number != "" && title != "" && artist != "" && duration != "") {
    let newTrack = document.createElement("tr");
    trackList.appendChild(newTrack);

    let trackNumber = document.createElement("th");
    trackNumber.innerText = number;
    trackNumber.setAttribute("scope", "row");
    newTrack.appendChild(trackNumber);

    let trackTitle = document.createElement("td");
    trackTitle.innerText = title;
    newTrack.appendChild(trackTitle);

    let trackArtist = document.createElement("td");
    trackArtist.innerText = artist;
    newTrack.appendChild(trackArtist);

    let trackDuration = document.createElement("td");
    trackDuration.innerText = duration;
    newTrack.appendChild(trackDuration);

    let TDforDeleteButton = document.createElement("td");
    TDforDeleteButton.innerHTML =
      '<span class="badge badge-danger">Delete</span>';
    newTrack.appendChild(TDforDeleteButton);

    deleteFromTrackList(); // function recalled to add event listener to the new added delete buttons

    alert(`${title} added to the track list`);
  } else {
    alert("Please first fill the input fields!");
    return;
  }

  document.getElementById("track-num").value = "";
  document.getElementById("track-title").value = "";
  document.getElementById("artist-name").value = "";
  document.getElementById("track-dur").value = "";
}

window.onload = () => {
  showTotalNumberOfAlbums();
  // jumbotronFadeIn();
  deleteFromTrackList();
};
