/**
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
示例 1：
输入: “babad”
输出: “bab”
注意: “aba” 也是一个有效答案。
示例 2：
输入: “cbbd”
输出: “bb”

dp[i][j]表示子串s[i...j]i到j是回文子串
i   j
abbba
idaoj是回文，那么代表去掉和j，中间的也是回文
i+1   j-1
b  b  b
那么得到状态转移方程dp[i][j] === s[i...j]  && dp[i+1][j-1]

边界条件 (j-1) - (i+1) <  1->j-i<3,当子串的长度是2和3的时候，不需要检查去掉头和尾的子串是否为回文,不需要状态转移
二维表格
dp[i][i] = true
 */
function longestPalindrome(s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }
    let maxLen = 1;
    let begin = 0;
    let dp = new Array();
    for (let a = 0; a < len; a++) {
        dp[a] = new Array();
        dp[a][a] = true;
    }
    // 先一列一列填写表格的值，先填写表格右上的值就可以了
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            // 头尾字符不相等 赋值false
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // 头尾字符相等 
                //1 长度必须大于3 
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    // 比较dp[i+1,j-1]是否为回文,状态转移到dp[i+1,j-1]，就是dp[i][j]的值由dp[i+1][j-1]决定
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] === true && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}

console.log(longestPalindrome('aaa'))
console.log(longestPalindrome('abbaa'))
console.log(longestPalindrome('abbaacc'))
console.log(longestPalindrome('abbaacccc'))
console.log(longestPalindrome('abbaaccdcc'))
