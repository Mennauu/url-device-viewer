const browserFrame = document.querySelectorAll("#desktop, #tablet, #mobile");

document.getElementById('set-url-source').addEventListener("click", function(e) {
  e.preventDefault();

  for (i = 0; i < browserFrame.length; ++i) {
    browserFrame[i].src = 'http://' + document.getElementById("enterURL").value;
  }

})
