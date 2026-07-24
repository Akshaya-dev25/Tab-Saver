const saveButton=document.getElementById("saveTabs");
const tabList=document.getElementById("tabsList");
saveButton.addEventListener("click",()=> {
    chrome.tabs.query({},function(tabs){
        let tabUrls=tabs.map(tab=>tab.url);
        chrome.storage.local.set({savedTabs:tabUrls});
        displayTabs(tabUrls);
    })
})
function displayTabs(tabs){
    tabList.innerHTML="";
    tabs.forEach(url =>{
        let li=document.createElement("li");
        let link=document.createElement("a");
        link.href=url;
        link.textContent=url;
        link.target="_blank";
        li.appendChild(link);
        tabList.appendChild(li);
    });
}
chrome.storage.local.get("savedTabs",function(data){
    if(data.savedTabs){
        displayTabs(data.savedTabs);
    }
});