let pumadata = JSON.parse(localStorage.getItem("products")) || [];

append(pumadata)

function append(pumadata){
    pumadata.map(function(elem,index){
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let image = document.createElement("img")
        image.src = elem.image;

        let type = document.createElement("h2")
        type.textContent = elem.type;

        let price = document.createElement("h2")
        price.textContent = elem.price;

        let desc = document.createElement("h3")
        desc.textContent = elem.desc;

        let btn = document.createElement("button")
        btn.setAttribute( "id", "remove_product")
        btn.textContent = "Remove Product";
        btn.addEventListener("click",function(){
            remove(index)
        })
        
       box.append(image,type,desc,price,btn)

        let mainbox = document.getElementById("all_products")
        mainbox.append(box);

     })
}

function remove(index){
    pumadata.splice(index,1)
    localStorage.setItem("products",JSON.stringify(pumadata))
    window.location.reload();
}