let cardWrap = document.getElementById("cardWrap");

function openCard() {
    cardWrap.classList.toggle("open-menu");
}

function toggleMoreLinks() {
  const moreLinks = document.getElementById('more-links');
  const seeMore = document.querySelector('.see-more i');

  if (moreLinks.classList.contains('hidden')) {
    moreLinks.classList.remove('hidden');
    seeMore.classList.remove('fa-chevron-down');
    seeMore.classList.add('fa-chevron-up');
  } else {
    moreLinks.classList.add('hidden');
    seeMore.classList.remove('fa-chevron-up');
    seeMore.classList.add('fa-chevron-down');
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const storedPassword = localStorage.getItem("password");

  if (storedPassword) {
    displayPassword(storedPassword); // This calls the global function
  }
});