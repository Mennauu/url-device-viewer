const devices = document.querySelectorAll("#desktop, #tablet, #mobile")

document.getElementById('set-url-source').addEventListener("click", event => {
  event.preventDefault()

  for(let value of devices) {
    value.src = 'https://' + document.getElementById("enterURL").value
  }
})
