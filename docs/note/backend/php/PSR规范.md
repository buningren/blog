## 什么是PSR?

> 参考链接：[https://www.jianshu.com/p/b33155c15343](https://www.jianshu.com/p/b33155c15343)

PSR是PHP Standards Recommendation，规范制定组织php-fig，一共有5个规范：

- PSR-0：自动加载标准，2014-10-21该标准已被废弃，使用PSR-4替代。
- PSR-1：基本的编码风格
- PSR-2：严格的编码风格
- PSR-3：日志记录接口
- PSR-4：自动加载标准

### PSR-1

- PHP标签：PHP代码必须放在标签内
- 编码：PHP文件必须使用无BOM的UTF-8编码
- 副作用：功能要单一
- 命名空间：5.3前用伪命名空间（Verdor_Model）,每个类都有自己的命名空间，且都在顶级命名空间下
- 类名：大驼峰
- 常量：全部大写，用下划线分开
- 类方法名：小驼峰

### PSR-2
