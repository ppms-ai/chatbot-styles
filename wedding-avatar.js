(function() {
  // Function to add avatar and set up listeners
  function setup() {
    // Add the avatar to the page (initially hidden)
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
    avatar.style.display = 'none'; // Initially hidden
    document.body.appendChild(avatar);
    
    // Find the launcher button
    function findLauncherAndSetup() {
      var launcher = document.querySelector('.sc-launcher');
      
      if (launcher) {
        // Set up click listener on the launcher button
        launcher.addEventListener('click', function() {
          // First click: should open the chat and show avatar
          // Second click: should close the chat and hide avatar
          setTimeout(function() {
            var chatWindow = document.querySelector('.sc-chat-window');
            if (chatWindow && window.getComputedStyle(chatWindow).display !== 'none') {
              avatar.style.display = 'block'; // Show avatar when chat is open
            } else {
              avatar.style.display = 'none'; // Hide avatar when chat is closed
            }
          }, 500);
        });
        
        return true;
      }
      
      return false;
    }
    
    // Try to find launcher immediately
    if (!findLauncherAndSetup()) {
      // If not found, check periodically
      var checkInterval = setInterval(function() {
        if (findLauncherAndSetup()) {
          clearInterval(checkInterval);
        }
      }, 500);
    }
  }
  
  // Run setup when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
