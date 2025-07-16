let api_key="db9b152766f44e6892b8640edeed1182";
let url="https://newsapi.org/v2/everything";
let search=document.getElementsByClassName("search");
search.addEventListener("keypress",(e)=>
{
    console.log(search.value)
})

let fetchData=async ()=>{
    try{
        let data= await fetch(`${url}?q=${search}&apikey=${api_key}`);
        let jsondata= await data.json();
        console.log(jsondata)
    }
    catch(error){
        console.log(error);
    }

}
fetchData()


