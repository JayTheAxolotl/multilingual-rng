function randomInt(){
    return Math.floor(Math.random()*100)
}

function gen(){
    document.getElementById("out").innerHTML = randomInt()
}