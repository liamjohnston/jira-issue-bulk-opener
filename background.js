chrome.runtime.onMessage.addListener(
  function onRequest(request, sender, sendResponse) {
    var theTabs = request.matches;
    for (var i = 0; i < theTabs.length; i++) {
        chrome.tabs.create({
            url: theTabs[i]
        });
    }
});


