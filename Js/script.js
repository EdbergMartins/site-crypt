function showAndHiddenContent(element, arrow) {
  var local = document.getElementById(element);
  var imgArrow = document.getElementById(arrow);
  if (local.style.display == 'none' || local.style.display == '') {
    local.style.display = 'flex';
    imgArrow.src = "img/box5/arrowUp.png";

  } else {
    local.style.display = 'none';
    imgArrow.src = "img/box5/ARROW _ DOWN.png";
  }
}
