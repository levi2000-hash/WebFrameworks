btn1 = document.getElementById("button1")
btn2 = document.getElementById("button2")


function redirectToCard1(){
    location.assign('card1.html')
    this.disabled = true;
    btn2.disabled = false;
}

function redirectToCard2(){
    location.assign('card2.html')
    this.disabled = true;
    btn1.disabled = false;
}