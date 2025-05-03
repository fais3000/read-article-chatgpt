(function insertPrompt() {
  const text = window.__CHATGPT_PROMPT;
  if (!text) return;

  // More specific selector for ChatGPT's textarea
  const box = document.querySelector('#prompt-textarea') || document.querySelector('textarea');
  
  if (box) {
    console.log('Found textarea, inserting prompt:', text);
    box.value = text;
    box.dispatchEvent(new Event("input", { bubbles: true }));
    
    // Focus the textarea to make it ready for submission
    box.focus();
    
    // Uncomment the next line if you want to automatically submit the prompt
    // document.querySelector('[data-testid="send-button"]')?.click();
    
    delete window.__CHATGPT_PROMPT;
  } else {
    console.log('Textarea not found, retrying in 500ms...');
    setTimeout(insertPrompt, 500); // Increased delay to wait for UI to load
  }
})();
