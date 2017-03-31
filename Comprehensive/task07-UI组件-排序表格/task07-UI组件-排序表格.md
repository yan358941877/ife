### 表格样式相关

* border-spacing 属性设置相邻单元格的边框间的距离（仅用于“边框分离”模式）。

### 操作相关:如何排序

* 点击按钮时,知道对应的是什么操作(上升排序,下降排序)
* 点击排序按钮时,知道它所在的是第几列: 给表头th标签设定一个参数(name或者id),能够间接表示是第几列,当点击排序按钮时,找到其父类元素(th),然后查找对应的参数,就可以知道是第几列
* 在tbody->tr->第几列->取值
* 根据相应的排列顺序 操作tr:
	* 操作tr:首先找到tbody标签

```
// 复制一个节点
var node = table_body.children.item(i).cloneNode(true);
// 替换一个节点:为什么第一个参数要用clone的节点?因为如果不用clone的节点,则真是的节点就会从原有的位置删除并替换另一个节点,导致节点数目减少
table_body.replaceChild(table_body.children.item(j).cloneNode(true), table_body.children.item(i));
table_body.replaceChild(node, table_body.children.item(j));
```


