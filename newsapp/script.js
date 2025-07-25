let api_key="db9b152766f44e6892b8640edeed1182";
let url="https://newsapi.org/v2/everything";
let searchinput=document.getElementById("searchinput")
let news_cont=document.getElementById("news-cont")
let load=document.getElementById("load")
let nodata=document.getElementById("no_data")

window.onload=()=>{
    fetchData("movie")
}

searchinput.addEventListener("keydown",(e)=>
{
    if(e.key=="Enter"){
    // console.log(searchinput.value)
        news_cont.innerHTML="";
        fetchData(searchinput.value)
        searchinput.value=""
    }
})

let fetchData=async (search)=>{
    try{
        load.style.display="block";
        let data= await fetch(`${url}?q=${search}&apikey=${api_key}`);
         headers: {
             "User-Agent": "my-news-app"
        }
        let jsondata= await data.json();
        load.style.display="none";
        // console.log(jsondata.articles)
        allNewsData(jsondata.articles)
    }
    catch(error){
        console.log(error);
    }
}
let allNewsData=((data)=>{
   if(data.length===0){
        // console.log("No data found");
        nodata.style.display="block";
    }
    
    else{
        nodata.style.display="none";
    for(let item of data){
        displaynewsdata(item)
    }
}
})


let displaynewsdata=(data)=>{
    console.log(data)
    let div=document.createElement("div")
    div.classList.add("cart")
    let image=document.createElement("img")
    if(!data.urlToImage) return;
    image.src=data.urlToImage;
    image.style.width="100%";
    image.style.height="60%";
    div.appendChild(image);

    let h3=document.createElement("h3");
    h3.innerHTML = data.author ? data.author : "Unknown Author";
    h3.classList.add("author");
    div.appendChild(h3);

    let p=document.createElement("p");
    p.innerHTML = data.content ? data.content : "No content available";
    p.classList.add("content");
    div.appendChild(p);

    let a=document.createElement("a")
    a.innerHTML="viewmore"
    a.href=data.url
    a.target="_blank"
    div.appendChild(a)

    news_cont.appendChild(div)

}
// Category button click logic
const categoryButtons = document.querySelectorAll('.cat-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        searchinput.value = category;         
        news_cont.innerHTML = "";      
        searchinput.value=""       
        fetchData(category);                  
    });
});





