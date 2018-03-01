var $  = require('jquery')
class Slider {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  init () {
    this.current = 0
    this.sheets = $(`${this.wrapper}`).children('div').hide()
    $(this.sheets[this.current]).show()
    setInterval(()=>this.setActive((this.current+1)%this.sheets.length), 4000)
  }

  getPotato () {
    console.log('rere')
  }

  setActive(index) {
    console.log(index)
    this.current = (this.current + 1)%this.sheets.length
    this.sheets.map((i, element) => {
      if (index === i ) {
        $(this.sheets[i]).show()
      } else {
        $(this.sheets[i]).hide()
      }
    })
  }

}
module.exports = Slider
