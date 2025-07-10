import { findSubstring } from '../../src/30/answer';

describe('30. 串联所有单词的子串', () => {
    it('示例1', () => {
        const s = 'barfoothefoobarman';
        const words = ['foo', 'bar'];
        const output = [0, 9];
        const result = findSubstring(s, words);
        expect(result.sort()).toEqual(output.sort());
    });

    it('示例2', () => {
        const s = 'wordgoodgoodgoodbestword';
        const words = ['word', 'good', 'best', 'word'];
        const output: number[] = [];
        const result = findSubstring(s, words);
        expect(result.sort()).toEqual(output.sort());
    });

    it('示例3', () => {
        const s = 'barfoofoobarthefoobarman';
        const words = ['bar', 'foo', 'the'];
        const output = [6, 9, 12];
        const result = findSubstring(s, words);
        expect(result.sort()).toEqual(output.sort());
    });

    it('空字符串和空单词数组', () => {
        const s = 'wordgoodgoodgoodbestword';
        const words: string[] = ["word","good","best","good"];
        const output: number[] = [8];
        const result = findSubstring(s, words);
        expect(result.sort()).toEqual(output.sort());
    });
}); 