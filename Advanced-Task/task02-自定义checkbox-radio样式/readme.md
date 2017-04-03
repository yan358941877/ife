### 雪碧图如何使用

* 使用background-image属性,将图片设置为背景图片
* 使用background-position操作图片的位置,将图片中所需部分的内容呈现出来

### 如何使用label和伪元素(xxxxx label:after)来实现自定义样式

* label负责radio和check-box的边框(圆圈和方框)
* 伪元素负责radio中的圆圈和check-box中的对勾
* 再结合伪类实现样式切换

### 伪类的使用:

* :checked
* 常用的伪类:

```
:active    向被激活的元素添加样式。    
:focus    向拥有键盘输入焦点的元素添加样式。    
:hover    当鼠标悬浮在元素上方时，向元素添加样式。    
:link    向未被访问的链接添加样式。    
:visited    向已被访问的链接添加样式。    
:first-child    向元素的第一个子元素添加样式。    
:checked 向选中的控件元素添加样式
```

### 伪类 伪元素 css选择器结合使用

* `input:checked ~label {}`:当input被选中时,对该input同级的label元素进行样式操作
* `input:checked +label {}`:当input被选中时,对该input后面相邻的label元素进行样式操作
* `input:checked +label:after {}`: 当input被选中时,对该input后面紧邻的laber元素添加伪元素
* ...
