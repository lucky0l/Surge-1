let url = $request.url;
let body = JSON.parse($response.body);
let notifiTitle = "脚本错误";
if (body.ok === undefined) {
    $notification.post(notifiTitle, "weibo", "ok is undefined")
} else if (body.ok === -100) {
    body.url = null;
}
body = JSON.stringify(body);
$done({
    body
});