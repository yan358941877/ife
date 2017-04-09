### 背景图的模糊处理

* 使用filter属性:`filter:blur(3px)`
* 注意:为当前元素添加模糊效果时,必须为当前元素添加background-image,且该background-image必须是图片,如果是背景色,则呈现不出模糊效果

```
filter: blur(3px);
background-image: url(http://ossweb-img.qq.com/images/lol/web201310/skin/big85006.jpg);
background-size: 600px;
background-repeat: no-repeat;
```

### 边框从中间到两边扩展

* 添加元素,让这些元素绝对定位,作为"边框";然后使用 `@keyframes` 来控制这些元素的长度宽度来实现伸缩变换

### 文字的流光渐变动画

* 一个文字使用一个span,对每个span设置一个动画?
    * 不可行,如果文字较多怎么办
* 文字设为透明,底部设置渐变色的背景图片,随着时间的变化,背景图片进行来回移动?

```css
.container h4{
  font-size: 1.75em;
  position: absolute;
  top: 30%;
  left: 50%;
  color: transparent;
  transform: translateX(-50%);
  z-index: 3;
  display: none;
}
.container:hover h4 {
  display:block;
  // 这样设置颜色,才能呈现出蓝->红->蓝的效果
  // 如果是blue,red,blue,呈现的颜色是蓝->红
  background-image:linear-gradient(to right,blue,red,blue,red,blue);
  // 设置只能透过文字看到下面的背景色
  -webkit-background-clip:text;
  color: transparent;
  // 设置百分比,指定背景图片相对于背景区域的百分比
  // 背景图片的宽度为背景区域的2倍,为的是能够让背景图片移动,进而实现"流光效果"
  // 如果设置为100%,则背景图片的宽度等于content的宽度,图片是不能移动的
  background-size: 200% 100%;
  // 设置动画效果
  animation: title-color 3s infinite linear;
}


@keyframes title-color {
  // 背景图片从右往左移动,就是文字相对于背景图片向右移动(其实文字是不动的),从而实现了文字颜色的变换效果
  0% {background-position: 100% 0%;}
  100% {background-position: 0% 0%;}
}
```