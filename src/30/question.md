# 30. 串联所有单词的子串

给定一个字符串 s 和一个字符串数组 words。words 中所有字符串 长度相同。

s 中的 串联子串 是一个包含 words 中所有字符串以任意顺序排列连接起来的子串。

例如，如果 words = ["ab","cd","ef"]，那么 "abcdef"、"abefcd"、"cdabef"、"cdefab"、"efabcd" 和 "efcdab" 都是串联子串。"acd bef" 不是串联子串，因为他不是在 words 排列的连接。

返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

## 示例 1：
输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
子串 "barfoo" 从位置 0 开始。它是 words 中以 ["bar","foo"] 顺序排列的连接。
子串 "foobar" 从位置 9 开始。它是 words 中以 ["foo","bar"] 顺序排列的连接。
输出顺序无关紧要。返回 [9,0] 也是可以的。

## 示例 2：
输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]
解释：
因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
s 中没有子串长度为 16 且等于 words 的任何顺序排列的连接。
所以我们返回一个空数组。

## 示例 3：
输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]
解释：
因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
子串 "barfoothe" 从位置 6 开始。它是 words 中以 ["bar","foo","the"] 顺序排列的连接。
子串 "foothefoo" 从位置 9 开始。它是 words 中以 ["foo","the","foo"] 顺序排列的连接。
子串 "thefoobar" 从位置 12 开始。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。