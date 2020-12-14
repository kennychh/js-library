"use strict";

const r = new Rain()
const s = new Sun()
const sn = new Snow()
const sn2 = new Snow()
s.makeSunMoon()
s.makeNightDay()
sn.snow()
sn.speed(0.5)
r.makeItRain()
sn2.snow(100)
