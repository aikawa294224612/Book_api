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
