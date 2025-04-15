(function() {
  // Create style element for chat styling
  const style = document.createElement('style');
  
  // Add the CSS with client-specific colors
  style.textContent = `
    /* Chatbot styling for Wedding Client */
    .sc-chat-window {
      border-radius: 15px !important;
      overflow: hidden !important;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
    }
    
    .sc-header {
      background-color: #f5b8b1 !important; /* Wedding pink header */
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
      background-color: #e97f7f !important; /* Wedding pink user messages */
      color: white !important;
      border-radius: 15px !important;
      padding: 12px 18px !important;
      margin: 0 !important;
    }
    
    .sc-message-list {
      background-image: url('https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd902c266b6fb8779418dc.png') !important; /* Wedding background */
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
  
  // Add the style to the page
  document.head.appendChild(style);
  
  // Add avatar image
  function addAvatar() {
    // Create avatar element
    const avatar = document.createElement('img');
    avatar.src = 'https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd90ac0fa4ee04ace65053.png';
    avatar.id = 'wedding-ambassador-avatar';
    avatar.alt = 'Wedding Expert Avatar';
    avatar.style.position = 'fixed';
    avatar.style.bottom = '120px';
    avatar.style.right = '420px';
    avatar.style.width = '200px';
    avatar.style.zIndex = '998';
    avatar.style.pointerEvents = 'none';
    avatar.style.display = 'none';
    
    // Add to body
    document.body.appendChild(avatar);
    
    // Function to check if chat is open
    function checkChatOpen() {
      const chatWindow = document.querySelector('.sc-chat-window');
      const avatarElement = document.getElementById('wedding-ambassador-avatar');
      
      if (!avatarElement) return;
      
      if (chatWindow && 
          getComputedStyle(chatWindow).display !== 'none' && 
          !chatWindow.classList.contains('closed')) {
        avatarElement.style.display = 'block';
      } else {
        avatarElement.style.display = 'none';
      }
    }
    
    // Check periodically
    setInterval(checkChatOpen, 1000);
    
    // Also check on clicks
    document.addEventListener('click', function() {
      setTimeout(checkChatOpen, 500);
    });
  }
  
  // Add avatar after a short delay to ensure chat is loaded
  setTimeout(addAvatar, 1000);
})();
