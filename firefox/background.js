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

function gotoProxy() {
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then( function(tabs){
        if(tabs[0]){
            var tab = tabs[0];
            proxy = createUrl(tab.url);
            browser.tabs.update(tab.id, { url: proxy });
        }
    });
}
browser.browserAction.onClicked.addListener(gotoProxy);
