import {I18N} from 'aurelia-i18n';

export default class ItemDetails {

	static inject = [I18N];
	constructor(I18N) {
    this.i18n = I18N;
		this.id
	}

	created(){
		this.details = this.getItemWithId(this.id)
	}

	activate(params) {
		this.id = params.id
	}

	getItemWithId(id) {
		return (
			{
				id: id,
				type: 'shirt',
				color: 'lala',
				title: 'GOOD STUFF',
				price: '599$',
				category: 'men',
				type: 'shirt',
				cur: '$',
				images: ['http://www.gstatic.com/webp/gallery/1.jpg','http://www.gstatic.com/webp/gallery/2.webp','http://www.gstatic.com/webp/gallery/5.webp']
			}
		)
	}

}