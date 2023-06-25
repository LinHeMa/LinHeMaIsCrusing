---
title: Kids With the Greatest Number of Candies
description: leet code 解題的心得！
---
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.


```js
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((candy) => {
    if (candy + extraCandies >= max) return true;
    return false;
  });
};
```
## 解題
### 步驟一
先找到array中最大的元素
### 步驟二
如果糖果加上 `extraCandie` 可以大於最大元素，那麼就return `true` 否則 return `false`
