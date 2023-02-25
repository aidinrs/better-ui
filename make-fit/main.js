
function bionicify (str) {
  let output = "";

  str.split(" ").forEach((w) => {
    let parts = w.split("");
    let len = parts.length;
    let initial;
    let rest;
    if (len > 0 && len <= 3) {
      initial = parts.splice(0, 2).join("");
      rest = parts.join("");
    } else if (len >= 4 && len <= 5) {
      initial = parts.splice(0, 2).join("");
      rest = parts.join("");
    } else if (len >= 6 && len <= 7) {
      initial = parts.splice(0, 3).join("");
      rest = parts.join("");
    } else if (len >= 8 && len <= 8) {
      initial = parts.splice(0, 4).join("");
      rest = parts.join("");
    } else if (len >= 9 && len <= 10) {
      initial = parts.splice(0, 5).join("");
      rest = parts.join("");
    } else if (len >= 11 && len <= 12) {
      initial = parts.splice(0, 6).join("");
      rest = parts.join("");
    } else {
      initial = parts.splice(0, 7).join("");
      rest = parts.join("");
    }

    output += `<b>${initial}</b>${rest} `;
  });

  return output;
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.active === true){        
      document.querySelectorAll("body p").forEach((el) => {
        el.innerHTML = bionicify(el.innerText)
      });        
    } else if (request.center === true) {
      document.querySelector("body").style.maxWidth = "1024px";
      document.querySelector("body").style.margin = "auto";
    }
    sendResponse("done");
  }
);

(()=>{
  // document.querySelectorAll("body p").forEach((el) => {
  //   el.innerHTML = bionicify(el.innerText)
  // })
  console.log("bionic-reading loaded");



})();
