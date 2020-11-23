"use strict";
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Sun () {

}

Sun.prototype = {
  makeSun: function () {
    var sunrise = true
    const sun = document.createElement('div')
    const moon = document.createElement('div')
    moon.className = 'moon'
    sun.className = "sun"
    const box = document.createElement('div')
    box.id = "sunbox"
    $(document).on('click', '#sunbox', function () {
      if(sunrise){
        box.style.animationName = 'nightsky'
        box.style.animationDuration = '2s'
        box.style.animationFillMode = 'forwards'
        sun.style.animationName = 'sunset'
        sun.style.animationDuration = '2s'
        sun.style.animationFillMode = 'forwards'
        moon.style.animationName = 'moonrise'
        moon.style.animationDuration = '2s'
        moon.style.animationFillMode = 'forwards'
        sunrise = false
      }
      else{
        box.style.animationName = 'bluesky'
        box.style.animationDuration = '2s'
        box.style.animationFillMode = 'forwards'
        sun.style.animationName = 'sunrise'
        sun.style.animationDuration = '2s'
        sun.style.animationFillMode = 'forwards'
        moon.style.animationName = 'moonset'
        moon.style.animationDuration = '2s'
        moon.style.animationFillMode = 'forwards'
        sunrise = true
      }

    })
    box.append(sun)
    box.append(moon)
    const body = $('body')
    body.append(box)
  }
}
function Rain () {
}
Rain.prototype = {

  makeItRain: function () {
    const box = document.createElement('div')
    box.id = "box"
    box.style.backgroundColor = '#131339'
    for (var i = 1; i < 400; i++){
      var dropLeft = randRange(1, 100)
      var dropTop =  randRange(-1000, -200)
      var op = randRange(1, 3)
      const raindrop = document.createElement('div')
      raindrop.className ="drop"
      raindrop.id = 'drop'+ i
      var duration = Math.abs(dropTop)/120
      raindrop.style.left = dropLeft+'%'
      raindrop.style.top = dropTop+'%'
      raindrop.style.animation = `rain linear ${duration}s infinite`
      if(op == 1){
        raindrop.style.opacity= 0.3
      }
      else if (op == 2){
        raindrop.style.opacity= 0.6
      }
      box.append(raindrop)

    }
    const body = $('body')
    body.append(box)

  }
}
