function countNumberOfAlbums() {
  let cards1 = document.querySelectorAll("#favorites_container .card");
  let reviewAlbum = document.querySelectorAll;
  ("#review_container img");
  let cards2 = document.querySelectorAll("#hall-of-shame_container .card");
  let theBestAlbum = document.querySelectorAll("#the-best_container img");
  let tapestryAlbums = document.querySelectorAll("#tapestry_container img");

  return (totalNumOfAlbums =
    cards1.length +
    cards2.length +
    reviewAlbum.length +
    theBestAlbum.length +
    tapestryAlbums.length);
}

function showTotalNumberOfAlbums() {
  document.getElementById(
    "number-of-albums"
  ).innerText = `Number of albums: ${countNumberOfAlbums()}`;
}

// function jumbotronFadeIn() { // ** alternative way of fade in animation
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
}

window.onload = () => {
  showTotalNumberOfAlbums();
  // jumbotronFadeIn();
  deleteFromTrackList();
};
