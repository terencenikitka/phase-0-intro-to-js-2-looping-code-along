function writeCards(arr,name){
    let result = []
    for (let i = 0; i<arr.length ; i++){
       result.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`)
    }
    return result
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))
function countDown (i){
    while (i>=0){
        console.log(i)
        i--
    }
}