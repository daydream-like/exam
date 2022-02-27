/**
 *  
 * 一起递归三部曲：
   1.确定递归函数的参数和返回值
   2.确定终止条件
   3.确定单层递归的逻辑
 */

/**
 * 二叉树的最大深度
 */

let max = 0;
function dfs(node, depth) {
    if (!node) {
        return;
    }
    max = Math.max(depth, max) // 更新最大深度
    dfs(node.left, depth + 1) // 深搜左子树，深度+1
    dfs(node.right, depth + 1) // 深搜右子树，深度+1
}
function maxDepth(root) {
    if (root) { // 树为空，最大深度为0
        return 0
    }
    dfs(root, 1)  // 从根节点深搜，初始深度为1
    return max;
}

/**
 * 最小深度
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
 * 什么是叶子节点，左右孩子都为空的节点才是叶子节点！
 * 只有当左右孩子都为空的时候，才说明遍历的最低点了。如果其中一个孩子为空则不是最低点
 */

function minDepth(root) {
    if (root == null) return 0;
    if (root.left == null && root.right != null) {
        return 1 + minDepth(root.right);
    }
    if (root.left != null && root.right == null) {
        return 1 + minDepth(root.left);
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

