# Canvas

canvas元素用于生成图像，它本身像一个画布，JavaScript通过操作它的API，
在上面生成图像。他的底层是一个个像素，相当于一个可以用JavaScript操作的位图（bitmap）。

它和svg就是好像位图和矢量图。

**如何使用？**

首先要创建一个`<canvas>`元素，每个canvas都对应有一个CanvasRenderingContext2D对象。

```
// html
<canvas id="canvas" height="500px" width="400px"></canvas>

// js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx instanceof CanvasRenderingContext2D  // true
```

**按照用途：Canvas API可以用于：绘制图形和图像处理**

## Canvas API 绘制图形

- 线段
- 矩形
- 弧线
- 文本
- 渐变色和图像填充


Canvas画布提供了一个作图的平面空间，该空间的每一个点都有自己的坐标。
原点(0，0)位于画布左上角，x轴的正向是原点向右，y轴的正向是原点向下。

### 路径

- ctx.beginPath()      开始绘制路径
- ctx.closePath()      结束路径，返回起始坐标并绘制一条直线
- ctx.moveTo()         设置路径的起点
- ctx.lineTo()         路径从当前坐标连接到指定的坐标
- ctx.fill()           路径内部填充
- ctx.fillStyle()      路径填充的颜色和样式，默认黑色
- ctx.stroke()         路径线条着色
- ctx.strokeStyle()    路径线条的颜色和样式，默认黑色

### 线型

- ctx.lineWidth        线条宽度，默认1.0
- ctx.lineCap          线条末端的样式，可能的值（butt 矩形、round 圆型、square 矩形）
- ctx.lineJoin         线段交点的样式，可能的值（round 扇形、bevel 三角形、miter 菱形）
- ctx.miterLimit       指定菱形交点的长度，默认10
- ctx.getLineDash()    数组，返回虚线的线段和间距的长度
- ctx.setLineDash()    数组，指定虚线的线段和间距的长度

### 矩形

- ctx.rect()           绘制矩形，x1，y1，x2，y2
- ctx.fillRect()       填充一个矩形，x1，y1，x2，y2
- ctx.strokeRect()     绘制一个矩形边框，x1，y1，x2，y2
- ctx.clearRect()      擦除一个矩形区域，x1，y1，x2，y2

### 弧线

- ctx.arc()            x， y， radius， startAngle， endAngle， anticlockwise: boolean [ true逆时针 | false顺时针 ]
- ctx.arcTo()          x1， y1， x2， y2， radius

## 文本

- ctx.fillText()          实心文本，string， x1， y1， width
- ctx.strokeText()        空心文本，string， x1， y1， width
- ctx.measureText()       string， 返回一个TextMetrics对象， 可以从该对象获取参数字符串的信息， 目前主要是文本渲染后的宽度`width`
- ctx.font                同CSS的font属性
- ctx.textAlign           文本对齐， left， right， center， start， end
- ctx.direction           文本方向， 默认inheried， ltr， rtl
- ctx.textBaseline        文本垂直对齐，top， hanging， middle， alphabetic， ideographic， bottom

### 渐变色和图像填充

- ctx.createLinearGradient()       x1， y1， x2， y2
- ctx.createRadialGradient()       x1， y1， r1， x2， y2， r2
- ctx.createPattern()              img， [ repeat | repeat-x | repeat-y | no-repeat ]
- gradient.addColorStop()          index， color

### 阴影

- ctx.shadowBlur             模糊程度，默认0
- ctx.shadowColor            颜色， 默认black
- ctx.shadowOffsetX          水平位移，0
- ctx.shadowOffsetY          垂直尾翼，0

## Canvas API 图像处理

### 绘制图像

- ctx.drawImage(image, dx, dy)
- ctx.drawImage(image, dx, dy, dwidth, dheight)
- ctx.drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)

### 像素读写

- ctx.getImageData()          返回ImageData 对象：{data, width, height}
- ctx.putImageData()
- ctx.createImageData()

### 图像变换

- ctx.rotate()            旋转
- ctx.scale()             缩放
- ctx.translate()         平移
- ctx.transform()         变换
- ctx.setTransform()      取消变换

### 其他

- ctx.save()           保存当前上下文
- ctx.restore()        返回上一次上下文
- ctx.canvas           只读属性，指向canvas元素

## canvas元素的方法

- canvas.toDataURL()   type, quality
- canvas.toBlob()      