var $  = require('jquery')
var _CUR = 'SEK'
export class GenericShop {
  constructor () {
    this.hiddenHeader = false
    this.items = [
                   {notch: 'Title1', id:'1',   image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'12',  image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'13',  image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'4',   image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'5',   image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'67',  image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'8',   image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'3',   image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'99',  image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', id:'234', image:'scarf.jpg', price:'43'+_CUR}
                 ]
  }

  activate(params) {
    this.gender = params.gender
  }

  smoothlyHide(headerClass, cb) {
    if (this.hiddenHeader == false){
      this.reanimate(headerClass)
      
      this.hideHeaderTimeout = setTimeout(() => {
        $(headerClass).addClass('smooth-hide')
        this.hiddenHeader = true
      }, 2000)
    }
  }

  smoothleyShow(headerClass, cb) {
    if(this.hiddenHeader){
      this.reanimate(headerClass)
      $(headerClass).addClass('smooth-show')
      this.hiddenHeader = false
      cb()
    }
  }

  reanimate(headerClass) {
    var elm = document.getElementsByClassName('header')[0]
    elm.classList.remove('smooth-show')
    elm.classList.remove('smooth-hide')  
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
  }

  removeClassIfNeeded(owner ,shown, hidden) {
    if (this.hiddenHeader){
      $(owner).removeClass(hidden)
    } else {
      $(owner).removeClass(shown)
    }
  }

  attached() {
    var lastScroll = 0
    var fixed = false
    $(window).scroll((event) => {
      var _scroll = $(window).scrollTop()
      clearTimeout(this.hideHeaderTimeout)
      if(lastScroll < _scroll && _scroll > 120) {
        this.smoothlyHide('.header', ()=> {})
      }
      if(lastScroll > _scroll) {
        this.smoothleyShow('.header', ()=> {})
      }
      lastScroll = _scroll
    });
  }
}
