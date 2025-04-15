// Create style element
const style = document.createElement('style');

// Add CSS
style.textContent = `
  .sc-chat-window {
    border-radius: 15px !important;
    overflow: hidden !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
  }
  
  .sc-header {
    background-color: #f5b8b1 !important;
    padding: 15px !important;
  }
  
  .sc-message--content.received {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
  }
  
  .sc-message--content.received .sc-message--text {
    background: white !important;
    border-radius: 15px !important;
    padding: 15px !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05) !important;
    margin: 0 !important;
  }
  
  .sc-message--content.sent {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  
  .sc-message--content.sent .sc-message--text {
    background-color: #e97f7f !important;
    color: white !important;
    border-radius: 15px !important;
    padding: 12px 18px !important;
    margin: 0 !important;
  }
  
  .sc-message-list {
    background-image: url('https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd902c266b6fb8779418dc.png') !important;
    background-size: cover !important;
    background-position: center center !important;
    padding: 15px !important;
  }
  
  .sc-user-input {
    border-top: 1px solid #eee !important;
    background: white !important;
  }
  
  .sc-message--avatar {
    margin-right: 8px !important;
  }
`;

// Add style to page
document.head.appendChild(style);
