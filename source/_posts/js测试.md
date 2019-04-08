---
layout: blog
title: 2018-8-12-jstest
date: 2018-08-12
tags: 学习
---
## 代码
    `<!DOCTYPE html>
    <html>
     <head>
      <title> new document </title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <script type="text/javascript">
        function openWindow(){
        var a = confirm("是否打开网站？");
        // 新窗口打开时弹出确认框，是否打开
        if(a === true){
             var location = prompt("打开的网址为：");
        // 通过输入对话框，确定打开的网址，默认为 http：//www.imooc.com/
        if(location == true){
            window.open('location','_blank','width=400,height=500,menubar=no,toolbar=no');}
        //打开的窗口要求，宽400像素，高500像素，无菜单栏、无工具栏。
        else
    {
            alert("不打开你皮nm呢");
        }
        }
        else{
            alert("我可去你妈了个大傻逼的吧");
        }
        }
      </script>
     </head>
     <body>
    	  <input type="button" value="新窗口打开网站" onclick="openWindow()" />
     </body>
    </html>`
