//store the products array in localstorage as "products"
function pumadata(type,desc,price,image){
this.type = type;
this.desc = desc;
this.price = price;
this.image = image;
}

let productarray = JSON.parse(localStorage.getItem("products")) || [];

function Adddata(event){
    event.preventDefault();
    console.log("clicked")

    let form = document.getElementById("products")

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let productdetail = new pumadata(type, desc,price,image)
    productarray.push(productdetail)
    console.log( productarray)
    localStorage.setItem("products",JSON.stringify(  productarray));

}
