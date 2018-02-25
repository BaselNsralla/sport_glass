export class Nav {
  constructor () {
     this.tabs = [{name: 'Man', submenu: [
                                            {name: 'Helemts', path: 'man/pants'},
                                            {name: 'Akzx', path: 'man/shirts'},
                                            {name: 'Ipsum', path: 'man/zalliff'}
                                         ]}, 
                  {name: 'Woman', submenu: [ 
                                            {name: 'Porta', path: 'man/pants'},
                                            {name: 'Well', path: 'man/shirts'},
                                            {name: 'Find', path: 'man/zalliff'}
                                           ]},
                  {name: 'Kids', submenu: [
                                            {name: 'Pants', path: 'man/pants'},
                                            {name: 'Shirts', path: 'man/shirts'},
                                            {name: 'Zalcon', path: 'man/zalliff'}
                                          ]}]
  }

  activate(selected) {
    console.log('selected')
  }
}
