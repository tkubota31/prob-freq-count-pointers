// add whatever parameters you deem necessary
function constructNote(msg,letters) {

    function frequencyCounter(str){
        let map = new Map()
        for(let letter of str){
            let count = map.get(letter) || 0
            map.set(letter, count + 1)
        }
        return map
    }

    let msgCount = frequencyCounter(msg)
    let lettersCount = frequencyCounter(letters)


    for(let key of msgCount.keys()){
        if(!lettersCount.has(key)) return false
        if(msgCount.get(key) > lettersCount.get(key)) return false
    }
    return true
}



module.exports = constructNote

console.log(constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd"))
