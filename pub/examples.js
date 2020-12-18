"use strict";

const r = new Rain()
const s = new Sun()
const sn = new Snow()

const smImg = document.createElement('IMG')
smImg.id = 'smImg'
smImg.src = "images/makeSunMoonCode.png"


s.makeSunMoon(false, false)
addTitle('Sun and Moon')
$('body').append(smImg)
s.makeNightDay()
addTitle('Night and Day')
sn.snow(50)
addTitle('Snow')
r.makeItRain()
addTitle('Rain')
