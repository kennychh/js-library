const r = new Rain()
const s = new Sun()
const sn = new Snow()

const sbox = s.makeSunMoon(false, false)
sbox.className = 'sbox'
const smbox = s.makeNightDay(false,false)
smbox.className = 'sbox'
const snbox = sn.snow(100, false)
snbox.className = 'box'
const rbox = r.makeItRain(false)
rbox.className = 'box'