"use strict";
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Sun () {
  this.suns = []
}

Sun.prototype = {
  makeSunMoon: function () {
    var sunrise = true
    const sun = document.createElement('div')
    const moon = document.createElement('div')
    moon.className = 'moon'
    sun.className = "sun"
    const box = document.createElement('div')
    box.className = "sunbox"
    box.id = "sunbox"
    $(document).on('click', '#sunbox', function () {
      if(sunrise){
        box.style.animationName = 'nightsky'
        box.style.animationDuration = '3s'
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
        box.style.animationDuration = '3s'
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
    this.suns.push(sun)
    this.suns.push(moon)
    const body = $('body')
    body.append(box)
  },
  makeNightDay: function(){
    const sun = document.createElement('div')
    const moon = document.createElement('div')
    moon.className = 'moon'
    sun.className = "sun"
    const box = document.createElement('div')
    box.className = "sunbox"
    sun.style.top = '620px'
    sun.style.left = '380px'
    sun.style.transformOrigin = ' -120px -120px'
    sun.style.animationName = 'rotateSun'
    sun.style.animationTimingFunction = 'linear'
    sun.style.animationIterationCount = 'infinite'
    sun.style.animationDuration = '15s'
    sun.style.transform = 'rotate(60deg)'

    moon.style.top = '620px'
    moon.style.left = '380px'
    moon.style.transformOrigin = ' -120px -120px'
    moon.style.animationName = 'rotateMoon'
    moon.style.animationDuration = '15s'
    moon.style.animationTimingFunction = 'linear'
    moon.style.animationIterationCount = 'infinite'
    moon.style.transform = 'rotate(240deg)'

    box.style.animationName = 'nightsky'
    box.style.animationDuration = '7.5s'
    box.style.animationTimingFunction = 'ease-out'
    box.style.animationDirection = 'alternate-reverse'
    box.style.animationIterationCount = 'infinite'
    box.append(sun)
    box.append(moon)
    this.suns.push(sun)
    this.suns.push(moon)
    const body = $('body')
    body.append(box)
  }
}

function Rain () {
}
Rain.prototype = {

  makeItRain: function () {
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = '#131339'
    for (let i = 1; i < 300; i++){
      const dropLeft = randRange(1, 100)
      const dropTop =  randRange(-1000, -200)
      const op = randRange(1, 3)
      const raindrop = document.createElement('div')
      raindrop.className ="drop"
      raindrop.id = 'drop'+ i
      var duration = Math.abs(dropTop)/100
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

function Snow () {
 this.snowflakes = []
}

Snow.prototype = {
  snow: function () {
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = '#131339'
    for (let i = 1; i < 200; i++){
      const dropLeft = randRange(0, 500)
      const dropTop =  randRange(-200, -50)
      const op = randRange(1, 3)
      const snowflake = document.createElement('div')
      snowflake.className ="snow"
      snowflake.id = 'snow'+ i
      var duration = Math.abs(dropTop)/5
      snowflake.style.left = dropLeft+'px'
      snowflake.style.top = dropTop+'%'
      snowflake.style.animation = `snow linear ${duration}s infinite`
      if(op == 1){
        snowflake.style.opacity= 0.3
      }
      else if (op == 2){
        snowflake.style.opacity= 0.6
      }
      // $(box).mouseleave(function(){
      //   var relX = event.pageX - $(this).offset().left;
      //   document.documentElement.style.setProperty('--snow_left', dropLeft+'px');
      // });
      // $(box).mouseenter(function(event){
      //   var relX = event.pageX - $(this).offset().left;
      //   document.documentElement.style.setProperty('--snow_left', '10px');
      //   if (relX <= 250 ){
      //     document.documentElement.style.setProperty('--snow_left', '10px');
      //   }
      //   else{
      //     document.documentElement.style.setProperty('--snow_left', '-10px');
      //   }
      // });
      box.append(snowflake)
      this.snowflakes.push(snowflake)
    }


    const body = $('body')
    body.append(box)
  }
  const title = document.createElement('header')
  const text = document.createTextNode('Snow')
  title.appendChild(text)
  box.append(title)
}
