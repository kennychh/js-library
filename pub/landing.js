const r = new Rain()
const s = new Sun()
const sn = new Snow()

const sbox = s.makeSunMoon(false, false)
const smbox = s.makeNightDay(false,false)
const snbox = sn.snow(100, false)
const rbox = r.makeItRain(false)
