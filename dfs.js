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