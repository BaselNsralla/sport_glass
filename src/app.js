import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(I18N)
export class App {
  constructor(I18N) {
    this.i18n = I18N
    this.message = 'Hello World!';
    this.i18n.setLocale('se')
  }

  configureRouter(config, router) {
    this.router = router
    config.title = 'Home'
    config.map([
      { route: ['/shop/:gender', 'home/shop/:gender'], 
        name:  'shop',  
        moduleId: './components/genericshop/genericshop',   
        title: 'Shop',
      },
      { 
        route: ['home', ''], 
        name:  'home',  
        moduleId: './components/home/home',  
        nav: true,  
        title: 'Home' 
      },
      {
        route: ['/shop/item/:id'],
        name: 'item-details',
        moduleId: './components/item-details/item-details',
        title: 'Item'
      }
    ])
  }
}
