/*
象网
[rewrite_local]
^https:\/\/tcb-api\.tencentcloudapi\.com\/web url script-response-body xwtk.js
[mitm] 
hostname = tcb-api.tencentcloudapi.com

//hostname :tcb-api.tencentcloudapi.com
//重写链接：^https:\/\/tcb-api\.tencentcloudapi\.com\/web
*/
let obj = JSON.parse($response.body);
 obj.data.vip_expire_time = 1999999999999;
 obj.data.isVip = true;
 obj.data.isAdmin = true;
 
 $done({
 body: JSON.stringify(obj)
}
);
