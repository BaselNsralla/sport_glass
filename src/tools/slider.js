var $  = require('jquery')
class Slider {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  init () {
    this.current = 0
    this.sheets = $(`${this.wrapper}`).children('div')
    console.log(this.sheets)
    setInterval(()=>this.setActive((this.current+1)%this.sheets.length), 2000)
  }

  getPotato () {
    console.log('rere')
  }

  setActive(index) {
    console.log(index)
    this.current = (this.current + 1)%this.sheets.length
    this.sheets.map((i, element) => {
      if (index === i ) {
        $(this.sheets[i]).hide()
      } else {
        $(this.sheets[i]).show()
      }
    })
  }

}
module.exports = Slider
