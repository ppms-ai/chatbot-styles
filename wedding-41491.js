(function() {
  try {
    console.log("Wedding styling script initializing");
    
    // Create style element
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
    console.log("Wedding styling applied");
    
    // Wait for DOMContentLoaded to ensure the document body is available
    const addAvatar = function() {
      try {
        console.log("Adding wedding avatar");
        
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
        console.log("Wedding avatar added to page");
        
        // Function to check if chat is open
        function checkChatOpen() {
          try {
            // Try different selectors for the chat window
            const chatWindow = document.querySelector('.sc-chat-window') || 
                              document.querySelector('.promptherai-widget') ||
                              document.querySelector('[class*="chat"]');
                              
            const avatarElement = document.getElementById('wedding-ambassador-avatar');
            
            if (!avatarElement) {
              console.log("Avatar element not found");
              return;
            }
            
            if (chatWindow && 
                window.getComputedStyle(chatWindow).display !== 'none') {
              console.log("Chat window found and visible, showing avatar");
              avatarElement.style.display = 'block';
            } else {
              console.log("Chat window not found or not visible, hiding avatar");
              avatarElement.style.display = 'none';
            }
          } catch (e) {
            console.log("Error in checkChatOpen: " + e.message);
          }
        }
        
        // Check periodically
        setInterval(checkChatOpen, 1000);
        
        // Also check on clicks
        document.addEventListener('click', function() {
          setTimeout(checkChatOpen, 500);
        });
        
        // Initial check
        setTimeout(checkChatOpen, 1000);
      } catch (e) {
        console.log("Error adding avatar: " + e.message);
      }
    };
    
    // Add avatar when DOM is loaded or after a delay as fallback
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addAvatar);
    } else {
      addAvatar();
    }
    
    // Fallback
    setTimeout(addAvatar, 2000);
    
  } catch (e) {
    console.log("Error in wedding styling script: " + e.message);
  }
})();
