//import { tns } from "path/to/tiny-slider/src/tiny-slider.module"
var Slider = require('../../tools/slider')
import {inject} from 'aurelia-framework';

export class Home {
    constructor () {
      console.log()
      this.slider = new Slider('.slick')
    }
    attached() {
      this.slider.init()
    }
    activate () {
      console.log('stuff')
    }
}
