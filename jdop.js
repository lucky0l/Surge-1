const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorId == 6754 || item.floorId == 7764 || item.floorId == 7531 || item.floorId == 6859 || item.floorId == 7096 || item.floorId == 7257 || item.floorId == 9050) {
      return false;
    }
    return true;
  });                                       
}
$done({body: JSON.stringify(body)});