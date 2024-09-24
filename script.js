let listOfNum = []

function averageList(list){
    let temp = 0
    for(i=list.length; i>0; i--){
        temp += list[i]
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

}