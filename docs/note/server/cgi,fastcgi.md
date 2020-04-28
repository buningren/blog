cgi 通用网关接口（common gateway interface）是一种协议，连接web服务器和其他应用程序
比如：
apache                          php
nginx           cgi             java
tomcat                          asp.net 
lightpd

每接收一个请求就需要fork一次，需要启动和退出，fork-and-exacute

cgi                         和             fastcgi
每次要启动进程                               常驻内存
只能依附于web服务器                          支持分布式，可以运行在其他服务器