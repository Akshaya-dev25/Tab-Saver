const saveButton=document.getElementById("saveTabs");
const tabList=document.getElementById("tabsList");
const emptyState=document.getElementById("emptyState");
const tabsCount=document.getElementById("tabsCount");
saveButton.addEventListener("click",()=> {
    chrome.tabs.query({},function(tabs){
        let tabUrls=tabs.map(tab=>tab.url);
        chrome.storage.local.set({savedTabs:tabUrls});
        displayTabs(tabUrls);
    })
})
function displayTabs(tabs){
    tabs=Array.isArray(tabs) ? tabs : [];
    tabList.innerHTML="";
    emptyState.hidden=tabs.length > 0;
    tabsCount.textContent=`Saved Tabs: ${tabs.length}`;
    tabs.forEach((url, index) =>{
        let li=document.createElement("li");
        let link=document.createElement("a");
        link.href=url;
        link.textContent=url;
        link.target="_blank";
        let removeButton=document.createElement("button");
        removeButton.className="remove-tab";
        removeButton.type="button";
        removeButton.textContent="Remove";
        removeButton.setAttribute("aria-label",`Remove saved tab ${url}`);
        removeButton.addEventListener("click",()=>removeTab(url,index));
        li.appendChild(link);
        li.appendChild(removeButton);
        tabList.appendChild(li);
    });
}
function removeTab(url,index){
    chrome.storage.local.get("savedTabs",function(data){
        let savedTabs=Array.isArray(data.savedTabs) ? data.savedTabs : [];
        let tabIndex=savedTabs[index] === url ? index : savedTabs.indexOf(url);
        if(tabIndex === -1){
            displayTabs(savedTabs);
            return;
        }
        savedTabs.splice(tabIndex,1);
        chrome.storage.local.set({savedTabs:savedTabs});
        displayTabs(savedTabs);
    });
}
chrome.storage.local.get("savedTabs",function(data){
    displayTabs(data.savedTabs);
});
