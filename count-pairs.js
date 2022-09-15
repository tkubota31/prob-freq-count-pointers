// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr.sort((a,b) => a-b)
    let count = 0;
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        if(arr[left] + arr[right] === num){
            count ++
            left++
            right --
        } else if(arr[left] + arr[right] < num){
            left ++
        } else{
            right --
        }
    }
return count
}

module.exports = countPairs

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
