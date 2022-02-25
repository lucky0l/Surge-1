let url = $request.url;
let headers = $request.headers;
if (url.indexOf("baidu.com") !== -1) {
	if (headers["User-Agent"].indexOf("iPhone") !== -1)
		headers["User-Agent"] =
			"Mozilla/5.0 (Linux; Android 8.0.0; SM-N9500 Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.11 (Baidu; P1 8.0.0)";
}
$done({ headers });