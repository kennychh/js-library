"use strict";
function randRange(minN, maxN) {
  return (Math.floor(Math.random()*(minN-maxN+1))+minN);
}

function Rain () {
  this.raindrops = []
}
Rain.prototype = {

  makeItRain: function () {
    for (var i = 1; i < 500; i++){
      var dropLeft = randRange(0, 1600)
      var dropTop =  randRange(-1000, 1400)
    }
    const raindrop = document.createElement('div')
    raindrop.className ="drop"
    raindrop.id = 'drop' + i
    $('#drop'+i).css('left', dropLeft)
    $('#drop'+i).css('top', dropTop)
    const body = $('body')
    body.append(raindrop)
    this.raindrops.push(raindrop)
  }
}
