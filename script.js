let listOfNum = []

function averageFromList(list){
    let temp = 0
    for(i=list.length; i>0; i--){
        temp = temp + list[i-1]
    }
    return temp/list.length
}

function randomBetweenInt(min, max){
    tMax = (max+1) - min
    return Math.floor(Math.random()*tMax) + min
}

function gen(){
    let temp = randomBetweenInt(Number(document.getElementById("min").value), Number(document.getElementById("max").value))
    document.getElementById("out").innerHTML = temp
    listOfNum.push(temp) 
    document.getElementById("avg").innerHTML = ["avg", averageFromList(listOfNum)]
}

gen()