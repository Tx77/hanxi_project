##时间选择器组件

###示例：

    <dateComponents 
        :start-prop = "startProp"
        :end-prop = "endProp"
        :start-date = "bodyParams.startDate"
        :end-date = "bodyParams.endDate"
        @set-start-date = "getStartDate"
        @set-end-date = "getEndDate"
        :date-type = "dateType"
        :show-type = "showType"
        :label-name = "labelName"
        :date-size="dateSize"
        :date-width="dateWidth">
    </dateComponents>

###入参说明：

1. <b>:start-prop</b> ： 嵌套在form表单内的开始时间的prop属性，用于表单的验证及重置；


2. <b>:end-prop</b> ： 嵌套在form表单内的结束时间的prop属性，用于表单的验证及重置；


3. <b>:start-date</b> ： 开始时间的值，在子组件内以v-model进行数据的双向绑定；


4. <b>:end-date</b> ： 结束时间的值，在子组件内以v-model进行数据的双向绑定；


5. <b>@set-start-date</b> ： 子组件向父组件传递开始时间值的方法，传递方式为**$emit()**；


6. <b>@set-end-date</b> ： 子组件向父组件传递结束时间值的方法，传递方式为**$emit()**；


7. <b>:date-type</b> ： 时间选择器的类型，常用类型为：date、datetime；


8. <b>:show-type</b> ： 时间选择器的显示状态，分别为"both"(开始时间，结束时间都显示)、"left(只显示左侧开始时间)"、"right(只显示右侧结束时间)"；


9. <b>:label-name</b> ： <el-form-item>标签的label名称；

10. <b>:date-size<b/> ： 时间选择器组件尺寸；**(可不传)**

11. <b>:date-width<b/> ： 时间选择器组件宽度；**(可不传)**

###父组件获取子组件数据的方法：

建议获取子组件数据的方法按照本文档编写

该方法接收子组件返回的两个参数：**startAttr**(父组件form对象的key)，**startDate**(开始时间)。

		getStartDate (startAttr, startDate) {
			if (startDate !== '') { // 需判断返回的date值是否为空
			  	this.bodyParams[startAttr] = new Date(startDate).toISOString();
			} else { // 若返回值为空则清空该form对象的值，与重置操作自动清空不一样的是，该清空方法
					 // 是由点击时间选择器清除按钮事件触发的
			  	this.bodyParams[startAttr] = '';
			}
		},
		getEndDate (endAttr, endDate) {
			if (endDate !== '') {
			  	this.bodyParams[endAttr] = new Date(endDate).toISOString();
			} else {
			  	this.bodyParams[endAttr] = '';
			}
		}

