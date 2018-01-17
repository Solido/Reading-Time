
// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


var timeread;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    timeread = request.timeread;
    sendResponse({ rs: timeread.count });
  });