let url = $request.url;
let method = $request.method;
let body = JSON.parse($response.body);
let notifiTitle = "去广告脚本错误";
let getMethod = "GET";
let postMethod = "POST";
if (url.indexOf("app02.vgtime.com:8080/vgtime-app/api/v2/init/ad.json") != -1 && method == postMethod) {
    //console.log('vgtime-开屏页');
    if (body.data == undefined || body.data.ad === undefined) {
        //console.log("body:" + $response.body);
        $notification.post(notifiTitle, "vgtime", "data/ad字段为undefined")
    } else {
        body.data.ad = null;
        //console.log('成功')
    }
} else if (url.indexOf("api.youxishiguang.com/vgtime-app/api/v2/init/ad.json") != -1 && method == postMethod) {
    //console.log('vgtime-开屏页');
    if (body.data == undefined || body.data.ad === undefined) {
        //console.log("body:" + $response.body);
        $notification.post(notifiTitle, "vgtime", "data/ad字段为undefined")
    } else {
        body.data.ad = null;
        //console.log('成功')
    }
} else if (url.indexOf("app02.vgtime.com:8080/vgtime-app/api/v3/topic/detail") != -1 && url.endsWith("detail") && method == postMethod) {
    //console.log('vgtime-内容页');
    if (body.data == undefined || body.data.ad === undefined) {
        //console.log("body:" + $response.body);
        $notification.post(notifiTitle, "vgtime", "data/ad字段为undefined")
    } else {
        body.data.ad = null;
        //console.log('成功')
    }
} else {
    $notification.post(notifiTitle, "路径/请求方法匹配错误:", method + "," + url)
}
body = JSON.stringify(body);
$done({
    body
});
