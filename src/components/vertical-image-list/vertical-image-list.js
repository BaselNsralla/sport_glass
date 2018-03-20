import {inject, bindable} from 'aurelia-framework'
import {I18N} from 'aurelia-i18n';
import webAPI from '../../tools/webAPI'

@inject(I18N, webAPI)
export class VerticalImageList {
	@bindable currentImage

	currentImageChanged(newCurrentImage){
		this.currentImage = newCurrentImage
	}

	constructor(I18N, webAPI) {
		this.i18n = I18N
		this.webAPI = webAPI
		this.imageList = []
	}

	activate(id) {
		this.webAPI.getImagesFor(id).then((data) => this.imageList = data)
	}

}