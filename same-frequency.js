// add whatever parameters you deem necessary
function sameFrequency(int1,int2) {
    let str1= int1.toString()
    let str2 = int2.toString()
    let int1Freq = {}
    let int2Freq= {}

    for(let int of str1){
        int1Freq[int] = ++int1Freq[int] || 1
    }

    for(let int of str2){
        int2Freq[int] = ++int2Freq[int] || 1
    }

    for(let char in int1Freq){
        if (int2Freq[char] !== int1Freq[char]) return false
    }

    return true
}

module.exports = sameFrequency
