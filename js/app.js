( () => {
  const devices = document.querySelectorAll("#desktop, #tablet, #mobile")
  const button = document.getElementById('set-url-source')
  const input = document.getElementById("enterURL")

  button.addEventListener("click", e => {
    e.preventDefault()

    for(let value of devices) {
      value.src = `https://${input.value}`
    }
  })
})()
