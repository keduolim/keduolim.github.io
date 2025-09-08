---
title: overpass
description: 知识点-js，ssh，提权
published: 2025-09-03
tags: [Markdown, THM, Blog]
category: THM
author: keduolim
draft: true
---

## 1，nmap和dir（os：感觉这一步以后不需要特意标明了）

![payload](overpass/nmap.png)

如图所示，nmap发现80跟22端口，大概率要用到ssh服务了，dir扫出来的东西很多，一个下载页面，一个门户网站，一个登陆页面
登录页我尝试了弱口令，sql注入，字典爆破，收效甚微

## 2，开始测试

![payload](overpass/破局点.png)

回过头看这几个js文件，login.js里的这句代码很重要
他说当我们的Cookie设置为 SessionToken=status0rCookie时，会跳转到admin路由

如下图，抓包修改cookie，这非常有效

![payload](overpass/bp.png)

发现了ssh的登陆私钥，两个人名（大概率用户名就是他俩），尝试登陆啥的发现需要密码，所以需要使用john工具爆破密码
（此事在本人的`Basic_Pentesting`亦有记载）

![payload](overpass/sshpass.png)

得到密码，登陆，看目录得到第一个flag

![payload](overpass/flag1.png)

## 3，提权

