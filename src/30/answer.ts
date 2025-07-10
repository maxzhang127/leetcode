function findSubstring(s: string, words: string[]): number[] {
    if (s.length === 0 || words.length === 0 || words[0].length === 0) {
        return [];
    }
    const result: number[] = [];
    const wordSize = words[0].length;

    const windowSize = words.length * wordSize;

    const wordsCount = new Map<string, number>();
    words.forEach((word) => {
        let num = wordsCount.get(word);
        if (!num) {
            num = 0;
        }
        wordsCount.set(word, num + 1);
    });

    const length = s.length;
    for (let i = 0; i < length - windowSize + 1; i++) {
        const resMap = new Map<string, number>();
        for (let j = 0; j < words.length; j++) {
            const word = s.substring(i + j * wordSize, i + (j + 1) * wordSize);
            if (!wordsCount.has(word)) {
                break;
            }
            let num = resMap.get(word);
            if (!num) {
                num = 0;
            }
            resMap.set(word, num + 1);
        }
        let isValid = true;
        for (const [key, value] of wordsCount) {
            if (resMap.get(key) !== value) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            result.push(i);
        }
    }
    return result;
}

export { findSubstring };

/**
 * 解题思路如下：
 * 统计 words 中每个单词出现的次数（用哈希表记录）。
 * 计算每个单词的长度 wordLen，以及所有单词拼接后的总长度 totalLen = wordLen * words.length。
 * 在字符串 s 上用滑动窗口，窗口长度为 totalLen，依次检查每个窗口内的子串。
 * 对于每个窗口，将其分割成若干个 wordLen 长度的单词，统计这些单词出现的次数（用另一个哈希表）。
 * 判断窗口内的单词计数和 words 的计数是否完全一致，如果一致则记录窗口起始索引。
 * 遍历结束后，返回所有满足条件的起始索引。
 * 
 * 注意有可能有重复的单词，所以需要确保每个单词的计数都匹配。
 */