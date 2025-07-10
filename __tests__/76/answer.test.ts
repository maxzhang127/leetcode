import { minWindow } from "../../src/76/answer";

describe('76. 最小覆盖子串', () => {
    it('示例1', () => {
        const s = "ADOBECODEBANC";
        const t = "ABC";
        const result = minWindow(s, t);
        expect(result).toBe("BANC");
    });

    it('示例2', () => {
        const s = "a";
        const t = "a";
        const result = minWindow(s, t);
        expect(result).toBe("a");
    });

    it('示例3', () => {
        const s = "a";
        const t = "aa";
        const result = minWindow(s, t);
        expect(result).toBe("");
    });
});
