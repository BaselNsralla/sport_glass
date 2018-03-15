export default class ItemDetails {
	
	constructor() {
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
				price: '124213$GLOBAL_CUR',
				category: '',
				cur: '$',
				images: ['http://www.gstatic.com/webp/gallery/1.jpg','http://www.gstatic.com/webp/gallery/2.webp','http://www.gstatic.com/webp/gallery/5.webp']
			}
		)
	}

}