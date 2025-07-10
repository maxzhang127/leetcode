// eslint-disable @typescript-eslint/no-unused-vars
function minWindow(s: string, t: string): string {
    if (t.length > s.length) {
        return "";
    }
    // 收集 t 中每个字符的需求数量
    const need: Record<string, number> = {};
    for (const c of t) {
        need[c] = (need[c] || 0) + 1;
    }
    // 使用滑动窗口来找到最小覆盖子串
    // left 和 right 分别表示窗口的左右边界
    let left = 0, right = 0, count = 0;
    let minLen = Infinity, start = 0;

    // 窗口内字符的计数
    // window[c] 表示字符 c 在当前窗口中的出现次数
    const window: Record<string, number> = {};
    while (right < s.length) {
        const c = s[right];
        window[c] = (window[c] ?? 0) + 1;
        if (need[c] && window[c] === need[c]) {
            count++;
        }

        // 当窗口内的字符满足 t 中所有字符的需求时，尝试缩小窗口
        while (count === Object.keys(need).length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            const d = s[left];
            if (need[d] && window[d] === need[d]) {
                count--;
            }
            window[d]--;
            left++;
        }
        right++;
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

export { minWindow };