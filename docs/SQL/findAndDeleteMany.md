---
title: 在mongoDB中尋找並且刪除多個物件
description: 工作上的需求所以要一次處理多的物件
---

加設今天假設在資料庫中有需多資料，我們想要找出某個欄位不存在的資料

```sql=
db.targetArea.find({name:{$exists:false}})
```

`$`在SQL語法中代表著準備使用變數。
