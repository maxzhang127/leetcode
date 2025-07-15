import { countNodes } from '../../src/222/answer';

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val ?? 0);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

describe('222. 完全二叉树的节点个数', () => {
    it('示例1', () => {
        // root = [1,2,3,4,5,6]
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)
            ),
            new TreeNode(3,
                new TreeNode(6),
                null
            )
        );
        expect(countNodes(root)).toBe(6);
    });

    it('示例2', () => {
        // root = []
        expect(countNodes(null)).toBe(0);
    });

    it('示例3', () => {
        // root = [1]
        const root = new TreeNode(1);
        expect(countNodes(root)).toBe(1);
    });
});
