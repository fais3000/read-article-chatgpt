(function insertPrompt() {
  const text = window.__CHATGPT_PROMPT;
  if (!text) return;

  const box = document.querySelector("textarea");
  if (box) {
    box.value = text;
    box.dispatchEvent(new Event("input", { bubbles: true }));
    delete window.__CHATGPT_PROMPT;
  } else {
    setTimeout(insertPrompt, 300); // wait for UI to load
  }
})();
