(function() {
  // Function to add avatar
  function addAvatar() {
    // Create the avatar
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
  
  // Function to check chat status
  function checkChat() {
    var chatWindow = document.querySelector('.sc-chat-window');
    var avatar = document.getElementById('wedding-ambassador-avatar');
    
    if (!avatar) return;
    
    if (chatWindow && getComputedStyle(chatWindow).display !== 'none') {
      avatar.style.display = 'block';
    } else {
      avatar.style.display = 'none';
    }
  }
  
  // Add avatar when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      addAvatar();
      
      // Check when clicking
      document.addEventListener('click', function() {
        setTimeout(checkChat, 500);
      });
      
      // Check periodically
      setInterval(checkChat, 1000);
    });
  } else {
    addAvatar();
    
    // Check when clicking
    document.addEventListener('click', function() {
      setTimeout(checkChat, 500);
    });
    
    // Check periodically
    setInterval(checkChat, 1000);
  }
})();
