(function() {
  // Wait a moment after page load to avoid immediate appearance
  setTimeout(function() {
    // Add the avatar (initially hidden)
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
    document.body.appendChild(avatar);
    
    // Set up direct click handler for launcher
    document.addEventListener('click', function(event) {
      // Find chat elements
      var launcher = document.querySelector('.sc-launcher');
      var chatWindow = document.querySelector('.sc-chat-window');
      
      // If launcher was clicked
      if (launcher && (event.target === launcher || launcher.contains(event.target))) {
        // Wait for animation
        setTimeout(function() {
          // Show avatar only when chat is visible
          if (chatWindow && window.getComputedStyle(chatWindow).display !== 'none') {
            avatar.style.display = 'block';
          } else {
            avatar.style.display = 'none';
          }
        }, 500);
      }
    });
  }, 3000); // Wait 3 seconds before setting up anything
})();
