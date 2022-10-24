/*
歪比歪比

#  [rewrite_local] 
 ^https:\/\/api\.sortedapp\.com\/receipts url script-response-body https://github.com/fishenjoy/QxJs/blob/main/jj.js 
# [mitm]  
 hostname = api.sortedapp.com 
 */



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/verify';


if (url.indexOf(vip) != -1) {
    obj.isPro = true;
	body = JSON.stringify(obj);
}


$done({body});
