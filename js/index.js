$(function () {
      $('.none-inner .bj').on('click',function () {
          $('.se').removeClass('se');
          var aa=$(this).text();
          $(this).addClass('se');
          $('.header-inner .inner-left .font span').text(aa);
     })
    var suiji=
        [
            {name:'荣耀畅玩5',parse:'¥999.00',src:'img/01.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'魅族 MX5 16GB 灰色 移动联通双4G手机 ',parse:'¥543.00',src:'img/mz3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'荣耀V8',parse:'¥1999.00',src:'img/03.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'魅族 魅蓝E 32GB 全网通公开版 月光银 ',parse:'¥784.00',src:'img/mz4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'小米 红米 3S 全网通 2GB内存 16GB RO',parse:'¥600.00',src:'img/m1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'乐视（Le）乐视2（X620）双卡双待移动',parse:'¥299.00',src:'img/l9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'乐视（Letv）乐2 pro 全网通4g 智能手机  ',parse:'¥299.00',src:'img/l10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'小米 红米Note4 高配全网通版 3GB+64G',parse:'¥848.00',src:'img/m2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'Apple iPhone 7 (A1660) 128G 黑色 移动',parse:'¥6600.00',src:'img/p1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'三星 Galaxy C7（SM-C7000）64G版 枫 ',parse:'¥543.00',src:'img/s3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'三星 Galaxy A7 (SM-A7000) 魔幻金 移动 ',parse:'¥1784.00',src:'img/s4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'Apple iPhone 6s (A1700) 64G 银色 移动',parse:'¥8648.00',src:'img/p2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'Apple iPhone 6s Plus (A1699) 64G 玫瑰',parse:'¥5463.00',src:'img/p3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'小米5 全网通 标准版 3GB内存 32GB RO',parse:'¥543.00',src:'img/m3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'OPPO A37 2GB+16GB内存版 玫瑰金 全 ',parse:'¥1599.00',src:'img/o15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'OPPO A59 3GB+32GB内存版 金色 全网',parse:'¥3499.00',src:'img/o16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var huawei=
        [
            {name:'荣耀畅玩5',parse:'¥999.00',src:'img/01.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'荣耀8 4G',parse:'¥2299.00',src:'img/02.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'荣耀V8',parse:'¥1999.00',src:'img/03.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'荣耀7',parse:'¥1399.00',src:'img/04.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'荣耀7i',parse:'¥999.00',src:'img/05.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'荣耀畅玩5',parse:'¥1099.00',src:'img/06.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'荣耀5A',parse:'¥888.00',src:'img/07.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'华为荣耀7',parse:'¥1399.00',src:'img/08.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'荣耀畅玩5',parse:'¥999.00',src:'img/09.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'荣耀NOTE',parse:'¥2299.00',src:'img/010.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'荣耀V8',parse:'¥1999.00',src:'img/011.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'荣耀G9',parse:'¥1399.00',src:'img/012.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'华为麦芒5',parse:'¥999.00',src:'img/013.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'华为G9',parse:'¥2299.00',src:'img/014.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'荣耀V8',parse:'¥1999.00',src:'img/015.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'华为8',parse:'¥1399.00',src:'img/016.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var xiaomi=
        [
            {name:'小米 红米 3S 全网通 2GB内存 16GB RO',parse:'¥600.00',src:'img/m1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'小米 红米Note4 高配全网通版 3GB+64G',parse:'¥848.00',src:'img/m2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'小米5 全网通 标准版 3GB内存 32GB RO',parse:'¥543.00',src:'img/m3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'小米 Max 全网通 标准版 3GB内存 32GB ',parse:'¥784.00',src:'img/m4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'小米 Note 全网通',parse:'¥999.00',src:'img/m5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'小米 4 3GB内存版 亮白',parse:'¥1099.00',src:'img/m6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'小米 4c 标准版 全网通 黄色 移动联通电信',parse:'¥1888.00',src:'img/m7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'小米 Note 全网通 白色 移动联通电信4G',parse:'¥399.00',src:'img/m8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'小米4c 手机 蓝色 全网通标准版(2G RAM',parse:'¥999.00',src:'img/m9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'小米(MI) 小米5 全网通4G手机 双卡双待 ',parse:'¥299.00',src:'img/m10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'小米 小米5 双卡双待 4G手机 黑色 全网通 ',parse:'¥199.00',src:'img/m11.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'小米(MI) 小米5 全网通4G手机 双卡双待 ',parse:'¥1399.00',src:'img/m12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'小米 红米3 手机 双卡双待 金色 全网通指',parse:'¥999.00',src:'img/m13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'小米 红米Note4 全网通手机 金色 标准版',parse:'¥2199.00',src:'img/m14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'荣小米 红米3X 金色 全网通4G (2G RAM+3',parse:'¥1999.00',src:'img/m15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'小米 红米Note4 双卡双待 4G手机 灰色 全',parse:'¥1299.00',src:'img/m16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var apple=
        [
            {name:'Apple iPhone 7 (A1660) 128G 黑色 移动',parse:'¥6600.00',src:'img/p1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'Apple iPhone 6s (A1700) 64G 银色 移动',parse:'¥8648.00',src:'img/p2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'Apple iPhone 6s Plus (A1699) 64G 玫瑰',parse:'¥5463.00',src:'img/p3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',parse:'¥784.00',src:'img/p4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'Apple iPhone 6s (A1700) 16G 玫瑰金色 ',parse:'¥5999.00',src:'img/p5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'Apple iPhone 6 Plus (A1524) 16GB 银色 ',parse:'¥10099.00',src:'img/p6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'Apple iPhone 6 (A1586) 64GB 金色 移动',parse:'¥6888.00',src:'img/p7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'Apple iPhone SE (A1723) 16G 深空灰色 移动联通电信4G手机',parse:'¥3399.00',src:'img/m8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'苹果(Apple) iPhone 7 Plus 移动联通电信',parse:'¥3999.00',src:'img/p9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'苹果 Apple iPhone7 4G手机 玫瑰金 全网通(32G)',parse:'¥2299.00',src:'img/p10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'全球购 Apple iphone SE(A1723) 苹果手 ',parse:'¥8199.00',src:'img/p11.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'苹果(Apple) iPhone SE 4G手机 银色 公 ',parse:'¥9399.00',src:'img/p12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'苹果(Apple) iPhone 7 移动联通电信4G手',parse:'¥9699.00',src:'img/p13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'苹果 Apple iPhone 7 Plus 移动联通电信4',parse:'¥2199.00',src:'img/p14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'【移动购机赠费】Apple iPhone 6s Plus ',parse:'¥5999.00',src:'img/p15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'全球购 Apple iPhone7 苹果港版 智能手',parse:'¥4299.00',src:'img/p16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var meizhu=
        [
            {name:'魅族 魅蓝3S 全网通公开版 16GB 玫瑰金',parse:'¥660.00',src:'img/mz1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'魅族 魅蓝metal 16GB 白色 移动联通双4',parse:'¥864.00',src:'img/mz2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'魅族 MX5 16GB 灰色 移动联通双4G手机 ',parse:'¥543.00',src:'img/mz3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'魅族 魅蓝E 32GB 全网通公开版 月光银 ',parse:'¥784.00',src:'img/mz4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'魅族 PRO6 32GB 全网通公开版 银白色  ',parse:'¥599.00',src:'img/mz5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'魅族 MX6 4GB+32GB 全网通公开版 香槟 ',parse:'¥1009.00',src:'img/mz6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'魅族 PRO6 32GB 全网通公开版 金色 移',parse:'¥688.00',src:'img/mz7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'魅族 PRO5 32GB 灰色 移动联通双4G手',parse:'¥339.00',src:'img/mz8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'魅族 魅蓝3 全网通 手机 五色齐发 灰色 全',parse:'¥399.00',src:'img/mz9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'魅族(MEIZU) 魅蓝note3 4G手机 双卡双',parse:'¥299.00',src:'img/mz10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'魅族 魅蓝note3 手机 银白 全网通(3G RAM+32G ROM)标配 ',parse:'¥8199.00',src:'img/mz11.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'魅族(MEIZU) 魅蓝3S 4G手机 双卡双待 灰色 全网通(3G RAM+32G ROM)标配 ',parse:'¥9399.00',src:'img/mz12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'魅族 魅蓝3S 手机 银色 全网通(2G RAM + ',parse:'¥699.00',src:'img/mz13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'魅族(MEIZU)魅蓝note3 4G手机 双卡双待 ',parse:'¥199.00',src:'img/mz14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'魅族(MEIZU)魅蓝note3 4G手机 双卡双待  ',parse:'¥599.00',src:'img/mz15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'魅族(MEIZU)魅蓝note3 4G手机 双卡双待 ',parse:'¥499.00',src:'img/mz16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var sangxing=
        [
            {name:'三星 Galaxy S7 edge（G9350）32G版 ',parse:'¥5660.00',src:'img/s1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'三星 Galaxy On5（G5500）金色 移动联',parse:'¥1864.00',src:'img/s2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'三星 Galaxy C7（SM-C7000）64G版 枫 ',parse:'¥543.00',src:'img/s3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'三星 Galaxy A7 (SM-A7000) 魔幻金 移动 ',parse:'¥1784.00',src:'img/s4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'三星 Galaxy S7 edge（G9350）32G版   ',parse:'¥5199.00',src:'img/s5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'三星 Galaxy C5（SM-C5000）32G版 枫 ',parse:'¥1009.00',src:'img/s6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'三星 Galaxy S6（G9200）32G版 铂光金 ',parse:'¥6188.00',src:'img/s7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'三星 Galaxy A9 (SM-A9100) 魔幻金 全网',parse:'¥339.00',src:'img/s8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'三星（SAMSUNG）GT-I9118 3G手机',parse:'¥2399.00',src:'img/s9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'三星 Galaxy A8（A8000）32G版 魔幻金 ',parse:'¥2299.00',src:'img/s10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'三星GALAXY J3 Pro（J3110）金 移动联 ',parse:'¥8199.00',src:'img/s17.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'三星 Galaxy S6 Edge+（G9280）64G版  ',parse:'¥9399.00',src:'img/s12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'三星 Galaxy Note5（N9200）32G版 铂 ',parse:'¥1699.00',src:'img/s13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'三星 Galaxy A5 (SM-A5000) 精灵黑 移动 ',parse:'¥1199.00',src:'img/s14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'三星 Galaxy J7109 流沙金 电信4G手机  ',parse:'¥1599.00',src:'img/s15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'三星 Galaxy Note4 (N9100) 幻影白 移动',parse:'¥1499.00',src:'img/s16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var leshi=
        [
            {name:'乐视（LeEco）乐Pro3（X720）64G 原 ',parse:'¥560.00',src:'img/l1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'乐视（Le）乐2（X620）32GB 原力金 移',parse:'¥864.00',src:'img/l2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'乐视（Le）乐Max2（X820) 金色 移动联通电信4G 双卡双待',parse:'¥543.00',src:'img/l3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'乐视（Le）乐2Pro 32GB 金色 移动联通 ',parse:'¥784.00',src:'img/l4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'乐视(Letv) 乐Max(X900) 移动联通双4G ',parse:'¥199.00',src:'img/l5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'乐视（Letv）乐Max（X900+）128G 金',parse:'¥1009.00',src:'img/l6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'乐视（Letv） 乐视2 全网通手机 乐2 原力金 全网通4G (3G RAM+32G ROM) 标配',parse:6188.00,src:'img/s7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'乐视（Letv）乐视2 乐2手机 金色 全网通',parse:'¥3399.00',src:'img/l8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'乐视（Le）乐视2（X620）双卡双待移动',parse:'¥299.00',src:'img/l9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'乐视（Letv）乐2 pro 全网通4g 智能手机  ',parse:'¥299.00',src:'img/l10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'乐视（Letv）乐1S 乐视手机 移动联通4G',parse:'¥899.00',src:'img/l11.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'乐视（Letv） 乐视1s 移动联通4G手机 双',parse:'¥999.00',src:'img/l12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'乐视（Le）乐视手机1（X608）移动4G',parse:'¥169.00',src:'img/l13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'乐视（Letv） 乐视2 全网通手机 乐2 原力 ',parse:'¥199.00',src:'img/l14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'乐视(Letv) 乐视2 4G手机 双卡双待 金色 ',parse:'¥1599.00',src:'img/l15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'乐视（Le）乐2 移动联通电信4G手机 双卡双待 金色 全网通(3GRAM+16GROM)',parse:'¥1499.00',src:'img/l16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var oppo=
        [
            {name:'OPPO R9 4GB+64GB内存版 金色 全网通',parse:'¥1560.00',src:'img/o1.jpg',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'OPPO A59 3GB+32GB内存版 金色 全网',parse:'¥564.00',src:'img/o2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'OPPO A33 2GB+16GB内存版 白色 移动',parse:'¥643.00',src:'img/o3.jpg',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'【移动老用户购机】OPPO R9 4GB 64G ',parse:'¥684.00',src:'img/o4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'乐视(Letv) 乐Max(X900) 移动联通双4G ',parse:'¥179.00',src:'img/o5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'OPPO A33 2GB+16GB内存版 白色 移动',parse:'¥1069.00',src:'img/o6.jpg',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'OPPO R9plus 4GB+64GB内存版 金色 全',parse:'¥3188.00',src:'img/o7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'OPPO A37 2GB+16GB内存版 玫瑰金 全',parse:'¥3499.00',src:'img/o8.jpg',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'【移动老用户购机】OPPO R9 4GB 64G',parse:'¥2499.00',src:'img/o9.jpg',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'OPPO A53 2GB+16GB内存版 金色 全网  ',parse:'¥2499.00',src:'img/o10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'OPPO A53 2GB+16GB内存版 金色 全网',parse:'¥1899.00',src:'img/o11.jpg',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'OPPO A37 2GB+16GB内存版 玫瑰金 全',parse:'¥1999.00',src:'img/o12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'OPPO R9plus 4GB+64GB内存版 金色 全',parse:'¥1169.00',src:'img/o13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'OPPO A33 2GB+16GB内存版 白色 移动 ',parse:'¥1399.00',src:'img/o14.jpg',nuber:'10万+',shop:'易道手机专营店'},
            {name:'OPPO A37 2GB+16GB内存版 玫瑰金 全 ',parse:'¥1599.00',src:'img/o15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'OPPO A59 3GB+32GB内存版 金色 全网',parse:'¥3499.00',src:'img/o16.jpg',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
    var vivo=
        [
            {name:'vivo X7 全网通 4GB+64GB 移动联通电信',parse:'¥2560.00',src:'img/v1.png',nuber:'26万+',shop:'爱优创杰手机专营店'},
            {name:'vivo X7Plus 全网通 4GB+64GB 移动联通',parse:'¥1564.00',src:'img/v2.jpg',nuber:'26万+',shop:'中恒国信手机旗舰店'},
            {name:'vivo V3M 全网通高配版 3GB+32GB 双卡',parse:'¥1643.00',src:'img/v3.png',nuber:'11万+',shop:'能良数码旗舰店'},
            {name:'vivo X6S 全网通 4GB+64GB 移动联通电',parse:'¥1684.00',src:'img/v4.jpg',nuber:'2341+',shop:'河北启迪手机专营店'},
            {name:'vivo X7 全网通 4GB+64GB 移动联通电信',parse:'¥1179.00',src:'img/v5.jpg',nuber:'2万+',shop:'新松联手机旗舰店'},
            {name:'vivo Y51A 高配版 全网通4G手机 双卡双待 流光白',parse:'¥1069.00',src:'img/v6.png',nuber:'1223+',shop:'新松联手机旗舰店'},
            {name:'vivo V3Max 全网通 移动联通电信4G手机 ',parse:'¥3188.00',src:'img/v7.jpg',nuber:'6万+',shop:'佳沪数码手机旗舰店'},
            {name:'vivo Xplay5 全网通 4GB+128GB 移动联',parse:'¥3499.00',src:'img/v8.png',nuber:'7万+',shop:'牧申手机旗舰店'},
            {name:'vivo X6SPlus 全网通 4GB+64GB 移动联',parse:'¥2499.00',src:'img/v9.png',nuber:'999+',shop:'龙翔通讯手机专营店'},
            {name:'vivo X6SPlus 全网通 4GB+64GB 移动联',parse:'¥2499.00',src:'img/v10.jpg',nuber:'1234+',shop:'鹏路网络手机专营店'},
            {name:'vivo X6S 全网通 4GB+64GB 移动联通电',parse:'¥1899.00',src:'img/v11.png',nuber:'2300+',shop:'河北启迪手机专营店'},
            {name:'vivo Y51A 高配版 全网通4G手机 双卡双待 流光白',parse:'¥1999.00',src:'img/v12.jpg',nuber:'3万+',shop:'佳沪数码手机旗舰店'},
            {name:'vivo X7 全网通 4GB+64GB 移动联通电信',parse:'¥1169.00',src:'img/v13.jpg',nuber:'2万+',shop:'爱优创杰手机专营店'},
            {name:'vivo X6S 全网通 4GB+64GB 移动联通电 ',parse:'¥1399.00',src:'img/v14.png',nuber:'10万+',shop:'易道手机专营店'},
            {name:'vivo Y51A 高配版 全网通4G手机 双卡双待 流光白',parse:'¥1599.00',src:'img/v15.jpg',nuber:'232+',shop:'牧申手机旗舰店'},
            {name:'vivo X7 全网通 4GB+64GB 移动联通电信',parse:'¥3499.00',src:'img/v16.png',nuber:'3241+',shop:'培新数码手机专营店'}
        ];
   $(suiji).each(function (i,v) {
       $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
   });
    $('.list .xiaomi').on('click',function () {
        $('.content-inner').html('');
        $(xiaomi).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .huawei').on('click',function () {
        $('.content-inner').html('');
        $(huawei).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .apple').on('click',function () {
        $('.content-inner').html('');
        $(apple).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .meizhu').on('click',function () {
        $('.content-inner').html('');
        $(meizhu).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .sangxing').on('click',function () {
        $('.content-inner').html('');
        $(sangxing).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .leshi').on('click',function () {
        $('.content-inner').html('');
        $(leshi).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .oppo').on('click',function () {
        $('.content-inner').html('');
        $(oppo).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.list .vivo').on('click',function () {
        $('.content-inner').html('');
        $(vivo).each(function (i,v) {
            $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
        })
    })
    $('.brand .button .duoxuan').on('click',function () {
        $('.yes').css({
            display:'block'
        })
        $('.thats li').removeClass('hover');
        $('.list').css({
            display:'none'
        });
        $('.thats ').css({
            display:'block'
        });
        var res=[]
        $('.thats li').on('click',function () {
            $(this).addClass('hover');
            var that=$(this);
            $('.yes').on('click',function () {
                $('.list').css({
                    display:'block'
                });
                $('.thats').css({
                    display:'none'
                });
                $('.content-inner').html('');
                if(that.hasClass('hover')){
                    var id=$(that).attr('id');
                    res.push(id);
                    for(var i=0;i<res.length;i++){
                        console.log(res[i]);
                        if(res[i]=='huawei'){
                            $(huawei).each(function (i,v) {
                                 if(i<6){
                                     $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                  }
                            })

                        }
                        if(res[i]=='xiaomi'){
                            $(xiaomi).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='apple'){
                            $(apple).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='meizhu'){
                            $(meizhu).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='sangxing'){
                            $(sangxing).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='leshi'){
                            $(leshi).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='oppo'){
                            $(oppo).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }
                        if(res[i]=='vivo'){
                            $(vivo).each(function (i,v) {
                                if(i<6){
                                $('<a href=""><li><img src="'+v.src+'" alt=""><div class="min-img"><img src="'+v.src+'" alt=""> </div> <span>'+v.parse+'</span> <em>'+v.name+'</em> <div class="chicun"> <img src="img/2016-09-28_185312.jpg" alt="" title="5.5.-5.1英寸"> </div> <strong>已有<a href="">'+v.nuber+'</a>人的评论</strong> <div class="shop"> <a href="">'+v.shop+'</a> <em>京东自营</em> <img src="img/2016-09-28_190517.jpg" alt=""> </div> <div class="qianbao"><img src="img/2016-09-28_191438.jpg" alt=""></div> </li></a>').appendTo($('.content-inner'))
                                }
                            })
                        }

                    }
                }
            })


        })

    })
})