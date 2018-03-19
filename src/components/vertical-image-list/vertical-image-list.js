import {Inject} from 'aurelia-framework'
import {I18N} from 'aurelia-i18n';
import webAPI from '../../tools/webAPI'

@inject(I18N, webAPI)
class VerticalImageList {
	constructor(I18N) {
		this.i18n = i18
		this.webAPI = webAPI
		this.imageList = []
	}

	acrivate(id) {
		this.imageList = this.webAPI.getImagesFor(id)
	}

}