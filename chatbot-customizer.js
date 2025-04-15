(function() {
  // Get client ID from script tag
  const scriptTag = document.currentScript;
  const clientId = scriptTag.getAttribute('data-client-id') || 'default';
  
  // Client configuration
  const configs = {
    // Wedding planner (default)
    'default': {
      headerColor: '#f5b8b1',
      messageColor: '#e97f7f',
      backgroundImage: 'https://storage.googleapis.com/msgsndr/hT6XhVZ1tpQztNIrhXD4/media/67fd902c266b6fb8779418dc.png'
    },
    // Construction worker
    'construction': {
      headerColor: '#F5A623',
      messageColor: '#3B7BDB',
      backgroundImage: 'YOUR_CONSTRUCTION_BACKGROUND_URL'
    },
    // Realtor
    'realtor': {
      headerColor: '#1E5B94',
      messageColor: '#6C8EBF',
      backgroundImage: 'YOUR_REALTOR_BACKGROUND_URL'
    }
    // Add more client configurations as needed
  };
  
  // Get the config for this client
  const config = configs[clientId];
  
  // Create style element
  const style = document.createElement('style');
  
  // Add the CSS with client-specific colors
  style.textContent = `
    /* Chatbot styling */
    .sc-chat-window {
      border-radius: 15px !important;
      overflow: hidden !important;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
    }
    
    .sc-header {
      background-color: ${config.headerColor} !important;
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
      background-color: ${config.messageColor} !important;
      color: white !important;
      border-radius: 15px !important;
      padding: 12px 18px !important;
      margin: 0 !important;
    }
    
    .sc-message-list {
      background-image: url('${config.backgroundImage}') !important;
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
})();
