function firstMissingPositive(nums: number[]): number {
    const n = nums.length;
    // 第一步：将所有小于等于0或大于n的数替换为n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    // 第二步：利用下标标记出现过的数
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num >= 1 && num <= n) {
            // 将对应下标的数标记为负数
            nums[num - 1] = -1;
        }
    }
    // 第三步：找第一个正数的位置
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
}

export { firstMissingPositive };