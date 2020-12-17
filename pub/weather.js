"use strict";
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clouds (){
  const cloud = document.createElement('div')
  const width = randRange(80,150)

  cloud.className = 'clouds'
  console.log(width)
  cloud.style.width = width+'px'
  cloud.style.height = width+'px'
  return cloud;
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
    for(let i = 0; i <=10;i++){
      const cloud = clouds()
      cloud.style.left = (i*50-50)+'px'
      box.append(cloud)

    }


    const body = $('body')
    body.append(box)
    const title = document.createElement('header')
    title.className = 'header'
    const text = document.createTextNode('Rising Sun and Moon (Click me!)')
    title.appendChild(text)
    body.append(title)
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
    const title = document.createElement('header')
    title.className = 'header'
    const text = document.createTextNode('Day and Night')
    title.appendChild(text)
    body.append(title)
  }
}

function Rain () {
  this.raindrops = []
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
      this.raindrops.push(raindrop)
    }
    const body = $('body')
    body.append(box)
    const title = document.createElement('header')
    title.className = 'header'
    const text = document.createTextNode('Rain')
    title.appendChild(text)
    body.append(title)
  }
}

function Snow () {
 this.snowflakes = []
 this.duration =[]
}

Snow.prototype = {
  snow: function (intensity = 200) {
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = '#131339'
    for (let i = 1; i < intensity; i++){
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

      box.append(snowflake)
      this.snowflakes.push(snowflake)
      this.duration.push(duration)
    }
    const button =document.createElement('button')
    button.id = 'button'
    box.append(button)
    const body = $('body')
    const title = document.createElement('header')
    title.className = 'header'
    const text = document.createTextNode('Snow')
    title.appendChild(text)
    body.append(box)
    body.append(title)
  },
  speed: function(){
    const button =document.getElementById('button')

    button.onclick = function (){
      for (let i = 0; i < this.snowflakes.length;i++){
        this.snowflakes[i].style.animation = `snow linear ${this.duration[i]*0.5}s infinite`
      }
    }

  }

}
