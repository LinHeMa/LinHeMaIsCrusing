---
title: debounce 跟 throttle 那些前端可以優化的部分
description: debounce 跟 throttle 那些前端可以優化的部分
---

# debounce 跟 throttle 那些前端可以優化的部分

## 什麼是 debounce

在一定的時間內，如果重複觸發的話，則不會執行函式，反之，如果經過特定時間未觸發該函式，則函式可以被觸發。

```javascript
function debounce(fn, delayTime = 300) {
  let timer;
  // 利用closure的特性將timer宣告，如此才能夠保留id為了call clearTimeout
  return (...args) => {
    clearTimeout(timer);
    // 將上次的timer清除
    timer = setTimeout(() => {
      fn(...args);
      //   每一次都會重新計算delay時間
    }, delayTime);
  };
}
```

## 應用

如果放在表單、登入 button，可以避免多次提交。

## 想像

- 從上述的程式可以看出 debounce 重點在於`clearTimeout(timer)`這個函式
- 想像就像是便利商店的自動門，每次有人經過就會打開，如過人潮連續的進入，那麼就不會關起來。

## 什麼是 throttle

```javascript
function throttle(fn, time) {
  let timer = null;
  if (!timer)
    return (...args) => {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, time);
    };
}
```

## 應用

1. 監聽scroll事件的時候，如果使用debounce的話會造成不斷觸發函式，那麼就可能完全不會執行到。如果使用throttle就可以穩定的在相同時間間隔觸發事件。
2. 像是Google的搜尋input，如果每一次onChange的事件都會觸發搜索的話，可能造成效能的浪費。
3. 兩者最大的差別就在於*debounce不想要一直觸發事件；而throttle希望持續觸發事件。*

