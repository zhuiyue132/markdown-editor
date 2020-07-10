/*
 * @Author: chenghao
 * @Date: 2020-06-18 17:42:01
 * @Last Modified by: chenghao
 * @Last Modified time: 2020-07-08 16:28:36
 * @Desc: 初始进入的模板配置
 */
/* eslint-disable  */

export default `

请使用 **Chrome** 浏览器，其他浏览器不保证运行正常。

以下是使用说明，如果需要进行创作，**全选=>删除本文** 即可开始。

## 0 简介

一个 \`demo\` 级别的 web版 markdown 编辑器。基于\`markdown-it\`及其\`插件集\`。  

没错，我就是api搬运工。

## 1 布局

## 3 通用语法

### 3.1 标题

在文字写书写不同数量的\`#\`可以完成不同的标题，如下：

# 一级标题

## 二级标题

### 三级标题

### 3.2 无序列表

无序列表的使用，在符号\`-\`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号\`-\`前使用空格。如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

**由于微信原因，最多支持到二级列表**。

### 3.3 有序列表

有序列表的使用，在数字及符号\`.\`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 3.4 引用

引用的格式是在符号\` > \`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 3.5 粗体和斜体

粗体的使用是在需要加粗的文字前后各加两个\` * \`。

而斜体的使用则是在需要斜体的文字前后各加一个\` *\`。

如果要使用粗体和斜体，那么就是在需要操作的文字前后加三个\` *\`。如下：

**这个是粗体**

*这个是斜体*

***这个是粗体加斜体***

注：由于 commonmark 标准，可能会导致加粗与想象不一致，如下

**今天天气好晴朗，**处处好风光。

这个是正常现象，请参考[加粗 Issue](https://github.com/markdown-it/markdown-it/issues/410 "加粗 Issue")。

### 3.6 链接

微信公众号仅支持公众号文章链接，即域名为\`https://mp.weixin.qq.com/\`的合法链接。使用方法如下所示：

对于该论述，欢迎读者查阅之前发过的文章，[你是《未来世界的幸存者》么？](https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA)

### 3.7 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 3.8 删除线

删除线的使用，在需要删除的文字前后各使用两个\`~\`，如下：

~~这是要被删除的内容。~~

### 3.9 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名   | 年龄 |     工作 |
| :----- | :--: | -------: |
| 小可爱 |  18  | 吃可爱多 |
| 小小勇敢 |  20  | 爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

### 3.10 图片

插入图片，如果是行内图片则无图例，否则有图例，格式如下：

![这里写图片描述](https://imgkr.cn-bj.ufileos.com/c3690018-4a92-4766-ac7e-ac54dd54c093.jpg)

可以通过在图片尾部添加宽度和高度控制图片大小，用法如下：

![同时设置宽度和高度](https://imgkr.cn-bj.ufileos.com/4f78d8e8-77f6-4ea8-8a93-305087da06bd.png =150x150)

![只设置宽度，推荐使用百分比](https://imgkr.cn-bj.ufileos.com/4f78d8e8-77f6-4ea8-8a93-305087da06bd.png =40%x)

该语法比较特殊，其他 Markdown 编辑器不完全通用。

支持 jpg、png、gif、svg 等图片格式，**其中 svg 文件仅可在微信公众平台中使用**，svg 文件示例如下：

![](https://my-wechat.mdnice.com/mdnice/i_am_svg_20191024083453.svg)

- 支持图片**拖拽和截图粘贴**到编辑器中上传，上传时使用当前选择的图床。
- 可使用**格式->图片**上传本地图片，网站仅支持「图壳」图床，失败率低可长久保存！

**注：仅支持 https 的图片，图片粘贴到微信时会自动上传微信服务器，不必担心使用上述图床会导致微信内图片丢失**。

## 4. 特殊语法

### 4.1 脚注

> 支持平台：微信公众号、知乎。

脚注与链接的区别如下所示：

\`\`\`markdown
链接：[文字](链接)
脚注：[文字](脚注解释 "脚注名字")
\`\`\`

有人认为在[大前端时代](https://en.wikipedia.org/wiki/Front-end_web_development "Front-end web development")的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。

[全栈工程师](是指掌握多种技能，并能利用多种技能独立完成产品的人。 "什么是全栈工程师")在业务开发流程中起到了至关重要的作用。

脚注内容请拉到最下面观看。

### 4.2 代码块

> 支持平台：微信代码主题仅支持微信公众号！其他主题无限制。

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the \`printf()\` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

\`\`\`java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
\`\`\`

支持以下语言种类：

\`\`\`
bash
clojure，cpp，cs，css
dart，dockerfile, diff
erlang
go，gradle，groovy
haskell
java，javascript，json，julia
kotlin
lisp，lua
makefile，markdown，matlab
objectivec
perl，php，python
r，ruby，rust
scala，shell，sql，swift
tex，typescript
verilog，vhdl
xml
yaml
\`\`\`

如果想要更换代码主题，可在上方挑选，不支持代码主题自定义。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

\`\`\`diff
+ 新增项
- 删除项
\`\`\`

**其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致**


## 5 其他语法

### 5.1 HTML

支持原生 HTML 语法，请写内联样式，如下：

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>

### 5.2 UML

不支持，推荐使用开源工具\`https://draw.io/\`制作后再导入图片

### 5.3 组件图床

组件目前共支持 3 种图床和 1 种自定义图床，主要特点如下：

| 图床   | 费用     | 有效期 | 失败率 |
| ------ | -------- | ------ | ------ |
| SM.MS  | 免费     | 长期   | 高     |
| 阿里云 | 付费     | 自定义 | 低     |
| 七牛云 | 10G 免费 | 自定义 | 低     |
| 自定义 | 高昂 | 自定义 | 自定义 |

4 个图床的缺点：

| 图床   | 缺点                     |
| ------ | ------------------------ |
| SM.MS  | 失败率高可用性很差       |
| 阿里云 | 配置繁琐，费用昂贵       |
| 七牛云 | 配置繁琐，需购买长期域名 |
| 自定义 | 搭建后台繁琐 |

### 5.4 更多文档

更多文档请参考 [markdown-nice-docs](https://preview.mdnice.com/articles/ "更多文档")

`
