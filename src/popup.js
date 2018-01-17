chrome.runtime.getBackgroundPage(function (backgroundPage) {
    console.log(backgroundPage.timeread);
    document.getElementById('count').textContent = backgroundPage.timeread.count;
    document.getElementById('reftime').textContent = backgroundPage.timeread.reftime;
    document.getElementById('wordsPerMin').textContent = backgroundPage.timeread.wordsPerMin;
});

