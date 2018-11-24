const devices = document.querySelectorAll("#desktop, #tablet, #mobile")

document.getElementById('set-url-source').addEventListener("click", event => {
  event.preventDefault()

  for(let value of devices) {
    value.src = 'http://' + document.getElementById("enterURL").value
  }
})
