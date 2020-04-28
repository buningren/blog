越权问题：
在操作数据时，没有联合多个条件，如果通过抓包修改其中的数据，就可能导致越权问题。
比如：
组别A下面有：a1,a2,a3,a4 四个人，现在要修改 a2 的手机号，id=2
如果通过抓包修改id=1,就 


DOS:拒绝服务
1、大批请求导致网络堵塞
2、插入比数据库自增id最大容量的id，导致后续无法继续插入数据

XSS:跨站脚本攻击
1、在页面注入脚本（a.打开页面马上执行 b.点击链接或触发事件执行）
```
// 页面上可以执行脚本的地方，下面三种

<script></script>

javascript:
<a href="javascript:alert(1);">
location.href = "javascript:alert(1)"

onclick="alert(1)"

```


CSRF:跨站请求伪造
