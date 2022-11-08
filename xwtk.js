/*
象网
[rewrite_local]
^https:\/\/tcb-api\.tencentcloudapi\.com\/web url script-response-body xwtk.js
[mitm] 
hostname = tcb-api.tencentcloudapi.com

//hostname :tcb-api.tencentcloudapi.com
//重写链接：^https:\/\/tcb-api\.tencentcloudapi\.com\/web
*/
var body=$response.body;
body = body.replace(/"vip_expire_time\\\":\d+/g,'"vip_expire_time\\":1999999999999');
body = body.replace(/"isVip\\\":\w+/g,'"isVip\\":true');
body = body.replace(/"isAdmin\\\":\w+/g,'"isAdmin\\":true');
$done(body);
