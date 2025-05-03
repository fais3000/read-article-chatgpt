# Read Article in ChatGPT Chrome Extension

Right‑click any link → ChatGPT opens in a new tab with  
`Read out this article to me <URL>` already typed in the chat box.

---

## Files

| File          | Purpose                                   |
| ------------- | ----------------------------------------- |
| `manifest.json` | Declares extension metadata and permissions. |
| `background.js` | Adds the context‑menu item, opens ChatGPT, injects the prompt. |
| `content.js`    | Waits for ChatGPT's textarea, inserts the stored prompt. |
| `icon.svg`      | Vector source for the extension icon. |
| `icons/`        | Directory containing PNG icons in various sizes. | in ChatGPT Chrome Extension

Right‑click any link → ChatGPT opens in a new tab with  
`Read out this article to me <URL>` already typed in the chat box.

---

## Files

| File          | Purpose                                   |
| ------------- | ----------------------------------------- |
| `manifest.json` | Declares extension metadata and permissions. |
| `background.js` | Adds the context‑menu item, opens ChatGPT, injects the prompt. |
| `content.js`    | Waits for ChatGPT’s textarea, inserts the stored prompt. |

---

## Installation

1. Clone or download this folder.
2. Chrome address bar → `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** → select the folder.

---

## Usage

1. Log in to ChatGPT once.
2. On any webpage, right‑click a link.
3. Choose **Read article in ChatGPT**.
4. A new ChatGPT tab opens with the prompt filled in.  
   (If auto‑submit is desired, press **Enter** or modify `content.js` to trigger a click on the send button.)

---

## Customisation

* **Prompt text** – edit the `prompt` constant in `background.js`.
* **Auto‑submit** – after setting `box.value`, call  
  `document.querySelector('[data-testid="send-button"]').click()`  
  once the button exists.

---

## Troubleshooting

* **Prompt not inserted** – ensure you stayed logged in to ChatGPT and the site’s layout has not changed.  
  Increase the retry delay in `content.js` if your connection is slow.
* **Menu item missing** – reload the extension from the Extensions page.

---

## License

MIT – do whatever you like, no warranty.
