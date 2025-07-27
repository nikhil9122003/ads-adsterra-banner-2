(function() {
  var container = document.getElementById("ad-468x60");

  if (container) {
    // Set Adsterra configuration
    var configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : '39eb290b2635f443c9d7600773933688',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    container.appendChild(configScript);

    // Load the invoke.js script
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = 'https://www.highperformanceformat.com/39eb290b2635f443c9d7600773933688/invoke.js';
    adScript.async = true;
    container.appendChild(adScript);
  } else {
    console.warn('Ad container #ad-468x60 not found.');
  }
})();
