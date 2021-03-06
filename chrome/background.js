function createUrl(original) {
    parser = document.createElement('a');
    parser.href = original;

    url = parser.protocol;
    url += '//';
    url += parser.hostname;
    url += '.proxy.uba.uva.nl:2048';
    url += parser.pathname;
    url += parser.search;
    url += parser.hash;
    return url;
}

function updateTab(tabs){
    if(tabs[0]){
        var tab = tabs[0];
        proxy = createUrl(tab.url);
        chrome.tabs.update(tab.id, { url: proxy });
    }
}

function gotoProxy() {
    var gettingActiveTab = chrome.tabs.query(
        {active: true, currentWindow: true},
        updateTab
    );
}

chrome.browserAction.onClicked.addListener(gotoProxy);
