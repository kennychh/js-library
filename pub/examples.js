"use strict";

const r = new Rain()
const s = new Sun()
const sn = new Snow()

const smImg = document.createElement('IMG')
smImg.id = 'smImg'
smImg.src = "images/makeSunMoonCode.png"

const ndImg = document.createElement('IMG')
ndImg.id = 'ndImg'
ndImg.src = "images/makeNightDayCode.png"

const rImg = document.createElement('IMG')
rImg.id = 'rImg'
rImg.src = "images/makeRainCode.png"

const snImg = document.createElement('IMG')
snImg.id = 'snImg'
snImg.src = "images/makeSnowCode.png"

s.makeSunMoon(false, false)
addTitle('Sun and Moon')
$('body').append(smImg)
s.makeNightDay()
addTitle('Night and Day')
$('body').append(ndImg)
sn.snow(50)
addTitle('Snow')
$('body').append(snImg)
r.makeItRain()
addTitle('Rain')
$('body').append(rImg)
