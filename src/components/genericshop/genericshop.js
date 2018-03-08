var $  = require('jquery')
var _CUR = 'SEK'
export class GenericShop {
  constructor () {
    // this.items = {
    //   men:[{notch: 'Title1'}, {notch: 'Title2'}, {notch: 'Title3'}],
    //   women: {

    //   }
    // }
    this.items = [
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR},
                   {notch: 'Title1', image:'scarf.jpg', price:'43'+_CUR}
                 ]
  }

  activate(params) {
    this.gender = params.gender
    console.log(this.gender)
  }

  attached() {
    var lastScroll = 0
    var fixed = false
    $(window).scroll(function (event) {
      var _scroll = $(window).scrollTop();
      if(_scroll < 140 && _scroll > 115) {
        $('.header').addClass('sticky-top')
        fixed = true
      }

      if(_scroll < 115) {
        $('.header').removeClass('sticky')
        fixed = false
      }

      if(lastScroll > _scroll && fixed) {
        $('.header').addClass('hidden-animated')
      }

      lastScroll = _scroll
    });
    
  }

}
