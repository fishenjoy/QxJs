/*
蜗牛读书
*/
ar body=$response.body;
body = body.replace(/"vip_expire_time\\\":\d+/g,'"vip_expire_time\\":1999999999999');
body = body.replace(/"isVip\\\":\w+/g,'"isVip\\":true');
body = body.replace(/"isAdmin\\\":\w+/g,'"isAdmin\\":true');
$done(body);

ody = body.replace(/"vip_expire_time\\\":\d+/g,'"vip_expire_time\\":1999999999999');
body = body.replace(/"isVip\\\":\w+/g,'"isVip\\":true');
body = body.replace(/"isAdmin\\\":\w+/g,'"isAdmin\\":true');
$done(body);
