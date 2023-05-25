---
title: 動手做Javascript promise元件
description: 動手了解系列
---
# 動手做Javascript promise元件
## 什麼是promise物件
![promise flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

>A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

透過上述MDN的解釋，我們可以了解到以下幾點：
- 透過promise物件，我們可以用類似於**同步行為**處理非同步行為
- 可以想像是 value的proxy
- 非同步行為不像同步行為直接回傳一個value，相反的，他回傳一個物件（promise）

## promise的狀態
1. pending
   - 初始狀態
2. fulfilled
   - 成功，可以取出其值
3. rejected
   - 失敗，會回傳一個error，可用於error handling

# 實作環節
## 從class出發
```javascript
class PromiseSimplified {
  constructor(targetFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }
```
### promiseChain
`this.promiseChain = []`
當運用到`.then( 成功後要執行的function )`，不一定是一個function就會結束，因此先簡單用一個陣列。

#### 實作`.then()`方法
```javascript
  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }
```
### handleError
`this.handleError = () => {}`
處理到error的時候就比較單純，因為fulfilled可以繼續執行下去，但是rejected就會直接進入error handling環節，因此不需使用陣列。
#### 實作`.catch()`方法
```javascript
  catch(handleError) {
    this.handleError = handleError;

    return this;
  }
```

### onResolve, onReject方法
這邊僅是將方法傳遞下去
#### bind
```javascript
const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```
建立了簡單的`person`class後，
```javascript
const button = document.querySelector("button");

button.addEventListener("click", person.greet);
```
如果這樣去call，這裡的`this`會指向觸發事件的元素`button`，而不是`person`
正確的：
```javascript
const button = document.querySelector("button");

button.addEventListener("click", person.greet.bind(person));
```
### 實作onResolve方法
```javascript
onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
         storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }
```
- 這裡使用了`try...catch...`的方法，目的是為了handle error，畢竟promise chain的方法中也可能導致異常的錯誤，如果發生錯誤，期望把error透過`onReject`處理。
- 假設`promiseChain`陣列中有三個function `[FnA, FnB, FnC ]`
  - 在`FnA`時，會把`FnA(value)`儲存進`storedValue`
  - 在`FnB`時，會把`FnB(FnA(value))`儲存進`storedValue`
  - 在`FnC`時，會把`FnC(FnB(FnA(value)))`儲存進`storedValue`
  - 也就是說，會依序執行`.then()`

### 實作onReject方法
```javascript
  onReject(error) {
    this.handleError(error);
  }
```
如果進入到rejected的環節，會找到使用者在`.catch()`的function，並且執行。(_如果沒有使用的話就沒辦法error handle囉！_)

## 如果想看看我的codepen可以點以下連結：
[promise code pen連結](https://codepen.io/linhema/pen/abRMLON)
