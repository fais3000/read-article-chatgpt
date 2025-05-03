/* Create context‑menu item once on install */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "read-in-chatgpt",
    title: "Read article in ChatGPT",
    contexts: ["link"]
  });
});

/* Handle menu click */
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== "read-in-chatgpt") return;

  const prompt = `Read out this article to me ${info.linkUrl}`;

  /* Open ChatGPT and stash the prompt in the page */
  chrome.tabs.create({ url: "https://chat.openai.com/" }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: "MAIN",
      func: (text) => { window.__CHATGPT_PROMPT = text; },
      args: [prompt]
    });
  });
});
