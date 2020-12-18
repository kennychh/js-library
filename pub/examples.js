"use strict";

const r = new Rain()
const s = new Sun()
const sn = new Snow()

const makeSunMoonCode = document.createElement('div')
makeSunMoonCode.id = "makeSunMoonCode"
const smImg = document.createElement('IMG')
smImg.id = 'smImg'
smImg.src = "./images/makeSunMoonCode.png"
$('#makeSunMoonCode').html(smImg)
s.makeSunMoon(false, false)
addTitle('Sun and Moon')
$('body').append(makeSunMoonCode)
s.makeNightDay(makeSunMoonCode)
addTitle('Night and Day')
sn.snow(50)
addTitle('Snow')
r.makeItRain()
addTitle('Rain')
