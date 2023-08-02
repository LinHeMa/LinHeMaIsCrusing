---
title: This 在JavaScript的故事
description: my hello page description
---

# This 在JavaScript的故事

## 重點整理
> 引用自Huli[淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://github.com/aszx87410/blog/issues/39#top)
> 1. 脫離物件的 this 基本上沒有任何意義
> 2. 沒有意義的 this 會根據嚴格模式以及環境給一個預設值
> 3. 嚴格模式底下預設就是 undefined，非嚴格模式在瀏覽器底下預設值是 window
> 4. 可以用 call、apply 與 bind 改變 this 的值
> 5. 要看 this，就看這個函式「怎麽」被呼叫
> 6. 可以把 a.b.c.hello() 看成 a.b.c.hello.call(a.b.c)，以此類推，就能輕鬆找出 this 的值

## 箭頭函式的範例以及我自己的思考

```javascript
const obj = {
  x: 1,
  hello: function(){
    const test = () => {
      console.log(this.x)
    }
    test()
  }
}
  
obj.hello() // 1
const hello = obj.hello
hello() // undefined
```
首先，「**在宣告它的地方的 this 是什麼，它的 this 就是什麼**」，因此我們在 obj物件裡面宣告了test function，並且因為他是arrow function，因此他的this會指向obj，` this.x === obj.x`。
按照這個邏輯，因為hello是在全域做宣告，因此裡面arrow function指向的在嚴格模式下是undefined，在非嚴格模式下就會是window，而無論是何者都沒有x這個key跟value，因此回傳undefined。

## 與this難分難捨的React Class Component
```javascript
class App extends React.Component {
  onClick() {
    console.log(this, 'click')
  }
  render() {
    return <button onClick={this.onClick}>click</button>
  }
}
```

在 onClick中的this.onClick並沒有被放在物件中，也就是這個this指向的並不會是APP也不會是button，要解決這樣的問題，可以透過bind或是箭頭函式：
### bind
```javascript
class App extends React.Component {
  constructor(){
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    console.log(this, 'click')
  }
  render() {
    return <button onClick={this.onClick}>click</button>
  }
}
```
- 透過constructor的綁定可以將this指向這個component，因此底下在呼叫的時後就可以順利呼叫component 中的 onClick function。
### Arrow Function
```javascript
class App extends React.Component {
  onClick () {
    console.log(this, 'click')
  }
  render () {
    return <button onClick={() => this.onClick()}>click</button>
  }
}
```
<img width="432" alt="class component" src="https://github.com/LinHeMa/blog/assets/109965534/377c166b-cf96-4907-b496-86d57561b564"></img>

- 複習箭頭函式的結論「**在宣告它的地方的 this 是什麼，它的 this 就是什麼**」，因為將這個箭頭函式render出來的是這個component，因此這個this會指向App

可以透過這個[編輯器](https://stackblitz.com/edit/create-react-class-eaftgx?file=index.js)

感謝 @aszx87410 的文章，舉的例子幫助我可以一以貫之，雖然知道要搞懂這個概念需要非常多的背景知識，但是call()的方法這的讓我判斷率提高了8成吧ＸＤ

## 後續補充（一）
上次跟同事討論以下情況：
```javascript
const obj = {
  name: "obj",
  sayInArrowFn: () => {
    console.log("sayInArrowFn = ", this);
  },
  sayInFn: function () {
    console.log("sayInFn = ", this);
  },
};

obj.sayInArrowFn()
obj.sayInFn()
```
可以得到result:
<img width="468" alt="console" src="https://github.com/LinHeMa/blog/assets/109965534/b8cb47c7-5a44-4ae6-abc8-ba1fcdf8d950"></img>

## 觀察
1. 在物件中，如果直接把arrow function放在value，他的`this`會是window 物件
2. 如果是用function宣告，會指向obj物件（比較符合我的預期）

## 結論
首先要先討論到scope的建立，在js中，我們最常使用建立scope的為`function`跟`{}`，所以在`sayInFn`中，function建立了自己的scope，而且因為是被`obj`所invoke，所以會繼承`obj`的`this`
但是在箭頭函式的並沒有自己的`this`，箭頭函式會去找最近的父層scope，所以最終找到了window物件。