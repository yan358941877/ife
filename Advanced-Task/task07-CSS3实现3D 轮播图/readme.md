### CSS3 实现3D轮播图

```css
.carousel-3d {  /*观众 : 指定了观众在哪个位置和方向观看*/ 
    width: 1200px;
    height: 900px;
    margin: 0 auto;
    position: relative;
    perspective: 1000px;
}
.img-ct {     /*舞台:  指定了舞台上的元素如何呈现(transform-style),舞台的旋转角度(rotate)    */
    width: 1200px;
    height: 900px;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 1s;
}
/*元素(演员): 指定了舞台上的元素(演员)是什么角度,位置*/
.img-ct img {   
    position: absolute;
    width: 400px;
    height: 200px;
    /*这里的%号参考的是父元素,因此.img-ct必须设置宽高(和.carousel-3d)的宽高相同*/
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -200px;        
}
/*元素(演员): 指定了舞台上的每个元素(演员)是什么角度,位置*/
.carousel-3d img:nth-child(1) { 
    transform: rotateY(0deg) translateZ(460px);
}      
.carousel-3d img:nth-child(2) {
    transform: rotateY(60deg) translateZ(460px);
}     
.carousel-3d img:nth-child(3) {
    transform: rotateY(120deg) translateZ(460px);
}      
.carousel-3d img:nth-child(4) {
    transform: rotateY(180deg) translateZ(460px);
}
        
.carousel-3d img:nth-child(5) {
    transform: rotateY(240deg) translateZ(460px);
}    
.carousel-3d img:nth-child(6) {
    transform: rotateY(300deg) translateZ(460px);
}
```

1. perspective属性,决定了查看者的位置,perspective-origin属性决定了观察者观察的方向:
    * 由于没有设置perspective-origin属性,所以默认的视线方向为:设置perspective属性的元素的垂直正中方向
    * perspective设置为1000px,表明观察者在距离设置perspective属性的元素 1000px的位置
    * perspective属性能够产生近大远小的效果

2. 在本例中,由于img元素是绝对定位的,会脱离文档流.如果其上层元素(.carousel-3d和.img-ct)没有设置宽度和高度,
会导致他们的宽度为body宽度(占据一整行)和高度为0.这时如果给.carousel-3d设置了perspective属性,则视线方向就会为垂直body顶端中心的方向,
而不是垂直与图片中心的方向,这时的效果会像俯视图片.为了解决这个问题,必须给img元素的上层元素设置固定宽高,并使图片位于他们的垂直居中和水平居中
的位置,这样视线方向就是垂直于图片并且通过图片的正中心位置

3. 关于`transform-style: preserve-3d;`

    * transform-style属性是3D空间一个重要属性，指定嵌套元素如何在3D空间中呈现。preserve-3d表示所有(直接)子元素在3D空间中呈现。

4. 关于`transform: rotateY(180deg) translateZ(460px);`和`transform: translateZ(460px) rotateY(180deg);`:两者是有差别的,执行顺序的不同会导致不同的效果
因为,旋转之后,Z轴的方向也会发生变化(当前元素所在坐标系也会变化)

5.