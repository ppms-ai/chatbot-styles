// Inject styles
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

// Add the avatar
const avatar = document.createElement('img');
avatar.id = 'ambassador-avatar';
avatar.src = 'https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd90ac0fa4ee04ace65053.png';
Object.assign(avatar.style, {
  position: 'fixed',
  bottom: '120px',
  right: '420px',
  width: '200px',
  zIndex: '998',
  pointerEvents: 'none',
  display: 'none'
});
document.body.appendChild(avatar);

// Function to check if element is on screen
function isVisible(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Run every 500ms
const visibilityLoop = setInterval(() => {
  const chatWindow = document.querySelector('.sc-chat-window');
  if (chatWindow) {
    const visible = isVisible(chatWindow);
    avatar.style.display = visible ? 'block' : 'none';
  }
}, 500);
