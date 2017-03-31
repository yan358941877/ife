### 浮出层的中心默认在屏幕正中,屏幕滚动时浮出层始终保持位置固定在屏幕中

* 对浮出的box设置如下css属性

```CSS
	position: fixed;
	top: 50%;
	left: 50%;
	transform: tanslate(-50%, -50%);
```

### 点击浮出层以外的部分，默认为关闭浮出层

* 根据DOM事件流:在冒泡阶段,事件消息先到达浮出层,然后再到达其父容器
* 当点击浮出层时,在冒泡阶段执行event.stopPropagation()来阻止事件消息传递到父容器上
* 当点击父容器时,在冒泡阶段使父容器隐藏
* 使用event.stopPropagation()来阻止事件消息的继续传递
* addEventListener的第三个参数默认为false,即在冒泡阶段执行事件处理函数

### 浮出层的窗口大小

* 固定默认值
* 随内容自适应变化
	* 不设置width和height
	* 对于宽度和高度设置min-width和min-height,保证浮出组件的基本样式
	* 对于宽度设置max-width,保证浮出组件的基本样式(防止过宽)
	* 通过以上方法就可以组件随内容自适应变换
* 通过接口参数进行调整
	* 通过element.style.属性值对组件进行调整

