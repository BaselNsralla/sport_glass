
var $  = require('jquery')
class Slider {
  constructor(wrapper, start = 0) {
    this.next = start + 1
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
    $('.tint').click(this.forceSlideChange.bind(this))
    $(this.sheets[this.next-1]).show()
    this.blurInactiveTint(this.next-1)
    this.restartShow()
  }

  restartShow() {
    if (this.interval) {
      clearInterval(this.interval)
    }
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.interval = setInterval(()=>this.setActive((this.next)%this.sheets.length), 4000)
  }
  
  createTints(count) {
    let tintFather = document.createElement('div')
    tintFather.className = 'tint-container'
    for(var i = 0; i < count; i++) {
      let tint =  document.createElement('div')
      tint.className = 'tint'
      tint.setAttribute("index", i)
      this.tints[i] = tint
      tintFather.appendChild(tint)
    }
    $(`${this.wrapper}`).append(tintFather)
    this.buildCSS()    
  }

  forceSlideChange(e) {
      let n = e.currentTarget.getAttribute('index')%this.sheets.length
      if(this.next - 1 !== n) {
        this.restartShow()
        this.next = n
        this.setActive(this.next)
      }
  }

  setActive(index) {
    this.blurInactiveTint(index)
    this.sheets.map((i, element) => {
      //if (index !== i ) {
        $(this.sheets[i]).slideUp()
      //}
    })
    this.timeout = setTimeout(()=>$(this.sheets[index]).slideDown(),300)
    this.next = (this.next + 1)%this.sheets.length
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
