php:// 访问各个输入/输出流（I/O Stream）

php://input 获取 php 输入只读流，不能获取 enctype=multipart/form-data 的数据，
和 HTTP_RAW_POST_DATA 的内容一样，但比后者好，读入的长度由 Content-Length 决定。

只有 Content-Type 为 multipart/form-data 和 multipart/x-www-data-urlencoded 时，
php 才会把 http entity body 的数据填入 $_POST，查询参数会填入 $_GET。



