/**
 * 将普通的数字转换为带千位分隔符格式的数字字符串是一个非常常见的问题，
 * 千位分隔符格式的规则是数字的整数部分每三位一组，以“，”分节。小数部分不分节 。
 */
function numFormat(num) {
    let arr = num.toString().split('').reverse();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            result.push(',')
        }
        result.push(arr[i])
    }
    return result.reverse().join('')
}
console.log(numFormat(1234567))
console.log(numFormat(123456789))