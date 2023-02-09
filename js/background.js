console.log('Background JS Loaded...')


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    if(sender.tab){
        console.log(sender.tab.url)
    }
    else{
        console.log("from the extension")
        if (request.enableSelector === true){
            console.log(request)
            }
            else{
            console.log(request)
            }
        }
        sendResponse({data: true});
    }
  );












// var canAccessNow = true

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['./js/jquery.min.js', './js/jquery-ui.min.js', './js/content.js']
//     });
// });

function toggleExtOn() {
    console.log(1)
    // chrome.browserAction.setIcon({path: './icons/icon128.pn', tabId: info.tabId});
}

function toggleExtOff() {
    console.log(0)
    // chrome.browserAction.setIcon({path: './icons2/icon128.pn', tabId: info.tabId});
}

//When the tab bar icon is clicked this code runs. It sets the state of the extension.
// chrome.action.onClicked.addListener((tab) => {
//     let tabData = tab
//     chrome.storage.local.get('state', function (data) {
//         try {
            
//             if (data.state.currentState == 'on' && data.state.tabUrl == tabData.url) {
//                 console.log(data.state.currentState, data.state.tabUrl)
//                 let pushThis = {
//                     currentState: 'off',
//                     tabUrl: tabData.url
//                 }
//                 //Save the state of the extension.
//                 chrome.storage.local.set({ state: pushThis });
//                 chrome.scripting.executeScript({
//                     target: { tabId: tab.id },
//                     function: toggleExtOff
//                 });
//             } else {
//                 console.log(data.state.currentState, data.state.tabUrl)
//                 let pushThis = {
//                     currentState: 'on',
//                     tabUrl: tabData.url
//                 }
//                 //Save the state of the extension.
//                 chrome.storage.local.set({ state: pushThis })

//                 chrome.scripting.executeScript({
//                     target: { tabId: tab.id },
//                     function: toggleExtOn
//                 });
//             }
//         }
//         catch (e) {
//             console.log(e)
//             let pushThis = {
//                 currentState: 'on',
//                 tabUrl: tabData.url
//             }
//             //Save the state of the extension.
//             chrome.storage.local.set({ state: pushThis })

//             chrome.scripting.executeScript({
//                 target: { tabId: tab.id },
//                 function: toggleExtOn
//             });
//         }

//     });
// });





// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var tab = tabs[0];
//     console.log(tab.id);
// });