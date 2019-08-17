# Book_api
promise, request, cheerio, babel

https://itbilu.com/javascript/js/41KMSZ9a.html
### Promise.all()

    var p1 = Promise.resolve(1),
        p2 = Promise.resolve(2),
        p3 = Promise.resolve(3);
    Promise.all([p1, p2, p3]).then(function (results) {
        console.log(results);  // [1, 2, 3]
    });

### Bable
安裝

    $ npm install babel-cli babel-preset-env --save-dev

建立 .babelrc

    {
      "presets": [
        "env"
      ]
    }
    
### astnc/await
[node异步编程async/await/promise](https://www.jianshu.com/p/2132904b9768)
[從Promise 昇華到 async/await](https://ithelp.ithome.com.tw/articles/10201420?sc=iThelpR)

### Android 連接問題
[URLConnection.setDoOutput(true)导致Get请求变Post请求？](http://picksomething.cn/2016/02/18/URLConnection.setDoOutput(true)%E5%AF%BC%E8%87%B4Get%E8%AF%B7%E6%B1%82%E5%8F%98Post%E8%AF%B7%E6%B1%82%EF%BC%9F/)

### Get json
[android 解析JSON用法](http://jc7003.pixnet.net/blog/post/293480218-android-%E8%A7%A3%E6%9E%90json%E7%94%A8%E6%B3%95)
