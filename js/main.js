const browserFrame = document.querySelectorAll("#desktop, #tablet, #mobile");

document.getElementById('set-url-source').addEventListener("click", function(e) {
  e.preventDefault();

  for (i = 0; i < browserFrame.length; ++i) {
    browserFrame[i].src = 'http://' + document.getElementById("enterURL").value;
  }
})

document.getElementById('save').addEventListener("click", function() {
  document.getElementById('warning-message').style.display = "block";
})


/* iframe2image: https://github.com/twolfson/iframe2image
// Set up the canvas dimensions
var canvas = document.getElementById('new-image');
var context = canvas.getContext('2d');
canvas.width = 566;
canvas.height = 420;

// Grab the iframe
var inner = document.getElementById('desktop');

// Get the image
iframe2image(inner, function (err, img) {
  // If there is an error, log it
  if (err) { return console.error(err); }

  // Otherwise, add the image to the canvas
  context.drawImage(img, 0, 0);
}); */

/*  HTMLIFrameElement.getScreeshot(): https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/getScreenshot
var request = document.getElementById('#desktop').getScreenshot(566, 420);

request.onsuccess = function() {
  var blob = request.result;
  var url = URL.createObjectURL(blob);
} */

/* Dom to image: https://github.com/tsayen/dom-to-image

document.getElementById('save').addEventListener("click", function() {

  var node = document.getElementById('desktop');

  domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}) */

/* html2canvas: https://github.com/niklasvh/html2canvas
document.getElementById('save').addEventListener("click", function() {

  html2canvas(document.getElementById('image-container'), {
    useCORS: true,
    allowTaint: true,
  }).then(canvas => {
      var dataURL = canvas.toDataURL();
      //generated dataURL is now placed as src of a img tag
      document.getElementById("screenshot").src = dataURL;
    })
}) */
