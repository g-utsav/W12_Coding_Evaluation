// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let get = (id) => {
    return document.getElementById(id);
}
let create = (id) => {
    return document.createElement(id);
}

let addToWallet = () => {
    
    let amountLocal = +localStorage.getItem("amount") || 0

    let show = amountLocal

    document.querySelector("#wallet").innerText = show;
}
addToWallet()

display()
function display(){
    let data = JSON.parse(localStorage.getItem("movie"));
    if(data){
        let body = get("movie")
        body.innerHTML = null;
        function dis({Poster, Title}){
            let div = create("div");

            let img = create("img");
            img.src = Poster;

            let h3 = create("h1");
            h3.innerText = Title;

            div.append(img, h3);

            body.append(div)
        }
        dis(data)
}
}

function bookingConfirm(){
    let num = get("number_of_seats").value
    
    let amount = Number(num)*100;

    let amountLocal = +localStorage.getItem("amount") || 0

    if(amount > amountLocal || amount < 0){
        alert("Insufficient Balance!")
    }else{
    let show = amountLocal - amount
        // console.log(amountLocal - amount,amount)
    document.querySelector("#wallet").innerText = show;

    localStorage.setItem("amount",show)

    alert("Booking successful!")
    }
}