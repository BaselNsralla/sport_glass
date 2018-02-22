var $ = require('jquery');
export class Submenu {
  
  constructor() {
    this.tabs = []
  }

  activate(withTabs) {
    this.tabs = withTabs.submenu
  }
}
