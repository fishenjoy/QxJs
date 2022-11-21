/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
蜗牛重写
脚本名称:蜗牛重写
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/p.du.163.com\/gain\/readtime\/info.json.+$ url script-response-body du.js
[mitm] 
hostname = *.du.*
*******************************
Surge

[Script]
^http[s]?:\/\/p.du.163.com\/gain\/readtime\/info.json.+$ requires-body=1,max-size=0,script-path=du.js

[MITM]
hostname = *.du.*

*******************************/
var obj = JSON.parse($response.body);
    obj.tradeEndTime= 4444444444444;
    $done({body: JSON.stringify(obj)});
