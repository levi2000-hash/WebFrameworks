document.addEventListener('mousemove',(event) => {
    if(event.clientX <= 200 && event.clientY <= 200){
        console.log(event.clientX + " " + event.clientY)
    }
})

var cxt = document.getElementById("cxt")
var ctx = cxt.getContext('2d')
ctx.fillRect(20, 20, 200, 200);