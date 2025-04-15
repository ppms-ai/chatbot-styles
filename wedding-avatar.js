(function() {
  // Function to add avatar
  function addAvatar() {
    // Create the avatar if it doesn't exist
    if (!document.getElementById('wedding-ambassador-avatar')) {
      var avatar = document.createElement('img');
      avatar.id = 'wedding-ambassador-avatar';
      avatar.src = 'https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd90ac0fa4ee04ace65053.png';
      avatar.alt = 'Wedding Expert';
      avatar.style.position = 'fixed';
      avatar.style.bottom = '120px';
      avatar.style.right = '420px';
      avatar.style.width = '200px';
      avatar.style.zIndex = '998';
      avatar.style.pointerEvents = 'none';
      avatar.style.display = 'none';
      
      // Add to body
      document.body.appendChild(avatar);
    }
  }
  
  // Track chat state
  var chatIsOpen = false;
  
  // Function to check if chat window is actually open
  function isChatOpen() {
    var chatWindow = document.querySelector('.sc-chat-window');
    return chatWindow && 
           window.getComputedStyle(chatWindow).display !== 'none' && 
           chatWindow.offsetHeight > 0;
  }
  
  // Function to update avatar visibility
  function updateAvatar() {
    var avatar = document.getElementById('wedding-ambassador-avatar');
    if (!avatar) return;
    
    var isOpen = isChatOpen();
    
    // Only update if state changed
    if (isOpen !== chatIsOpen) {
      chatIsOpen = isOpen;
      avatar.style.display = isOpen ? 'block' : 'none';
    }
  }
  
  // Setup everything once DOM is loaded
  function initialize() {
    // Add the avatar to the page
    addAvatar();
    
    // Look for the chat launcher button
    var launcherCheckInterval = setInterval(function() {
      var launcher = document.querySelector('.sc-launcher');
      
      if (launcher) {
        // Found launcher, clear interval
        clearInterval(launcherCheckInterval);
        
        // Add click listener to launcher
        launcher.addEventListener('click', function() {
          // Wait for animation to complete
          setTimeout(updateAvatar, 500);
        });
      }
    }, 500);
    
    // Add click listener to document as a fallback
    document.addEventListener('click', function() {
      setTimeout(updateAvatar, 500);
    });
    
    // Check periodically
    setInterval(updateAvatar, 1000);
  }
  
  // Start when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
