/**
 * 
 * @param {*} v1 
 * @param {*} v2 
 * 支持不同位数的比较 2.0.0.0.0.1 2.0 对比
    “3.0”, “3”
    “3.0.0.1”, “3.0”
    “3.0.0”, “3.0”
 */
function compareVersions(v1, v2) {
    let result = 0;
    let v1Arr = v1.split('.');
    let v2Arr = v2.split('.');
    let maxLen = Math.max(v1Arr.length, v2Arr.length);
    if (v1Arr.length < v2Arr.length) {
        v1Arr = Array.from(v1Arr.concat(Array(v2Arr.length - v1Arr.length).fill('0')))
    }
    if (v1Arr.length > v2Arr.length) {
        v2Arr = Array.from(v2Arr.concat(Array(v1Arr.length - v2Arr.length).fill('0')))
    }
    while (maxLen--) {
        let v1Value = v1Arr.shift();
        let v2Value = v2Arr.shift();
        if (parseFloat(v1Value) === parseFloat(v2Value)) {
            result = 0;
            continue;
        }
        if (parseFloat(v1Value) > parseFloat(v2Value)) {
            return 1;
        }
        if (parseFloat(v1Value) < parseFloat(v2Value)) {
            return -1;
        }

    }
    return result;
}
console.log(compareVersions('2.0.0.0.0.1', '2.0'))
console.log(compareVersions('2.0.0.0.0.1', '2.0.1'))
console.log(compareVersions('2.0.1.0', '2.0.1'))