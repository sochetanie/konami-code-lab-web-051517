const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // your code here

var i = 0

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
 
  if (key === code[i]) {
    i++
 
    if (i === code.length - 1) {
      alert("YOU DID IT!")
      i = 0
    }

  } else {
    i = 0
  }

}
  document.body.addEventListener('keydown', onKeyDownHandler)
}
