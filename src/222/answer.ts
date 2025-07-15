/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
    // 辅助函数：计算树高
    function getHeight(node: TreeNode | null): number {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    }
    if (!root) {
        return 0;
    }
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    if (leftHeight === rightHeight) {
        // 左子树是满二叉树
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        // 右子树是满二叉树
        return (1 << rightHeight) + countNodes(root.left);
    }
};

/**
 * 解析：
 * getHeight(node)：计算从当前节点出发的左子树高度（即树的深度）。
 * 主逻辑：
 * - 如果树为空，返回0。
 * - 分别计算左子树和右子树的高度。
 * - 如果左、右高度相等，说明左子树是满二叉树，节点数可直接用公式 (1 << leftHeight) 计算（即2的leftHeight次方），再递归统计右子树节点数。
 * - 如果高度不等，说明右子树是满二叉树，节点数为 (1 << rightHeight)，再递归统计左子树节点数。
 * - 这样每次递归都能跳过一部分满二叉树，整体复杂度约为 O(log² n)。
 */


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null
    ) {
        this.val = (val ?? 0);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}


export { countNodes };