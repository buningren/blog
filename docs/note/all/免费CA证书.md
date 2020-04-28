[FreeSSL](https://freessl.org)是一个提供免费HTTPS证书申请、HTTPS证书管理和HTTPS证书到期提醒的网站。

目前（2019-07-17）可选择的品牌有：TrustAsia、 Let's Encrypt、Let's Encrypt V2

* TrustAsia支持双域名，有效期1年
* Let's Encrypt支持多域名，有效期3个月
* Let's Encrypt V2支持多域名通配符，有效期3个月

另外，还提供收费证书，价格优惠，数量有限。

2018年11月FreeSSl推出ACME管理功能，该功能能够使你通过一个shell脚本进行证书的全自动签发、部署、更新
（该脚本需要安装到你的服务器上，而不是个人PC），脚本基于 [acme.sh](https://github.com/Neilpang/acme.sh) 进行改造。

freessl.cn的ACME服务器地址：https://acme.freessl.cn/directory

# 使用须知：

FreeSSL服务器目前支持：

* TrustAsia单域名证书
  + DNS 前缀：_dnsauth
  + 文件路径：/.well-known/pki-validation/fileauth.txt
* Let's Encrypt 多域名证书
* Let's Encrypt 通配符证书
  + DNS 前缀：_acme-challenge
  + 文件路径：/.well-known/acme-challenge/$token

由于 TrustAsia DNS 验证前缀、文件验证路径等原因，
我们已将脚本内容适配到 freessl.cn 定制的 ACME 服务器，请悉知。所以该脚本不通用。

注意事项：

1.执行脚本时需指定服务器地址：`--server https://acme.freessl.cn/directory`
2.FreeSSL.cn后台可以配置申请域名的策略用于指定某个域名申请哪个品牌的证书，默认TrustAsia。
3.由于关联着FreeSSL.cn：
* 在使用脚本注册acme客户端的时候，需要指定`--accountemail`为你在FreeSSL.cn账号的邮箱
* 如果你的脚本是从FreeSSL后台获取的命令进行安装，那么你的acme客户端将会自动激活，如果不是，需要到后台手动激活。

# 如何使用

## 1、安装脚本

从FreeSSL -> ACME管理后台获取安装命令：

```
curl https://freessl.cn/api/get.acme.sh?token=$youtoken | sh
或
wget -O - https://freessl.cn/api/get.acme.sh?token=$youtoken | sh
```

看到`Install success`提示即说明安装成功。

当然你也可通过`curl https://freessl.cn/api/get.acme.sh | sh`进行安装，
不过注册acme客户端的时候需要到FreeSSL后台手动激动。

安装成功后，需要退出终端再重新打开，就可以使用acme.sh。

## 2、注册客户端

```shell
acme.sh --register-account --accountemail youemail@domain.com \
--server https://acme.freessl.cn/directory
```

## 3、申请证书

如果注册客户端的时候不是从FreeSSL获取的命令安装，可能需要到FreeSSL后台激活刚刚注册的客户端。

申请证书的方式基本与原脚本一样[acme.sh wiki](https://github.com/Neilpang/acme.sh/wiki/%E8%AF%B4%E6%98%8E)

### 例1：普通模式

为`domain.com`申请证书，验证文件将会写入`-w`所指定的位置。请确保该目录能够从外网访问到
（如该域名指向的网址的根目录或根目录下其他可访问的子目录），便于CA进行验证。

```
acme.sh --issue -d domain.com -w /usr/www/website/public \
--server https://acme.freessl.cn/directory
```

```
acme.sh --issue -d domain.com -d domain2.com -w /usr/www/website/public \
--server https://acme.freessl.cn/directory
```

### 例2：Nginx模式

如果你当前的服务器已经存在服务并有nginx进行代理。
需要你是root或sudoer，因为脚本需要与nginx服务进行交互。

```shell
acme.sh --issue --nginx -d domain.com \
--server https://acme.freessl.cn/directory
```

### 例3：自动 DNS API 集成

该模式通过集成DNS API，实现DNS验证记录的自动添加删除。了解详情：[https://github.com/Neilpang/acme.sh#7-automatic-dns-api-integration](https://github.com/Neilpang/acme.sh#7-automatic-dns-api-integration)

### 例4：DNS手动模式

该模式是要进行DNS验证，但又没有DNS服务商相关`key`的情况下使用。

1.第一步

```shell
acme.sh --issue --d domain.com -dns \
--server https://acme.freessl.cn/directory
--yse-I-know-dns-manual-mode-enough-go-ahead-please
```

2.将TXT记录添加到你的域名解析中。

3.使用`--renew`命令。

```shell
acme.sh --renew -d domain.com \
--server https://acme.freessl.cn/directory
--yes-I-know-dns-manual-mode-enough-go-ahead-please
```

## 4、安装证书

证书颁发下来之后，因为只是保存在`~/.acme.sh/$domain`下面，我们还需要进行证书的安装：

**Apache**例子：

```shell
acme.sh --install-cert -d domain.com \
--cert-file       /path/to/cert.pem \
--key-file        /path/to/cert.key \
--fullchain-file  /path/to/cert.pem \
--reloadcmd       "service apache2 force-reload"
```

**Nginx**例子：

```shell
acme.sh --install-cert -d domain.com \
--keyfile          /path/to/cert.key \  # 指定证书私钥key文件的位置
--fullchain-file   /path/to/cert.pem \  # 指定证书内容文件（包括了所有的根证书和中间证书内容）的位置
--reloadcmd        "service nginx force-reload"
```

**如何实现全自动**

当我们的证书颁发完成之后，`acme.sh`脚本会每天去检查它所管理的证书是否即将到期（过期前30天），
此时，它将通过你上次申请该证书的方式重新申请证书。如果你也添加了`--renew-hook`，从此就不用管证书是否到期了。

```shell
acme.sh --force --issie --dns dns_ali \
-d domain.com \
--renew-hook "acme.sh \
--install-cert -d domain.com \
--key-file        /path/to/domain.key \
--fullchain-file  /path/to/domain.pem \
--reloadcmd       \"service nginx force-reload\""
```

**可能遇到的问题**

1.申请通配符域名时，提示出问题，暂时没搞清楚是不支持通配符还是脚本写错？

2.提示500错误，未返回200之类的，可能是服务器代理把http请求重定向到https，可以先把重定向关掉，申请证书成功后再开启重定向。