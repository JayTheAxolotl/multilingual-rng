let listOfNum = []

function averageFromList(list){
    let temp = 0
    for(i=list.length; i>0; i--){
        temp = temp + list[i-1]
    }
    return temp/list.length
}

function randomInt(max){
    return Math.floor(Math.random()*max)
}

function gen(){
    let temp = randomInt(100)
    document.getElementById("out").innerHTML = temp
    listOfNum.push(temp) 
    document.getElementById("avg").innerHTML = ["num",averageFromList(listOfNum)]
}