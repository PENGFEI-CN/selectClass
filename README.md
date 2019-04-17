
# 选课
选课网站
=======
## 项目简介
    软件工程课设：预选课系统，自由选课的前提下，先获取全部的课程后根据学生选择本学期选择的课程名称和时间的筛选生成一个不发生在冲突的智能推荐的课程表。
## 项目采用主要语言
    前端使用vue以及bootstrap框架搭建网页，通过ajax请求后端的数据，后端通过python的Django框架搭建，数据库采用mysql
## 存在的问题
### 前端：
    1.时间的筛选，课程的筛选条件？（如这门课只想上某个老师教的，如果有不同的选择的话）；√
    2.课表根据课程名变化颜色，或者根据是选修或者必修更换颜色；√有待改进
    3.介于现在手机的使用率，还需要考虑移动端页面的显示问题，考虑页面的自适应布局；
    4.添加按钮可以添加重复的选择项！不必要的数据发送给后端可能会得不出结果；√
    5.如果一个td里有两节课，但是他们的周次不一样，该怎么显示这两节课??
	6.登陆页面√
	7.课表新页面√
	8.原生css、js在vue实例之外的html按钮生成课表点击后隐藏筛选的两个盒子同时显示课表的盒子√
### 后端：
    1.筛选条件对已选课程的影响；
    2.课程原始数据的获取；
    3.筛选的次序；
    4.筛选错误时如选择的课程和删除的时间的冲突时怎么处理。
### 预览图片
![demo演示筛选](https://github.com/PENGFEI-CN/selectClass/blob/master/demoImage/2-1.png "图片")
![demo演示课表](https://github.com/PENGFEI-CN/selectClass/blob/master/demoImage/2-2.png "图片")
### 更新
	* 添加了header和footer的html文件，并在页面中进行了相应的引用，即用js的load函数（这需要将网站发布到本地服务器上才能生效，联想到less样式文件的引用也是需要发布）。引用html文件避免书写重复的代码，不过load似乎并不是很好的方法，以后学习webpack模块化开发或许会有进一步的改进。
	* 增加了一些动画效果（基于vue以及animate.css）
	* vm实例外部对vm实例内数据的修改。对vm实例结构以及上面函数的了解。
	* 对要添加课程及筛选时间的查重（js很多遍历对象或者数组的函数需要进一步复习）