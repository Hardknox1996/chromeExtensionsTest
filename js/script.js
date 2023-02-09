$("#enableSelector").click(async function () {

  if ($(this).prop('checked') == true) {
    let response = await chrome.runtime.sendMessage({ enableSelector: true })
    // console.log(response);
  }
  else{
    let response = await chrome.runtime.sendMessage({ enableSelector: false })
    // console.log(response);
  }
  
  

  // let tabData = tab
  // chrome.storage.local.get('state', function (data) {
  //     try {

  //         if (data.state.currentState == 'on' && data.state.tabUrl == tabData.url) {
  //             console.log(data.state.currentState, data.state.tabUrl)
  //             let pushThis = {
  //                 currentState: 'off',
  //                 tabUrl: tabData.url
  //             }
  //             //Save the state of the extension.
  //             chrome.storage.local.set({ state: pushThis });
  //             chrome.scripting.executeScript({
  //                 target: { tabId: tab.id },
  //                 function: toggleExtOff
  //             });
  //         } else {
  //             console.log(data.state.currentState, data.state.tabUrl)
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
  //     }
  //     catch (e) {
  //         console.log(e)
  //         let pushThis = {
  //             currentState: 'on',
  //             tabUrl: tabData.url
  //         }
  //         //Save the state of the extension.
  //         chrome.storage.local.set({ state: pushThis })

  //         chrome.scripting.executeScript({
  //             target: { tabId: tab.id },
  //             function: toggleExtOn
  //         });
  //     }

  // });
});