export class Nav {
  constructor () {
     this.tabs = [{name: 'man', submenu: [
                                            {name: 'pants', path: 'man/pants'},
                                            {name: 'shits', path: 'man/shirts'},
                                            {name: 'zallifs', path: 'man/zalliff'}
                                         ]}, 
                  {name: 'Woman', submenu: [ 
                                            {name: 'pants', path: 'man/pants'},
                                            {name: 'shits', path: 'man/shirts'},
                                            {name: 'zallifs', path: 'man/zalliff'}
                                           ]},
                  {name: 'Kids', submenu: [
                                            {name: 'pants', path: 'man/pants'},
                                            {name: 'shits', path: 'man/shirts'},
                                            {name: 'zallifs', path: 'man/zalliff'}
                                          ]}]
  }

  activate(selected) {
    console.log('selected')
  }
}
