function randomBetweenInt(min, max){
    tMax = (max+1) - min
    return Math.floor(Math.random()*tMax) + min
}

function gen(){
    let temp = randomBetweenInt(Number(document.getElementById("min").value), Number(document.getElementById("max").value))
    document.getElementById("out").innerHTML = temp
}

gen()