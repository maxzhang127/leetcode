// eslint-disable @typescript-eslint/no-unused-vars
function minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";
    const need: Record<string, number> = {};
    for (const c of t) {
        need[c] = (need[c] || 0) + 1;
    }
    let left = 0, right = 0, count = 0;
    let minLen = Infinity, start = 0;
    const window: Record<string, number> = {};
    while (right < s.length) {
        const c = s[right];
        window[c] = (window[c] || 0) + 1;
        if (need[c] && window[c] === need[c]) {
            count++;
        }
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