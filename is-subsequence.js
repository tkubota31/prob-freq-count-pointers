// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // let str1Freq = {}
    // let str2Freq ={}

    // for(let char of str1){
    //     str1Freq[char] = str1Freq[char] + 1 || 1
    // }
    // for(let char of str2){
    //     str2Freq[char] = str2Freq[char] + 1 || 1
    // }

    // for(let key in str1){
    //     if(!str2[key]){
    //         return false
    //     }
    // }
    // return true
    let str1Idx = 0
    let str2Idx =0

    while(str2Idx < str2.length){
        if(str2[str2Idx] === str1[str1Idx]){
            str1Idx ++
        }
        if(str1Idx === str1.length){
            return true
        }
        str2Idx ++
    }
    return false
}

console.log(isSubsequence('abc', 'acb'))
module.exports = isSubsequence
