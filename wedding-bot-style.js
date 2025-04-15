// Inject CSS styles
const style = document.createElement('style');
style.textContent = `
  .sc-chat-window {
    border-radius: 20px !important;
    overflow: hidden !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
  }

  .sc-header {
    background-color: #f5b8b1 !important;
    padding: 16px !important;
  }

  .sc-message--content.received .sc-message--text {
    background: #ffffff !important;
    color: #333 !important;
    border-radius: 14px !important;
    padding: 12px !important;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05) !important;
  }

  .sc-message--content.sent .sc-message--text {
    background-color: #e97f7f !important;
    color: #fff !important;
    border-radius: 14px !important;
    padding: 12px !important;
  }

  .sc-message-list {
    background-image: url('https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd902c266b6fb8779418dc.png') !important;
    background-size: cover !important;
    background-position: center center !important;
  }

  .sc-user-input {
    background: #fff !important;
    border-top: 1px solid #ddd !important;
  }
`;
document.head.appendChild(style);

// Setup avatar
const avatar = document.createElement('img');
avatar.id = 'ambassador-avatar';
avatar.src = 'https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd90ac0fa4ee04ace65053.png';
avatar.alt = 'Brand Ambassador';
Object.assign(avatar.style, {
  position: 'fixed',
  bottom: '120px',
  right: '420px',
  width: '200px',
  zIndex: '998',
  pointerEvents: 'none',
  display: 'none',
});
document.body.appendChild(avatar);

// Monitor DOM for chat open/close state
const observer = new MutationObserver(() => {
  const chatWindow = document.querySelector('.sc-chat-window');
  if (chatWindow) {
    const isOpen = window.getComputedStyle(chatWindow).display !== 'none';
    avatar.style.display = isOpen ? 'block' : 'none';
  }
});

observer.observe(document.body, { childList: true, subtree: true });
