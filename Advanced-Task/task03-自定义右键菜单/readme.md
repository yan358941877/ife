### 0.实现自定义右键菜单的思路

* 取消页面右键功能
* 获取鼠标右键点击事件和右键点击时的位置
* 在该位置处展现一个绝对定位的元素,该元素上绘制了自定义右键菜单

### 1.oncontextmenu事件

* 获取或设置当前窗口contextmenu事件的事件处理函数.除非默认行为已经阻止了,否则右键菜单会被激活
* 取消页面右键的功能:

```
window.oncontextmenu = function() {
    return false;
}
```

### 2.鼠标右键点击事件

* 使用mousedown或者mouseup事件

```
document.addEventListener("mouseup", function(event){
    // 0 代表左键
    // 1 代表中键
    // 2 代表右键
    console.log(event.button);
})
```

### 3.鼠标位置的获取

* 使用event.clientX和event.clientY

```
document.addEventListener("mouseup", function(event){
    console.log(event.clientX);
    console.log(event.clientY);
});
```

### 4.菜单展现的位置要根据鼠标的位置来确定(考虑全屏右键自定义菜单)

> 正常情况下,自定义菜单出现在鼠标指针右下方,如果右边区域不够大,展现在左下方,下方区域不够大,则展现在上方

* 获取页面宽度:document.body.clientWidth, 
* 获取视口宽度:window.innerWidth(包含了滑动条)
* 获取视口高度:window.innerHeight(包含了滑动条)
* 自定义菜单的宽度预先设置好:element.style.width
* 根据视口宽度与x坐标的差值,判断右边是否能够放下自定义菜单

### 5.实现鼠标右击自定义菜单区域时，出现自定义菜单。点击非自定义菜单区域时，隐藏自定义菜单

* 判断自定义菜单区域的位置坐标
    * 页面垂直滚动了多长距离==元素垂直滚动的距离:scrollTop------1
    * 自定义菜单区域距离document的顶部的距离:offsetTop--------2
    * 2 - 1就是现在元素距离视口顶端的距离
    * 页面水平滚动了多长距离==元素水平滚动的距离:scrollLeft------3
    * 自定义菜单区域距离document的顶部的距离:offsetLeft--------4
    * 3- 4就是现在元素距离视口左侧的距离
    * 右侧同理