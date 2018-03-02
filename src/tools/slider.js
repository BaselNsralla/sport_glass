
var $  = require('jquery')
class Slider {
  constructor(wrapper, start = 0) {
    this.current = start 
    this.wrapper = wrapper
    this.tints = []
  }

  init () {
    this.sheets = $(`${this.wrapper}`).children('div').hide()
    let slider = document.createElement('div')
    slider.className = 'slider'
    $(`${this.wrapper}`).empty()
    $(`${this.wrapper}`).append(slider)
    $('.slider').append(this.sheets)
    $('.slider').css('height',$(`${this.wrapper}`).css('height'))
    this.createTints(this.sheets.length)
    $(this.sheets[this.current]).show()
    this.blurInactiveTint(this.current)
    setInterval(()=>this.setActive((this.current+1)%this.sheets.length), 4000)
  }

  getPotato () {
    console.log('rere')
  }

  createTints(count) {
    let tintFather = document.createElement('div')
    tintFather.className = 'tint-container'
    for(var i = 0; i < count; i++) {
      let tint =  document.createElement('div')
      tint.className = 'tint'
      this.tints[i] = tint
      tintFather.appendChild(tint)
    }
    $(`${this.wrapper}`).append(tintFather)
    this.buildCSS()    
  }

  setActive(index) {
    console.log(index)
    this.current = (this.current + 1)%this.sheets.length
    this.blurInactiveTint(index)
    this.sheets.map((i, element) => {
      if (index === i ) {
        setTimeout(() => $(this.sheets[i]).slideDown(), 300)
      } else {
        $(this.sheets[i]).slideUp()
      }
    })
  }

  blurInactiveTint(index) {
   this.tints.map((tint, i)=> {
     if(i === index) {
       $(tint).css('background-color', 'grey')
     } else {
      $(tint).css('background-color', 'white')
     }
   })
  }

  buildCSS () {
    $('.tint-container').css({
      'width': '275px',
      'height': '50px',
      'background-color': 'yellow',
      'display': 'flex',
      'flex-direction': 'row'
    })
    $('.tint').css({
      'width': '50px',
      'height': '50px',
      'background-color': 'white',
      'padding': '5px',
      'border-radius': '25px'
    })
  }

}
module.exports = Slider
