/**
 * 括号匹配问题
 * 思路，维护一个left数组，遍历字符串，如果是左边括号，push进去
 * 如果是右括号，left出栈,看是否匹配，不匹配，返回false
 * 最后，看左括号长度是否为0
 */
function isValid(str) {
    const left = [];
    let patten = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for (let i = 0; i < str.length; i++) {
        // 存在
        if (patten[str[i]]) {
            left.push(str[i])
        }
        if (Object.values(patten).includes(str[i])) {
            // 如果是右括号
            let leftValue = left.pop();
            if (patten[leftValue] !== str[i]) {
                return false;
            }
            continue;
        }
    }
    return left.length === 0;
}
// 测试
console.log(isValid('{}[]()'));
console.log(isValid('{][]()'));
console.log(isValid('[]}[]()'));
console.log(isValid('([])'));