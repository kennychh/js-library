
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addTitle(str) {
  const body = $('body')
  const title = document.createElement('header')
  title.className = 'header'
  const text = document.createTextNode(str)
  title.appendChild(text)
  body.append(title)
}
function clouds (i){
  const cloud = document.createElement('div')
  const width = randRange(80,150)
  cloud.className = 'clouds'
  cloud.id ='cloud'+i
  cloud.style.width = width+'px'
  cloud.style.height = width+'px'
  return cloud;
}
function Sun () {
  this.suns = []
}

Sun.prototype = {
  makeSunMoon: function (isItCloudy =true, haveButtons = true) {
    const that = this
    var sunrise = true
    var cloudList = []
    var haveClouds = isItCloudy
    const sun = document.createElement('div')
    const moon = document.createElement('div')
    moon.className = 'moon'
    sun.className = "sun"
    const box = document.createElement('div')
    box.className = "sunbox"
    box.id = "sunbox"
    if(haveClouds) {
      for(let i = 0; i <=50;i++){
        const cloud = clouds(i+"makeSunMoon")
        cloudList.push(cloud)
        cloud.style.left = (i*50-50)+'px'
        box.append(cloud)
      }
    }
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

        for(let i = 0; i <cloudList.length;i++){
          cloudList[i].style.animationName ='cloudyNight'
          cloudList[i].style.animationDuration = '3s'
          cloudList[i].style.animationFillMode = 'forwards'
        }
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
        for(let i = 0; i <cloudList.length;i++){
          cloudList[i].style.animationName ='cloudyDay'
          cloudList[i].style.animationDuration = '3s'
          cloudList[i].style.animationFillMode = 'forwards'
        }
      }

    })
    if(haveButtons){
      const button =document.createElement('button')
      button.id = 'cloud2_button'
      button.className = 'button_position'
      button.textContent = 'Clouds'
      $(document).on('click', '#cloud2_button', function () {
        if (haveClouds){
          for(let i = 0; i <cloudList.length;i++){
            $('#cloud'+i+"makeSunMoon").hide();
          }
          haveClouds = false
        }
        else{
          for(let i = 0; i <cloudList.length;i++){
            $('#cloud'+i+"makeSunMoon").show();
          }
          haveClouds = true
        }
      })
      const wrapper = document.createElement('div')
      wrapper.className = 'wrapper'
      wrapper.append(button)
      box.append(wrapper)
    }
    box.append(sun)
    box.append(moon)

    this.suns.push(sun)
    this.suns.push(moon)

    const body = $('body')
    body.append(box)
    return box
  },
  makeNightDay: function(isItCloudy = true, haveButtons =  true){
    const sun = document.createElement('div')
    const moon = document.createElement('div')
    var cloudList = []
    var haveClouds = isItCloudy
    moon.className = 'moon'
    sun.className = "sun"
    const box = document.createElement('div')
    if(haveClouds){
      for(let i = 0; i <=50;i++){
        const cloud = clouds(i+"makeNightDay")
        cloudList.push(cloud)
        cloud.style.left = (i*50-50)+'px'
        box.append(cloud)
      }
    }
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
    if(haveButtons){
      const button =document.createElement('button')
      button.id = 'cloud2_button'
      button.className = 'button_position'
      button.textContent = 'Clouds'
      $(document).on('click', '#cloud2_button', function () {
        if (haveClouds){
          for(let i = 0; i <cloudList.length;i++){
            $('#cloud'+i+"makeNightDay").hide();
          }
          haveClouds = false
        }
        else{
          for(let i = 0; i <cloudList.length;i++){
            $('#cloud'+i+"makeNightDay").show();
          }
          haveClouds = true
        }
      })
      const wrapper = document.createElement('div')
      wrapper.className = 'wrapper'
      wrapper.append(button)
      box.append(wrapper)
    }
    const body = $('body')
    body.append(box)
    return box
  }
}

function Rain () {
  this.raindrops = []
  this.raindrops_save = []
}
Rain.prototype = {

  makeItRain: function (haveButtons = true) {
    const that = this
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = '#131339'
    for (let i = 1; i < 600; i++){
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
      this.raindrops_save.push(raindrop)
    }
    if (haveButtons) {
      const button =document.createElement('button')
      button.id = 'rain_button'
      button.className = 'button_position'
      button.textContent = 'Light'
      const button2 =document.createElement('button')
      button2.id = 'rain_button2'
      button2.className = 'button_position'
      button2.textContent = 'Normal'
      const button3 =document.createElement('button')
      button3.id = 'rain_button3'
      button3.className = 'button_position'
      button3.textContent = 'Heavy'
      $(document).on('click', '#rain_button', function () {
        that.intensity(0)
      })
      $(document).on('click', '#rain_button2', function () {
        that.intensity(1)
      })
      $(document).on('click', '#rain_button3', function () {
        that.intensity(2)
      })
      const wrapper = document.createElement('div')
      wrapper.className = 'wrapper'
      wrapper.append(button)
      wrapper.append(button2)
      wrapper.append(button3)
      box.append(wrapper)
    }
    const body = $('body')
    body.append(box)
    return box
  },
  intensity: function (intense) {
    if (intense == 0){
      for (let i = 0; i < this.raindrops.length;i++){
        const op = randRange(1, 3)
        if(op == 1){
          this.raindrops[i].style.opacity= 0.3
        }
        else if (op == 2){
          this.raindrops[i].style.opacity= 0.6
        }
      }
      for (let i = 0; i < 500;i++){
        this.raindrops[i].style.opacity= 0
      }
    }
    else if (intense == 1){
      for (let i = 0; i < this.raindrops.length;i++){
        const op = randRange(1, 3)
        if(op == 1){
          this.raindrops[i].style.opacity= 0.3
        }
        else if (op == 2){
          this.raindrops[i].style.opacity= 0.6
        }
      }
      for (let i = 0; i < 400;i= i+4){
        this.raindrops[i].style.opacity= 0
      }
    }
    else {
      for (let i = 0; i < this.raindrops.length;i++){
        const op = randRange(1, 3)
        if(op == 1){
          this.raindrops[i].style.opacity= 0.3
        }
        else if (op == 2){
          this.raindrops[i].style.opacity= 0.6
        }
      }
    }
  }
}

function Snow () {
 this.snowflakes = []
 this.duration =[]
}

Snow.prototype = {
  snow: function (intensity = 200, haveButtons = true) {
    const body = $('body')
    const that = this
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = '#131339'
    for (let i = 1; i < intensity; i++){
      const dropLeft = randRange(0, 100)
      const dropTop =  randRange(-200, -50)
      const op = randRange(1, 3)
      const snowflake = document.createElement('div')
      snowflake.className ="snow"
      snowflake.id = 'snow'+ i
      var duration = Math.abs(dropTop)/5
      snowflake.style.left = dropLeft+'%'
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
    if(haveButtons) {
      const button =document.createElement('button')
      button.id = 'snow_speed_button'
      button.className = 'button_position'
      button.textContent = 'Faster'
      const button2 =document.createElement('button')
      button2.id = 'snow_speed_button2'
      button2.className = 'button_position'
      button2.textContent = 'Normal'
      const button3 =document.createElement('button')
      button3.id = 'snow_speed_button3'
      button3.className = 'button_position'
      button3.textContent = 'Slower'
      $(document).on('click', '#snow_speed_button', function () {
        that.speed(0.5)
      })
      $(document).on('click', '#snow_speed_button2', function () {
        that.speed(1)
      })
      $(document).on('click', '#snow_speed_button3', function () {
        that.speed(2)
      })
      const wrapper = document.createElement('div')
      wrapper.className = 'wrapper'
      wrapper.append(button)
      wrapper.append(button2)
      wrapper.append(button3)
      box.append(wrapper)
    }
    body.append(box)
    return box
  },
  speed: function(speed){
    for (let i = 0; i < this.snowflakes.length;i++){
      this.snowflakes[i].style.animation = `snow linear ${this.duration[i]*speed}s infinite`
    }

  }

}
