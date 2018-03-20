class WebAPI {
	constructor(){

	}
	getImagesFor(id) {
		return Promise.resolve([
			"https://picsum.photos/200/?random","https://picsum.photos/200/?random","https://picsum.photos/200/?random",
			"https://picsum.photos/200/?random","https://picsum.photos/200/?random"
		])
	}

}
var webAPI = new WebAPI()

export default webAPI