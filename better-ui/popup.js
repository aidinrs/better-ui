async function sendMessage(val){
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  console.log("message sent");
  const response = await chrome.tabs.sendMessage(tab.id, val);
}

(async () => {
  document.querySelector("#activation-btn").addEventListener("click", async (el) => {
    await sendMessage({active: true});
    // el.style.display = "none";
    // document.querySelector("#activation-btn2").style.display = "block";
  });

  document.querySelector("#center-btn").addEventListener("click", async (el) => {
    await sendMessage({center: true});
    // el.style.display = "none";
    // document.querySelector("#activation-btn2").style.display = "block";
  });
  
  
  
  // document.querySelector("#activation-btn2").addEventListener("click", async (el) => {
  //   await sendMessage({active: true});
  //   el.style.display = "block";
  //   document.querySelector("#activation-btn").style.display = "none";
  // });

})();
