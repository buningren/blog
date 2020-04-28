# 浅析map方法

> map方法是数组的实例方法，即 `Array.prototype` 的方法，
> 目标是把数组的全部元素依次传给一个函数处理，最终返回一个新函数。
> 接收一个函数作为参数，并且传递三个参数给这个函数,`arr.map(fn(value, index, arr))`
> 分别是：元素值，元素的索引，整个数组。

举个例子：

```js
var factorial = function(x) { 
  return x*x;
};
var b = [1, 2, 3].map(factorial);
console.log(b); // [1, 4, 9]
```

另一个例子：猜一下结果是什么？

```js
console.log(['1', '7', '11'].map(parseInt));
```

可能很多人的第一感觉得出的结果是：

```js
[1, 7, 11]
```

实际上结果却是：

```js
[1, NaN, 3]
```

为什么？
--------------------------------------------------

首先回顾一下，parseInt函数的语法：

```js
/* string 表示待转换为整数的字符串，如果传入不是string，则用toString转换，
 * radix，表示转换的基数，取值范围是2-36之间的整数，默认为10，
 * 如果radix等于0或可转换为0的其他值，则最终以10为基数，
 * radix在其他情况下，parseInt最终返回NaN，如果参数多于两个，第三个开始将为忽略
 */
// parseInt(string, radix)
parseInt('10'); // 10
parseInt('10', 2); // 2
parseInt('10', 8); // 8
parseInt('10', 16); // 16
parseInt('10', 0); // 10
parseInt('10', 1); // NaN
```

答案已经显而易见了

```js
['1', '7', '11'].map(parseInt)

// 分解一下就是
return [
  parseInt('1', 0, ['1', '7', '11']),
  parseInt('7', 1, ['1', '7', '11']),
  parseInt('11', 2, ['1', '7', '11'])
]

// 所以最终答案是
[1, NaN, 3]
```