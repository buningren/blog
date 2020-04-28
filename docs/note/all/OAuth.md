OAuth 是什么？
解决了什么问题？
如何解决问题的？

互联网上有很多应用，每个应用有很多用户，很多应用的用户可能是交叉重合的，
比如，用户A有github的账号，现在想登录网站B,可不可以用github上的用户信息登录呢？

比较简单粗暴的方法是：网站B获取用户A在github的账号密码，但是有一些问题。

安全：
1.网站B需要保存用户A的账号明文，有泄露的风险
2.如果用户A的github账号修改，网站B也要跟着修改

权限:
1.网站B得到用户A的github账号就可以进行所有操作，不能限制权限的范围
2.如果用户A不想授权给网站B了，如何在不改账号的情况下撤销网站B的权限。

OAuth（开放认证协议）就是为了解决这两个问题的。

解决方案：
1.将角色和资源分离；
2.通过授权获取资源；

角色划分为4种：(以上面的例子说明)
1.资源服务器（github服务器）
2.授权服务器（github服务器）
3.资源所有者（用户A）
4.客户端（网站B）

授权模式分为四种：
1.授权码模式（Authorization Code）
2.简化模式（隐式模式）(Implicit)
3.密码模式（Resource Owner Password Credentials）
4.客户端模式（Client Credentials）

授权码模式：
拼接链接，获取`code`,通过`code`获取`access_token`(可能附带`refresh_token`)，用`access_token`去获取用户信息，
`access_token`一般有过期时间，可以通过`refresh_token`刷新`access_token`

简化模式：
拼接链接，直接获取`access_token`



