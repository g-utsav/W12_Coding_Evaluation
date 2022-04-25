// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?s=Batman&page=2&apikey=ff58d175

let get = (id) => {
    return document.getElementById(id);
}
let create = (id) => {
    return document.createElement(id);
}

let getData = async (q) =>{
    try{
    let res = await fetch(`https://www.omdbapi.com/?s=${q}&page=1&apikey=ff58d175`)
    res = (await res.json()).Search
    return res;
    }catch(err){
        console.log(err)
    }
}

function display(data){
    console.log(data)
    if(data){
        let body = get("movies")
        body.innerHTML = null;
        data.map(({Poster, Title}) => {
            let div = create("div");

            let img = create("img");
            img.src = Poster;

            let h3 = create("h3");
            h3.innerText = Title;

            let button = create("button");
            button.setAttribute("class", "book_now")
            button.innerText = "book now"
            button.addEventListener("click", function(){
                buttonClick({Poster,Title});
            })

            div.append(img, h3, button);

            body.append(div)
        })
}
}

let main = async () =>  {
    let query = get("search").value
    let data = await getData(query)
    console.log(data)
    display(data)
}

let id;
let debounce = (func,dealy) =>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        func()
    },dealy)
}

let addToWallet = () => {
    
    let amountLocal = +localStorage.getItem("amount") || 0

    let show = amountLocal

    document.querySelector("#wallet").innerText = show;
}
addToWallet()

function  buttonClick(data){
    console.log(data)

    localStorage.setItem("movie", JSON.stringify(data))

    window.location.href = "./checkout.html"
}