#创建数据库
CREATE DATABASE hy CHARSET=UTF8;
SHOW DATABASE;
USE hy;
#创建用户注册表
CREATE TABLE hy_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(20),
upwd VARCHAR(20)
);
//向用户表中插入一条数据
INSERT INTO hy_user VALUES(null,"qiangdong","abc123");
//创建商品列表
CREATE TABLE hy_products(
pid INT PRIMARY KEY AUTO_INCREMENT,
pname VARCHAR(100),
price DOUBLE(10,2),
pic   VARCHAR(100),
sales INT(10),
effect VARCHAR(50),
sort VARCHAR(50)
);

INSERT INTO hy_products VALUES
(null,"SNP海洋燕窝补水精华面膜10片",84.50,"products/p01.jpg",1356,"补水 保湿 滋润","面膜贴","10片"),
(null,"丽得姿AMINO水库面膜贴10片",59.00,"products/p02.jpg",1335,"均匀肤色 美白","面膜贴","10片"),
(null,"美迪惠尔保湿水库针剂面膜贴10片",89.00,"products/p03.jpg",750,"补水 保湿 滋润","面膜贴","10片"),
(null,"膜法世家水嫩亮颜面膜贴",84.50,"products/p04.jpg",1356,"均匀肤色","面膜贴","10片"),
(null,"御泥坊绿豆原浆泥面膜100g",99.90,"products/p704.jpg",278,"控油 清洁","泥面膜","100g"),
(null,"悦诗风吟（innisfree）真萃鲜润面膜-芦荟 20ml*6片",40.00,"products/p05.jpg",1356,"补水 保湿 滋润 修护","面膜贴","6片"),
(null,"美迪惠尔维他命C面膜贴10片/盒",67.00,"products/p06.jpg",699,"均匀肤色 美白","面膜贴","10片"),
(null,"高丝婴儿肌 玻尿酸保湿面膜7片",35.00,"products/p07.jpg",1320,"补水 保湿 滋润","面膜贴","7片"),
(null,"美迪惠尔茶树面膜25ml*10片",67.00,"products/p08.jpg",274,"舒缓","面膜贴","10片"),
(null,"Itsskin蜗牛睡眠面膜 100ml",99.00,"products/p507.jpg",138,"补水 滋润 保湿","免洗面膜 睡眠面膜","100ml"),
(null,"御泥坊清爽平衡矿物蚕丝面膜7片",49.90,"products/p09.jpg",2474,"清洁","面膜贴 蚕丝面膜","7片"),
(null,"一叶子面膜礼遇补水舒润礼盒20片",105.00,"products/p10.jpg",85,"补水 保湿 滋润","面膜贴","20片"),
(null,"JAYJUN 水光面膜10片/盒",107.00,"products/p11.jpg",356,"补水 保湿 滋润","面膜贴","10片"),
(null,"御泥坊葡萄籽琉璃亮颜黑面膜21片",79.90,"products/p12.jpg",2027,"美白 均匀肤色","面膜贴","21片"),
(null,"Dr.Jart 绿色药丸面膜25g*5",75.00,"products/p13.jpg",2452,"控油 修护肌肤","面膜贴","25g*5"),
(null,"一叶子营润亮颜奢养面膜礼盒30片",99.00,"products/p14.jpg",1286,"美白 均匀肤色","面膜贴","30片"),
(null,"小迷糊玻尿酸补水亮颜面膜21片",59.90,"products/p15.jpg",761,"补水 保湿 滋润","面膜贴","21片"),
(null,"膜法世家樱桃深透补水蚕丝面膜贴20片",129.00,"products/p604.jpg",1119,"补水 滋润 保湿","蚕丝面膜 面膜贴","20片"),
(null,"自然乐园保湿修护面膜23ml*11",59.00,"products/p16.jpg",247,"修护肌肤 舒缓 保湿","面膜贴","23ml*11"),
(null,"自然乐园红石榴面膜贴11片",45.00,"products/p17.jpg",189,"美白 均匀肤色","面膜贴","11片"),
(null,"jayjun樱花童颜水光焕白面膜",109.00,"products/p18.jpg",1454,"美白 均匀肤色","面膜贴","10片"),
(null,"WIS隐形水润面膜25g*24片",89.00,"products/p19.jpg",784,"保湿 补水 滋润","面膜贴","24片"),
(null,"一叶子樱花玫瑰补水礼盒25片",159.00,"products/p20.jpg",3356,"均匀肤色 紧致","面膜贴","25片"),
(null,"WIS清透补水面膜25g*24片",79.00,"products/p21.jpg",569,"保湿 补水 滋润","面膜贴","24片"),
(null,"春雨黑卢卡蜂胶竹炭面膜25g*10",109.00,"products/p22.jpg",276,"清洁 控油","面膜贴","25g*10"),
(null,"蒂佳婷Dr.Jart+蓝色药丸面膜5片",83.00,"products/p23.jpg",961,"舒缓","面膜贴","5片"),
(null,"MERBLISS婚纱面膜25gx50片",55.00,"products/p24.jpg",497,"美白 均匀肤色","面膜贴","50片"),
(null,"森田玻尿酸闪耀新颜组合装23片",129.00,"products/p25.jpg",925,"美白 均匀肤色","面膜贴","23片"),
(null,"A by BOM 超能婴儿叶子面膜",129.00,"products/p27.jpg",514,"舒缓 保湿","面膜贴","10片"),
(null,"雅丽洁漫友圈十二漫友面膜套盒12片",29.90,"products/p28.jpg",2856,"舒缓 保湿 美白","面膜贴","12片"),
(null,"美迪惠尔维他命胶原茶树超值套组",149.00,"products/p29.jpg",606,"控油 清洁","面膜贴","20片"),
(null,"美迪惠尔水库胶原蛋白套组20片",119.00,"products/p30.jpg",326,"美白 均匀肤色","面膜贴","20片"),
(null,"阿芙提亮补水面膜套装",199.00,"products/p31.jpg",3018,"补水 保湿 滋润","面膜贴","20片"),
(null,"我的心机面膜大赏 23g x 22片",79.00,"products/p201.jpg",1404,"美白 补水 保湿 控油 修护肌肤 舒缓","面膜贴","22片"),
(null,"森田玻尿酸复合原液面膜10片",169.00,"products/p202.jpg",3518,"美白 补水 保湿","面膜贴","10片"),
(null,"SNP黄金胶原蛋白精华面膜10片",79.00,"products/p204.jpg",818,"美白 舒缓","面膜贴","10片"),
(null,"彩虹Rainbow三部曲水库面膜10片",69.00,"products/p205.jpg",3518,"补水 保湿 滋润","面膜贴","10片"),
(null,"SNP钻石提亮面膜贴25ml*10",79.00,"products/p206.jpg",3850,"美白 均匀肤色","面膜贴","25ml*10"),
(null,"丽得姿紧致提升面膜贴10片",59.00,"products/p207.jpg",4382,"紧致","面膜贴","10片"),
(null,"美迪惠尔面膜贴10片/盒",89.00,"products/p208.jpg",2575,"美白 均匀肤色","面膜贴","10片"),
(null,"高丝玻尿酸保湿面膜30抽",69.00,"products/p209.jpg",3389,"保湿 滋润 补水","面膜贴","30抽"),
(null,"悦诗风吟（innisfree）真萃鲜润面膜-蜂蜜 6片",40.00,"products/p210.jpg",2933,"美白 修护肌肤","面膜贴","6片"),
(null,"悦诗风吟（innisfree）真萃鲜润面膜-绿茶 6片",40.00,"products/p211.jpg",2756,"舒缓","面膜贴","6片"),
(null,"美迪惠尔胶原蛋白面膜贴10片/盒",67.00,"products/p212.jpg",1542,"美白 均匀肤色","面膜贴","10片"),
(null,"韩国•SNP黑炭收缩毛孔精华面膜10片",89.00,"products/p213.jpg",2218,"清洁 紧致","面膜贴","10片"),
(null,"御泥坊清润莹亮黑膜套装21片",109.90,"products/p214.jpg",1118,"清洁 紧致","面膜贴","21片"),
(null,"膜法世家玻尿酸水磁场微纤维面膜贴25ml/片*28片",109.00,"products/p215.jpg",3037,"补水 滋润 保湿","面膜贴","28片"),
(null,"百雀羚小雀幸静润补水保湿面膜30ml*20",118.00,"products/p216.jpg",3383,"补水 滋润 保湿","面膜贴","20片"),
(null,"悦诗风吟（innisfree）真萃鲜润面膜 - 大米 20ml*6片",40.00,"products/p217.jpg",2851,"美白 均匀肤色","面膜贴","6片"),
(null,"SNP海洋燕窝补水面膜两盒装",125.00,"products/p218.jpg",586,"补水 保湿 滋润","面膜贴","20片"),
(null,"美迪惠尔保湿面膜贴2盒装",138.00,"products/p219.jpg",642,"保湿 滋润 补水","面膜贴","20片"),
(null,"自然乐园葡萄籽面贴膜11片",59.00,"products/p220.jpg",123,"美白 均匀肤色 舒缓","面膜贴","11片"),
(null,"MESHIARE水库保湿面膜12片",49.00,"products/p220.jpg",99,"保湿 滋润 补水","面膜贴","12片"),
(null,"御泥坊黑玫瑰璀璨亮颜矿物蚕丝面膜5片",59.00,"products/p222.jpg",2573,"美白 均匀肤色","面膜贴","5片"),
(null,"WIS痘肌多效修护面膜25g*24片",128.00,"products/p223.jpg",499,"修护肌肤","面膜贴","24片"),
(null,"膜法世家吸黑焕采水润雪肌黑面膜套装",119.00,"products/p224.jpg",3554,"美白 均匀肤色","面膜贴","20片"),
(null,"JAYJUN水光针红玫瑰面膜25ml*10",99.00,"products/p225.jpg",3981,"保湿 补水 滋润","面膜贴","10片"),
(null,"JAYJUN 维他命药丸能量面膜*10片",59.00,"products/p226.jpg",766,"美白 均匀肤色","面膜贴","10片"),
(null,"柠檬奇异果美白面膜10+1",199.00,"products/p227.jpg",3018,"美白 均匀肤色","面膜贴","11片"),
(null,"AHC 24K黄金锡纸蒸汽面膜",129.00,"products/p228.jpg",211,"美白 均匀肤色","面膜贴","10片"),
(null,"森田臻选人气面膜集锦 17片",99.00,"products/p229.jpg",4734,"美白 均匀肤色","面膜贴","17片"),
(null,"佑天兰(UTENA)经典果冻面膜组",73.00,"products/p231.jpg",18,"保湿 滋润 补水","面膜贴","20片"),
(null,"佑天兰经典果冻面膜组",99.00,"products/p232.jpg",4018,"保湿 滋润 补水","面膜贴","20片"),
(null,"御泥坊美白补水淡斑面膜套装28片",109.90,"products/p233.jpg",1066,"美白 均匀肤色","面膜贴","28片"),
(null,"美迪惠尔水库面膜3盒装",199.00,"products/p234.jpg",1318,"保湿 滋润 补水","面膜贴","30片"),
(null,"佑天兰玫瑰果冻面膜",49.00,"products/p235.jpg",1560,"保湿 滋润 补水","面膜贴","100ml"),
(null,"御泥坊水润膜法补水亮颜面膜41片",109.90,"products/p236.jpg",4819,"美白 均匀肤色","面膜贴","41片"),
(null,"百雀羚8杯水保湿水嫩面膜草本",35.00,"products/p301.jpg",1602,"保湿 滋润 补水","面膜贴","10片"),
(null,"高丝 (Kose)水敷容（面膜纸）14粒",30.00,"products/p302.jpg",1426,"保湿 滋润 补水","面膜贴","14粒"),
(null,"•森田(Dr.Morita) 润透靓白面膜 28g*5片",59.00,"products/p302.jpg",1087,"美白 均匀肤色","面膜贴","5片"),
(null,"美迪惠尔水库针剂睡眠面膜5片",45.00,"products/p303.jpg",1775,"保湿 滋润 补水","面膜贴 睡眠面膜","5片"),
(null,"高丝胶原蛋白弹性面膜30片",69.00,"products/p304.jpg",2106,"美白 均匀肤色 紧致","面膜贴","30片"),
(null,"森田玻尿酸复合原液面膜30毫升*20片",269.00,"products/p305.jpg",1618,"保湿 滋润 补水","面膜贴","20片"),
(null,"丽得姿AMINO收缩毛孔面膜贴10片",59.00,"products/p306.jpg",2162,"紧致","面膜贴","10片"),
(null,"丽得姿净化清洁面膜贴10片/盒",59.00,"products/p308.jpg",1816,"清洁","面膜贴","10片"),
(null,"丽得姿蜗牛修复面膜10片/盒",67.00,"products/p307.jpg",2338,"修护肌肤","面膜贴","10片"),
(null,"高丝婴儿肌 VC白皙保湿面膜7片",35.00,"products/p309.jpg",1819,"美白 均匀肤色 补水","面膜贴","7片"),
(null,"高丝婴儿肌保湿面膜50片",99.90,"products/p310.jpg",1025,"保湿 滋润 补水","面膜贴","50片"),
(null,"我的美丽日记水漾组合",59.00,"products/p311.jpg",1767,"保湿 滋润 补水","面膜贴","20片"),
(null,"森田 (DR.Morita)水滢祛痘面膜 5片入",59.00,"products/p312.jpg",2252,"保湿 美白","面膜贴","5片"),
(null,"JAYJUN水光植物干细胞面膜10片",107.00,"products/p313.jpg",219,"保湿 滋润 补水","面膜贴","10片"),
(null,"雅诗兰黛肌精华面膜1片",49.90,"products/p315.jpg",583,"美白 均匀肤色","面膜贴","1片"),
(null,"小迷糊自然雪肌黑白膜特惠装28片",89.90,"products/p316.jpg",1794,"美白 均匀肤色","面膜贴","28片"),
(null,"森田药妆高保湿弹嫩面膜超值组",118.00,"products/p317.jpg",1164,"保湿 滋润 补水","面膜贴","20片"),
(null,"御泥坊黑膜透亮14片",69.90,"products/p318.jpg",214,"美白 均匀肤色","面膜贴","14片"),
(null,"AHC第三代玻尿酸保湿面膜27ml*5",119.00,"products/p319.jpg",44,"保湿 滋润 补水","面膜贴","5片"),
(null,"WIS痘肌多效修护面膜25g*10片",69.00,"products/p321.jpg",1777,"修护肌肤","面膜贴","10片"),
(null,"黄金美白面膜30g+5ml*10",99.00,"products/p322.jpg",84,"美白 均匀肤色","面膜贴","30g"),
(null,"青柿毛孔紧致面膜10+1",45.00,"products/p324.jpg",300,"紧致","面膜贴","11片"),
(null,"一叶子山茶花补水天才面膜25ml*10片",75.00,"products/p325.jpg",2438,"保湿 滋润 补水","面膜贴","10片"),
(null,"自然堂补水保湿舒缓套装20片",79.00,"products/p326.jpg",883,"保湿 滋润 补水","面膜贴","20片"),
(null,"御泥坊嫩肌酵素黑膜礼盒21片",89.90,"products/p327.jpg",238,"美白 均匀肤色","面膜贴","21片"),
(null,"御泥坊男士黑茶清爽矿物面膜15片",49.90,"products/p328.jpg",238,"清洁 控油","面膜贴","15片"),
(null,"MG美即熊本熊新鲜植物补水焕白面膜礼盒20片",128.00,"products/p329.jpg",1444,"美白 补水","面膜贴","20片"),
(null,"阿芙深层补水保湿精油面膜套装",199.00,"products/p331.jpg",716,"保湿 滋润 补水","面膜贴","20片"),
(null,"SNP面膜套装",169.90,"products/p332.jpg",1535,"保湿 滋润 补水","面膜贴","10片"),
(null,"阿芙补水修护双效面膜套组",199.90,"products/p333.jpg",453,"修护肌肤 补水 滋润 保湿","面膜贴","20片"),
(null,"雪花秀玉容撕拉面膜 中样 50ml",89.00,"products/p401.jpg",210,"修护肌肤 补水 滋润 保湿","撕拉面膜","50ml"),
(null,"韩国•雪花秀玉容撕拉面膜150ml",219.00,"products/p404.jpg",189,"修护肌肤 补水 滋润 保湿","撕拉面膜","150ml"),
(null,"ASTY马油竹炭剥离式清洁面膜90g",74.00,"products/p405.jpg",34,"清洁","撕拉面膜","90g"),
(null,"后拱辰享温和清洁撕拉面膜80ml",239.00,"products/p406.jpg",110,"清洁","撕拉面膜","80ml"),
(null,"Beauty Bubble 撕拉面膜3片/盒",45.00,"products/p407.jpg",210,"补水 滋润 保湿","撕拉面膜","3片"),
(null,"花印(HANAJIRUSHI)水漾润透补水面膜(免洗型) 80g",79.00,"products/p501.jpg",1022,"补水 滋润 保湿","免洗面膜","80g"),
(null,"谜尚 (MISSHA)水清颜蜗牛修护睡眠面膜110ml",138.00,"products/p502.jpg",77,"修护肌肤","免洗面膜","110ml"),
(null,"雪花秀雨润睡眠修复面膜120ml",299.00,"products/p503.jpg",98,"修护肌肤","免洗面膜","120ml"),
(null,"御泥坊芦荟矿物睡眠面膜180g",64.50,"products/p504.jpg",172,"补水 滋润 保湿","免洗面膜 睡眠面膜","180g"),
(null,"中国•丹姿水密码锁水睡眠面膜(免洗)80g",54.00,"products/p506.jpg",639,"补水 滋润 保湿","免洗面膜 睡眠面膜","80g"),
(null,"御泥坊美白亮颜蚕丝面膜套装14片",69.90,"products/p601.jpg",61,"美白 均匀肤色","蚕丝面膜 面膜贴","14片"),
(null,"悦己美玫瑰精油天蚕丝面膜10片",59.00,"products/p602.jpg",17,"舒缓","蚕丝面膜 面膜贴","10片"),
(null,"御泥坊清爽平衡矿物蚕丝面膜7片",49.90,"products/p605.jpg",4517,"控油","蚕丝面膜 面膜贴","7片"),
(null,"欧诗漫珍珠水分鲜润蚕丝面膜",79.00,"products/p609.jpg",157,"补水 滋润 保湿","蚕丝面膜 面膜贴","10片"),
(null,"相宜本草黑茶男士控油泥面膜",81.00,"products/p701.jpg",97,"控油","泥面膜","100g"),
(null,"膜法世家龙井原生抹茶绿泥面膜125ml",118.00,"products/p702.jpg",775,"控油 清洁","泥面膜","125ml"),
(null,"多妍毛孔清洁泥面膜25g*5",69.00,"products/p703.jpg",114,"控油 清洁","泥面膜","25g*5"),
(null,"比度克祛痘净肤泥面膜150g",118.00,"products/p706.jpg",135,"控油 清洁","泥面膜","150g"),
(null,"欧莱雅矿物净化泥面膜100ml",129.00,"products/p707.jpg",143,"控油 清洁","泥面膜","100ml"),
(null,"丽得姿保湿补水修复面膜10片",109.00,"products/p708.jpg",5703,"补水 滋润 保湿","面膜贴","10片");
//创建商品评价表
CREATE TABLE hy_comment(
cid INT PRIMARY KEY AUTO_INCREMENT,
upic VARCHAR(100),
uname VARCHAR(20),
star  INT(5),
txt   VARCHAR(200),
cpic  VARCHAR(100),
tag   VARCHAR(100),
append VARCHAR(200),
ctime DATETIME
);
INSERT INTO hy_comment VALUES
(null,"img/userimg/1.jpg","小糊涂",2,"太厚，而且感觉很干",null,"img/comment/1.jpg;img/comment/2.jpg",null,"2017-05-06 11:00:56"),
(null,"img/userimg/2.jpg","兵长",5,"买了好多次，很好用。",null,null,null,"2017-08-06 01:22:12"),
(null,"img/userimg/3.jpg","彭于晏233",5,"东西非常好，老顾客了，用完还来～",null,"水水的滑滑的;很好用",null,"2017-07-02 20:30:16"),
(null,"img/userimg/4.jpg","鲁短腿",4,"一直回购，不错",null,null,null,"2017-06-08 22:21:19"),
(null,"img/userimg/5.jpg","小明",3,"感觉没有实体店的好用 差了一点点",null,"img/comment/3.jpg",null,"2017-08-12 19:58:20"),
(null,"img/userimg/1.jpg","mary",2,"感觉敷上不是特别舒服，略有小刺激，补水效果没看见",null,null,null,"2017-09-01 22:17:52"),
(null,"img/userimg/1.jpg","小红",5,"很补水，敷完面膜脸又嫩又滑",null,"补水效果好;物流很快;非常好用",null,"2017-01-23 12:16:20"),
(null,"img/userimg/1.jpg","Helloworld",4,"总结：水很多，很滋润，用了二次没多少效果，到时再来追加评论。",null,null,null,"2017-02-22 20:10:30"),
(null,"img/userimg/1.jpg","omg007",5,"真心推荐，特别好用，精华液超多，味道好闻，第二天皮肤光滑细腻嫩白。喜欢。还要再买一盒放着。",null,null,null,"2017-04-05 07:20:51"),
(null,"img/userimg/1.jpg","蒙太奇",5,"非常好用，跟超市一模一样。",null,"img/comment/4.jpg",null,"2017-02-01 11:12:21"),
(null,"img/userimg/1.jpg","猎场200",4,"效果刚用不直达 还行 效果刚用不直达",null,null,null,"2017-04-14 11:26:56"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"一直用着这个面膜，保湿很不错，味道很好闻",null,null,null,"2017-02-23 19:36:13"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"效果不错！下次还会光顾！",null,null,null,"2017-07-21 19:51:18"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"与在屈臣氏买的一样，还是相信进口的比国产效果好，保湿不错，精华很多",null,null,null,"2017-02-12 20:12:15"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"和之前韩国买的没什么区别，挺好的的，可是最近就南海问题是不是要考虑不买韩国产品咯?",null,null,null,"2017-08-06 12:22:14"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"快递给力，一直用的这个面膜，很补水",null,null,null,"2017-09-12 12:14:12"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"这个比芦荟的要厚很多",null,null,null,"2017-02-28 12:14:29"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"美白效果：还没用，用完再评。",null,"img/comment/5.jpg",null,"2017-08-18 11:28:51"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"还没用，跟朋友韩国带来的没差",null,"img/comment/6.jpg",null,"2017-05-21 22:10:26"),
(null,"img/userimg/1.jpg","飞天扫帚",4,"不错哦超强补水?",null,null,null,"2017-08-23 20:10:56"),
(null,"img/userimg/1.jpg","飞天扫帚",5,"很好用、老婆很喜欢！超级赞",null,"img/comment/7.jpg",null,"2017-03-06 18:20:15"),
(null,"img/userimg/1.jpg","飞天扫帚",5,"特别棒，非常水润",null,null,"补水还没用，应该感觉可以。","2017-01-23 10:20:10"),
(null,"img/userimg/1.jpg","飞天扫帚",5,"挺好用的呀！超级补水的。",null,null,"感觉没有在香港机场买的好用……","2017-02-23 19:50:02");

//购物车表
CREATE TABLE hy_cart(
cid INT PRIMARY KEY AUTO_INCREMENT,
uid INT(10),
pid INT(10),
num INT(10)
);







