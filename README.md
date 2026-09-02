# Tab Saver

Tab Saver is a simple Chrome Extension that lets you save the URLs of your currently open tabs and view the saved list later from the popup.

## Main Features

- Saves the URLs of all currently open tabs
- Stores saved tab data locally in Chrome using `chrome.storage.local`
- Displays saved tab URLs in the extension popup

## Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extensions Manifest V3

## Install in Chrome

1. Open Chrome and go to `chrome://extensions`
2. Turn on **Developer mode**
3. Click **Load unpacked**
4. Select the `TAB_SAVER_EXTENSION` folder

## How to Use

1. Click the Tab Saver extension icon in Chrome
2. Click **Save Tabs** to store the URLs of your currently open tabs
3. Reopen the popup anytime to see the saved tab list

## Project Structure

- `manifest.json` - Extension metadata and permissions
- `popup.html` - Popup UI structure
- `popup.css` - Popup styling
- `popup.js` - Tab saving and saved-tab display logic
