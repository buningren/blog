# 对JavaScript中apply、call、和bind方法的理解

### 一、三者的异同

- apply、call、bind都是函数对象的实例方法
- 都可以改变this的指向
- 表现形式
  - fn.apply(thisArg[, arg1[, arg2[, ...]]])， 第一参数thisArg表示this对象，第二及之后的参数表示传参给fn的参数序列
  - fn.call(thisArg[, args*[]])
  - fn.bind(thisArg[, arg1[, arg2[, ...]]])
- 语法
  - 参数thisArg表示，当绑定函数被调用是，该参数会作为this的指向。
  - 后面的参数序列表示，当绑定被调用时，这些参数将置于参数之前传递给被绑定的方法fn。
- 执行结果
  - apply、call立即调用fn
  - bind创建一个新函数（绑定函数）返回
- 其他
  - bind是es5的方法

![alt](https://octodex.github.com/images/dojocat.jpg "title")

### 二、应用
__bind 的应用__
- 可以对一个函数预设初始参数
```
  function a() {
    return Array.prototype.slice.call(arguments);
  }
  
  var b = a.bind(this, 1, 2);
  alert(b()); // 弹出 1, 2
  
  var s = b(10, 10);
  alert(s); // 弹出 1, 2, 10, 10
```

---