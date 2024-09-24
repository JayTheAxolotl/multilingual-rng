let average = []

function randomInt(max){
    return Math.floor(Math.random()*max)
}

function gen(){
    let temp = randomInt(100)
    document.getElementById("out").innerHTML = temp
    average.push(temp) 

}