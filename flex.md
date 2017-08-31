# flex
- flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。
- flex 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的简写属性。
- 注意：如果元素不是弹性盒模型对象的子元素，则 flex 属性不起作用。

默认值是 0 1 auto
- 当 flex 取值为 auto，则计算值为 1 1 auto
- 当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%。则计算值为 1 1 0
- 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1。则计算数为 1 1 25px

[flex用法](https://segmentfault.com/q/1010000004080910/a-1020000004121373)