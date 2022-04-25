// Store the wallet amount to your local storage with key "amount"

let addToWallet = () => {
    let amountToAdd = document.querySelector("#amount")
    
    let amountLocal = +localStorage.getItem("amount") || 0

    let show = amountLocal + (Number(amountToAdd.value))

    document.querySelector("#wallet").innerText = show;

    localStorage.setItem("amount",show)
}

let addToWallet1 = () => {
    
    let amountLocal = +localStorage.getItem("amount") || 0

    let show = amountLocal

    document.querySelector("#wallet").innerText = show;
}
addToWallet1()
