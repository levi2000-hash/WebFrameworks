var tekst = document.getElementById("tekst").value

console.log(tekst)

function getValue(){
    alert(document.getElementById("tekst").value)
}

if(document.activeElement =! document.getElementById("tekst")){
    getValue()
}