# mobx-state-tree-study

### `json-server`

使用 `json-server` 来开启一个服务器, 数据存储在项目根目录下的 `db.json` 文件。

```json
{
  "suggestions_f": [{
      "name": "yangq",
      "price": 100
  }],
  "suggestions_m": [{
      "name": "男1",
      "price": 10
   }]
}
```

因为用 `create-react-app`脚手架创建的项目在 `start` 时会占用 `3000` 端口, 使用 `yarn run json-server --port 3001 --watch db.json` 可以开启一个服务器。

启动成功后，访问 `http://localhost:3001/suggestions_f` 得到数据

```
[{
    "name": "yangq",
    "price": 100
}]
```

访问 `http://localhost:3001/suggestions_m` 得到数据

```javascript
[{
    "name": "男1",
    "price": 10
}]
```

