let scoresEl = document.getElementById("scores-el")
let clicksEl = document.getElementById("clicks-el")
let click = 0

function clicked() {
  click += 1  
  clicksEl.textContent = click
}

function save() {
  let clickStr = click + " - "
  scoresEl.textContent += clickStr
  clicksEl.textContent = 0
  click = 0
}