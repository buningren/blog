property（性质）和attribute（属性）都有属性的意思，两者很容易混淆。

对于js的对象来说，property是对象本身的属性，是对象先天就有的一部分，
读取：obj.property
赋值：obj.property = xxx
删除：delete obj.property


atttibute是对对象的描述说明，是后天添加的
赋值：setAttribute()

以DOM举例

<input type="radio" class="radio" checked>

dodument.querySelector('.radio')[0].checked = false; // 有效
dodument.querySelector('.radio')[0].setAttribute('checked', false) // 无效