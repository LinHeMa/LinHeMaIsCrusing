---
title: 在mongoDB中尋找並且刪除多個物件
description: 工作上的需求所以要一次處理多的物件

---

# DB瘦身
## command i use 

在資料庫中，因為錯誤導致了許多沒有資訊的config，此時如果要撈出特定的key不存在的資料，可以使用
```sql=
{name:{$exists:false}}
```
>## Using Variables in SQL

>Because the $ sign is the prefix used to identify variables in SQL statements, it is treated as a special character when used in identifiers. Identifiers (database names, table names, column names, etc.) cannot start with special characters unless the entire name is enclosed in double quotes.

## Aggregation
> aggregation 指的是對於單個或多個clooection(集合) 進行轉換(transform) 或分析(ex filter)的操作
> 常見的有： filter, group, sort, join, aggregate
> 透過一連串的操作，可以更加細緻畫的處理資料。 
### lookup
#### example:
```sql=
db.comments.aggregate([
  {
    $lookup: {
      from: "editingArea",
      localField: "configId",
      foreignField: "_id",
      as: "movie_details",
    },
  },
  {
    $limit: 1
  }
])
```
在上述的例子中，遇到因為_id 與 configId的格式不一樣。
需要轉化，因此aggregation就可以做到這樣複雜的操作：
```sql=
db.comments.aggregate([
    // 第一步驟：創造一個新的欄位，並且這個欄位的資料是
  {
    $addFields: {
      configIdString: { $toString: "$configId" }
    }
  }, 
  {
    $lookup: {
      from: "editingArea",
      localField: "configIdString",
      foreignField: "_id",
      as: "movie_details"
    }
  },
  {
    $limit: 1
  },
  {
    $project: {
      configIdString: 0
    }
  }
])
```

這次運用到兩個區域的操作，因此透過
```sql=
var deleteList = db.targetArea.find({name:{$exists:false}, ... cond},{_id:1}).toArray()
```
先把找到的資料，因為只要id（`{_id:1}`），取出成陣列。

```sql=
db.targetArea.deleteMany({name:{$exists:false}, ... cond})
```
可以先刪處指定區域的。

另外一個區域因為id是接受字串形式，因此我透過編輯器（neovim）：
```regex=
:%S / { _id: ObjectId(\("*.*"\)) }/ \1 / g
```

其他做法可以使用mongoDB內建的語法：
```javascript=
var deleteIdList = deleteList.map(item => item._id.toString());
```


把全部替換成字串陣列，隨後：
```sql=
db.anotherArea.deleteMany({id:{$in: deleteList}})
```
如此就可以把兩邊的區域都刪除。
