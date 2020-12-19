const r = new Rain()
const s = new Sun()
const sn = new Snow()

const sbox = s.makeSunMoon(true, false)
sbox.className = 'sbox'
const smbox = s.makeNightDay(false,false)
smbox.className = 'sbox'
const snbox = sn.snow(100, false)
snbox.className = 'box'
const rbox = r.makeItRain(false)
rbox.className = 'box'

const row1 = document.createElement('div')
row1.className ='row'
row1.append(sbox)
row1.append(smbox)
const row2 = document.createElement('div')
row2.className ='row'
row2.append(snbox)
row2.append(rbox)

const button =document.createElement('button')
button.id = 'examples'
button.textContent = 'Examples'
$(document).on('click', '#examples', function () {
  window.location = "./examples.html";
})
const button2 =document.createElement('button')
button2.id = 'api'
button2.textContent = 'API'
$(document).on('click', '#api', function () {
  window.location = "./api.html";
})
const examplesWrapper = document.createElement('div')
examplesWrapper.id = "examples_wrapper"
examplesWrapper.append(button)
examplesWrapper.append(button2)
const title = document.createElement('h1')
title.textContent = 'Weather'
title.className = 'title'
title.style.color = 'white'
$('body').append(row1)
$('body').append(title)
$('body').append(examplesWrapper)
$('body').append(row2)
