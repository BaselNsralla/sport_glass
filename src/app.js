export class App {
  
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    this.router = router
    config.title = 'Home'
    config.map([
      { route: ['/shop/:gender', 'home/shop/:gender'], 
        name:  'sellMain',  
        moduleId: './components/genericshop/genericshop',   
        title: 'Shop',
      },
      { 
        route: ['home', ''], 
        name:  'home',  
        moduleId: './components/home/home',  
        nav: true,  
        title: 'Home' 
      }
    ])
  }
}
