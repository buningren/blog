python是解释型高级编程语言，常用的解释器有CPython, IPython,

命令行模式输入输出：
print                print 'hello'
raw_input([提示语]?)  name = raw_input('please enter your name')

print 'hello','world'  # 输出 'hello world', 逗号会被空格代替

数据类型和变量
整数，0，1，-1
浮点数，1.2，0.123
字符串，'abc', "abc" 转义 \：'\n'  r不转义: r'\n'  '''多行'''
布尔值，True False
空值，None
List, Map， Set Dict

变量a=1

注释  #单行

字符编码
ascll 计算机只认识二进制，美国人发明的，大小写字母，数字，一些特殊字符
127个，1字节 可以表示，世界各国文字不同，有很多不同的字符
各国标准不同难免冲突，所以要统一，unicode，通常有2个字节表示
偏僻的字符可能用到4个字节，虽然unicode多个字节可以统一，
但是如果全部是英文，用多个字符又很浪费，所有就有了“可变长编码”
UTF-8（1-6个字节）
计算机内存中，统一使用unicode编码，读取出来或保存到硬盘就转换成utf-8编码

ord(str)  转换字符为ascll编码
chr(num)  把ascll编码转为字符

早期的python只支持ascll, 不支持unicode，因为python比unicode标准发布时间早
后来支持了 u'中国'

字符串前缀:
u  unicode
b  字节

encode('utf-8')
decode('utf-8')

如果py文件包含中文，需要在文件开头加上
# _*_ coding: utf-8 _*_

通常是这样
#!/usr/bin/env python
# _*_ coding: utf-8 _*_

格式化字符串:'你好xxx,你中奖了，请把你的姓名xxx告知我们'
'Hello, %s' %'tanyb'
'Hi, %s, you have $%d' %('tanyb', 10000)

占位符：%d-整数   %s-字符串   %f-浮点数    %x十六进制整数

list 列表 python内置的数据类型，可变的有序的集合
['a','b']
append(item) 添加至末尾
insert(position，item) 插入指定位置
pop()  删除末尾的item
pop(index) 删除指定的item


tuple 元组  不可变得有序的集合,（注意，只是指向不变）
 ('a', 'b', 'c')
 定义时要赋值
 
条件判断
if ... :
  do something

if ... :
  do something
else :
  do anther
  
if ... :
  do something
elif ... :
  do anther

条件循环
for ... in ...:
while ... :
range() 函数可以生成整数序列
如range(5)：[0,1,2,3,4]

dict 字典 （map）键值对, key必须是不可变对象
{key: value, key: value}
get()
pop()

set 无序集合 ，并且不能重复
s = set([1,2,3])
add(key)
remove()

函数  1.语句的重复调用 2.抽象，无需关注内部细节

参数类型检查 isinstance(x, (int))
raise TypeError('bad operand type')
可以返回多个值, 本质上是一个tuple

默认参数  def=0
关键字参数  **kw
可变参数   *args


