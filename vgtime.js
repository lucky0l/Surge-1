let body = JSON.parse($response.body);
let notifiTitle = "去广告脚本错误";
if (body.data == undefined || body.data.ad === undefined) {
    $notification.post(notifiTitle, "vgtime", "data/ad字段为undefined")
} else {
    body.data.ad = null;
}