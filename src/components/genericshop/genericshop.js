export class GenericShop {
  constructor () {
    // this.items = {
    //   men:[{notch: 'Title1'}, {notch: 'Title2'}, {notch: 'Title3'}],
    //   women: {

    //   }
    // }
    this.items = [
                  [ {notch: 'Title1', image:'scarf.jpg'}, 
                    {notch: 'Title1', image:'scarf.jpg'},  
                    {notch: 'Title1', image:'scarf.jpg'} ],
                  [ {notch: 'Title1', image:'scarf.jpg'},
                    {notch: 'Title1', image:'scarf.jpg'}, 
                    {notch: 'Title1', image:'scarf.jpg'} ]
                 ]
  }

  activate(params) {
    this.gender = params.gender
    console.log(this.gender)
  }
}
