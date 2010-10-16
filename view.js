// Copyright (c) 2010 Dmitry Alenichev <mitya@rockers.su>

// onclick callback function
function viewImage(info, tab) {
  chrome.tabs.update(tab.id, {"url": info.srcUrl});
}

// create context menu item for images
chrome.contextMenus.create({"title": "View Image",
                            "contexts": ["image"],
                            "onclick": viewImage});
