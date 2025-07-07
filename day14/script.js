// let user_id=prompt("enter id b/w 1-20")
// fetch(`https://fakestoreapi.com/products/${user_id}`).then(abc=>abc.json()).then(xyz=>console.log(xyz))

// let id=prompt("enter prod id(1-20)")
// let products
// console.log("before API")
// fetch(`https://fakestoreapi.com/products/${id}`).then(abc=>abc.json()).then(xyz=>products=xyz)
// setTimeout(()=>{
//     console.log(products,"after api")

// },2000)


let product = []
fetch(`https://fakestoreapi.com/products`).then(abc=>abc.json()).then(xyz=>{product=xyz

let page_title=document.createElement("h1");
page_title.innerText="PRODUCTS";
page_title.style.textAlign="center";
page_title.style.textDecoration="underline";
page_title.style.color="orange"
document.body.append(page_title);
// page_title.textTransform="capitalize";

let seperator=document.createElement("hr");
document.body.append(seperator);
let main_container=document.createElement("div");
main_container.style.display="flex";
main_container.style.border="2px solid black";
main_container.style.flexWrap="wrap";
main_container.style.gap="15px";
main_container.style.justifyContent="space-evenly";
document.body.append(main_container);

product.forEach(function(val,ind,arr){
    let card_container=document.createElement("div");
    card_container.style.border="1px solid #e2e2e2"
    card_container.style.height="400px"
    card_container.style.width="20%"
    card_container.style.alignContent="center"


    let prd_id=document.createElement("p");
    prd_id.innerText=val.id

    let prd_title=document.createElement("p")
    prd_title.innerText=val.title.slice(0,20)

    let prd_price=document.createElement("p")
    prd_price.innerText=val.price

    let prd_rate=document.createElement("p")
    prd_rate.innerText=val.rating.rate

    let prd_img=document.createElement("img")
    prd_img.setAttribute("src",val.image)
    prd_img.setAttribute("height","200px")
    prd_img.setAttribute("width","200px")   

    card_container.append(prd_img,prd_id,prd_title,prd_price,prd_rate)
    main_container.append(card_container);
   
})
 
})
setTimeout(()=>{

},2000);


