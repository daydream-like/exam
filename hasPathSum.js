/**
 * 路径总和
 * 递归左右子树，不断让sum减去当前节点的值。
 * 左右子树有一个返回true就找到了一条这样的路径
 */
function hasPathSum(root, target) {
    if (!root) { //递归终止条件
        return false;
    }
    if (root.left === null && root.right === null) { // //遍历到叶子节点
        return target - root.value === 0  //sum正好减少到了0 返回true 否则返回false
    }
    // 递归左右子树，有一个返回true就找到了一条这样的路径
    return hasPathSum(root.left, target - root.value) || hasPathSum(root.right, target - root.value);
}