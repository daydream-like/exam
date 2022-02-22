/**
 * 对两个有序数组重新合并排序
 * 这里主要是要利用两个数组有序这个条件,所以只需两个指针分别指向两个数组,
 * 当其中一个小于另外一个就移动该指针,反之则移动另外一个指针,如果相等则均向后移动.
 *  结束条件是,当任意一个数组的指针移到末尾则跳出循环,
 * 那么只需把另外一个数组没有比较完的部分直接用concat拼到新数组后面
 */
function sortArr(arr1, arr2) {
    let i = 0, j = 0;
    let newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++
        } else if (arr1[i] === arr2[j]) {
            newArr = newArr.concat(arr1[i], arr2[j])
            i++, j++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) {
        return newArr.concat(arr1.splice(i))
    } else if (j < arr2.length) {
        return newArr.concat(arr2.splice(j))
    } else {
        return newArr;
    }
}
console.log(sortArr([1, 2, 3], [1, 2, 3, 4]))