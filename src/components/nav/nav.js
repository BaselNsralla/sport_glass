export class Nav {
  constructor () {
     this.tabs = [{name: 'Men', submenu: [
                                            {name: 'Helemts', route:'shop', param: 'men'},
                                            {name: 'Akzx', route:'shop', param: 'shirts'},
                                            {name: 'Ipsum', route:'shop', param: 'zalliff'}
                                         ]}, 
                  {name: 'Women', submenu: [ 
                                            {name: 'Porta', route:'shop', param: 'pants'},
                                            {name: 'Well', route:'shop', param: 'shirts'},
                                            {name: 'Find', route:'shop', param: 'zalliff'}
                                           ]},
                  {name: 'Kids', submenu: [
                                            {name: 'Pants', route:'shop', param: 'pants'},
                                            {name: 'Shirts', route:'shop', param: 'shirts'},
                                            {name: 'Zalcon', route:'shop', param: 'alliff'}
                                          ]}]
  }

  activate(selected) {
    console.log('selected')
  }
}
