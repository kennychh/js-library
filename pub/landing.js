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
$('body').append(row1)
$('body').append(button)
$('body').append(row2)
