/* eslint-disable @typescript-eslint/no-magic-numbers */
import { firstMissingPositive } from '../../src/41/answer';

describe('41. 缺失的第一个正数', () => {
    it('示例1', () => {
        const nums = [1, 2, 0];
        const result = firstMissingPositive(nums);
        expect(result).toBe(3);
    });

    it('示例2', () => {
        const nums = [3, 4, -1, 1];
        const result = firstMissingPositive(nums);
        expect(result).toBe(2);
    });

    it('示例3', () => {
        const nums = [7, 8, 9, 11, 12];
        const result = firstMissingPositive(nums);
        expect(result).toBe(1);
    });

    it('边界情况 - 单个元素1', () => {
        const nums = [1];
        const result = firstMissingPositive(nums);
        expect(result).toBe(2);
    });

    it('边界情况 - 单个元素非1', () => {
        const nums = [2];
        const result = firstMissingPositive(nums);
        expect(result).toBe(1);
    });

    it('边界情况 - 负数和零', () => {
        const nums = [-1, -2, 0];
        const result = firstMissingPositive(nums);
        expect(result).toBe(1);
    });

    it('边界情况 - 连续正数', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = firstMissingPositive(nums);
        expect(result).toBe(6);
    });
});