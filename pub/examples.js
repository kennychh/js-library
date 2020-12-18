"use strict";

const r = new Rain()
const s = new Sun()
const sn = new Snow()
s.makeSunMoon()
addTitle('Sun and Moon')
s.makeNightDay()
addTitle('Night and Day')
sn.snow()
addTitle('Snow')
r.makeItRain()
addTitle('Rain')
