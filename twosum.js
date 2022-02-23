/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 *  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 使用hashmap
 * result = target - nums[i]，
 * result如果在hash表里不存在，就把{key:nums[i],value:i}存在hash表里
 * result如果在hash表里， 就返回当前的下标和hash表的下标
 */
function twosum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i)
        } else {
            return [map.get(target - nums[i]), i]
        }
    }
    return []
}
console.log(twosum([2, 7, 11, 15], 17))
console.log(twosum([2, 7, 11, 15], 13))
console.log(twosum([2, 7, 11, 15], 130))