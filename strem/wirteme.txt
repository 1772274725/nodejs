博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes
博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes
博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes博客园Logo
首页
新闻
博问
专区
闪存
班级
搜索
注册
登录
返回主页 星朝
博客园 首页 新随笔 联系 订阅 管理随笔 - 5081  文章 - 45  评论 - 361  阅读 - 15049898
java中随机生成字符串的方法（三种）
1、生成的字符串每个位置都有可能是str中的一个字母或数字，需要导入的包是import java.util.Random;

//length用户要求产生字符串的长度
 public static String getRandomString(int length){
     String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     Random random=new Random();
     StringBuffer sb=new StringBuffer();
     for(int i=0;i<length;i++){
       int number=random.nextInt(62);
       sb.append(str.charAt(number));
     }
     return sb.toString();
 }
2、可以指定某个位置是a-z、A-Z或是0-9，需要导入的包是import java.util.Random;

//可以指定字符串的某个位置是什么范围的值
 public static String getRandomString2(int length){
    Random random=new Random();
    StringBuffer sb=new StringBuffer();
    for(int i=0;i<length;i++){
       int number=random.nextInt(3);
       long result=0;
       switch(number){
          case 0:
              result=Math.round(Math.random()*25+65);
              sb.append(String.valueOf((char)result));
              break;
         case 1:
             result=Math.round(Math.random()*25+97);
             sb.append(String.valueOf((char)result));
             break;
         case 2:     
             sb.append(String.valueOf(new Random().nextInt(10)));
             break;
        }


     }
     return sb.toString();
 }
3、org.apache.commons.lang包下有一个RandomStringUtils类，其中有一个randomAlphanumeric(int length)函数，可以随机生成一个长度为length的字符串。

String filename=RandomStringUtils.randomAlphanumeric(10);
1
分类: 工作总结, 开发经验
标签: java经验集锦, 通用实践, JDK
好文要顶 关注我 收藏该文    
星朝
关注 - 2
粉丝 - 1233
+加关注
6 0
« 上一篇： java序列化框架（protobuf、thrift、kryo、fst、fastjson、Jackson、gson、hessian）性能对比 
» 下一篇： 微信公众平台开发(1) 通用的工具类CommonUtil
posted @ 2018-10-11 13:55  星朝  阅读(75490)  评论(2)  编辑  收藏

评论列表
   #1楼 2019-11-15 13:42 ahem
RandomStringUtils我怎么没找到这个类
支持(0) 反对(0)
   #2楼 2019-12-12 23:19 lizhenlzlz
对我有用
支持(0) 反对(0)
刷新评论刷新页面返回顶部
登录后才能发表评论，立即 登录 或 注册， 访问 网站首页
【推荐】AWS携手博客园为开发者送福利，新用户立享12个月免费套餐
【推荐】大型组态、工控、仿真、CADGIS 50万行VC++源码免费下载
【推荐】第一个NoSQL数据库，在大规模和一致性之间找到了平衡
【推荐】了不起的开发者，挡不住的华为，园子里的品牌专区
【推荐】未知数的距离，毫秒间的传递，声网与你实时互动

相关博文：
· 代理模式
· SpringBoot指定额外需要扫描的包
· css选择器
· 分布式权限管理系统笔记
· 解决：Invalidcharacterfoundintherequesttarget.ThevalidcharactersaredefinedinRFC7230andRFC3986
» 更多推荐...

最新 IT 新闻: 
· 特斯拉工程总监 Joseph Mardall 离职，转投无人机初创公司 
· 单飞66天的荣耀，攀北坡与下半场 
· 再见！IBM中国研究院 
· 何小鹏的焦虑：特斯拉抄袭者小鹏汽车迎来销量下滑 
· 新专利表明苹果计划利用可折叠手机拍摄更好的照片 
» 更多新闻...
历史上的今天： 
2018-10-11 高性能的序列化与反序列化：kryo的简单使用 
2018-10-11 JackSon fasterxml学习 
2018-10-11 jeesuite分布式框架环境搭建 
2017-10-11 form表单下的button按钮会自动提交表单的问题 
2017-10-11 【JSP EL】EL表达式获取当前时间（两种方式） 
2017-10-11 23种设计模式总结 
2017-10-11 Java开发中的23种设计模式详解(转) 
昵称： 星朝 
园龄： 3年11个月 
粉丝： 1233 
关注： 2
+加关注
<	2021年1月	>
日	一	二	三	四	五	六
27	28	29	30	31	1	2
3	4	5	6	7	8	9
10	11	12	13	14	15	16
17	18	19	20	21	22	23
24	25	26	27	28	29	30
31	1	2	3	4	5	6
搜索
 
 
常用链接
我的随笔
我的评论
我的参与
最新评论
我的标签
我的标签
java经验集锦(3676)
通用实践(3524)
SQL(786)
Mysql(715)
DB(698)
JDK(576)
SpringBoot(549)
高并发(537)
性能优化(488)
Spring(485)
更多
随笔分类
J2EE(40)
J2se(97)
JVM(26)
Markdown(2)
Maven(5)
Office办公(2)
OpenCMS(4)
Python(25)
Security(25)
Spring(15)
SpringMVC(67)
SQL(614)
Struts2(1)
WebServer(4)
Web前端(73)
更多
随笔档案
2020年4月(1)
2020年1月(43)
2019年12月(175)
2019年11月(131)
2019年10月(95)
2019年9月(226)
2019年8月(209)
2019年7月(271)
2019年6月(395)
2019年5月(411)
2019年4月(113)
2019年3月(21)
2019年2月(84)
2019年1月(141)
2018年12月(127)
更多
文章分类
JVM(4)
Markdown(4)
SQL(5)
开源项目(4)
人工智能(9)
算法(2)
最新评论
1. Re:Java子线程中的异常处理（通用）
讲的不错
--花溪的小石头
2. Re:树的前序遍历、中序遍历、后序遍历详解
写得好，谢谢
--肥而不腻的猫
3. Re:使用neo4j-import导入数据及关系
您好，非常感谢您的分享，但是我去github查了一下batch import好像停止维护很多年了，而且作者也推荐使用官方的neo4j-import ，所以现在千万级别的数据导入最快的可行方法是neo4...
--simpleHuang
4. Re:Java子线程中的异常处理（通用）
挺好的,
--kzcming
5. Re:springmvc不进入Controller导致404
您好，我按照您的步骤对照了一遍，还是报错404。
链接：
如果您有空，可以指正一下，多谢啦！
--影落潮生0
阅读排行榜
1. js判断对象是否为空对象的几种方法(279307)
2. JSON字符串转换为Map(163212)
3. Tor Browser（洋葱浏览器）——一款使你匿名上网的浏览器(148679)
4. Unsupported major.minor version 52.0解决办法(142312)
5. Shiro权限管理框架详解(140722)
评论排行榜
1. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(10)
2. Shiro权限管理框架详解(9)
3. Mybatis Update操作返回值问题(6)
4. 树的前序遍历、中序遍历、后序遍历详解(5)
5. SpringBoot项目优化和Jvm调优(楼主亲测，真实有效)(5)
推荐排行榜
1. Shiro权限管理框架详解(25)
2. Java泛型详解：<T>和Class<T>的使用。泛型类，泛型方法的详细使用实例(13)
3. js判断对象是否为空对象的几种方法(13)
4. 树的前序遍历、中序遍历、后序遍历详解(9)
5. Spring中@Async用法总结(9)
Copyright © 2021 星朝 
Powered by .NET 5.0 on Kubernetes