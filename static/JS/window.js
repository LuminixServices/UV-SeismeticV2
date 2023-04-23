function encodeUrl(str){
    if (!str) return str;
    return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
  }
  

function openWindow(url) {
    // Handles the certain request
    var iframe = document.createElement('iframe');
    window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
      }).then(() => {
        iframe.setAttribute('src', __uv$config.prefix + encodeUrl(url));
      });
    iframe.setAttribute('frameborder', '0');
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 50px)';

    // create a container div for the iframe and top bar
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.width = '70%';
    container.style.height = '80%';
    container.style.background = 'black';
    container.style.border = '2px solid black';
    container.style.borderRadius = '5px';
    container.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.5)';

    // create the top bar with buttons
    var topbar = document.createElement('div');
    topbar.style.background = '#030d03';
    topbar.style.color = 'white';
    topbar.style.padding = '5px';
    topbar.style.display = 'flex';
    topbar.style.alignItems = 'center';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'img-btn';
    closeBtn.innerHTML = '<img src="../img/x.png">';
    closeBtn.style.marginLeft = 'auto';
    closeBtn.onclick = function() {
      document.body.removeChild(container);
    };

    var fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'img-btn';
    fullscreenBtn.innerHTML = '<img src="../img/FC.png">';
    fullscreenBtn.style.marginLeft = '5px';
    fullscreenBtn.onclick = function() {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
      }
    };

    // append elements to the top bar and container div
    topbar.appendChild(fullscreenBtn);
    topbar.appendChild(closeBtn);
    container.appendChild(topbar);
    container.appendChild(iframe);

    // add the container to the document
    document.body.appendChild(container);
  }
  function classic(url) {
    // Handles the certain request
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('frameborder', '0');
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 50px)';

   // create a container div for the iframe and top bar
   var container = document.createElement('div');
   container.style.position = 'fixed';
   container.style.top = '50%';
   container.style.left = '50%';
   container.style.transform = 'translate(-50%, -50%)';
   container.style.width = '70%';
   container.style.height = '80%';
   container.style.background = 'black';
   container.style.border = '2px solid black';
   container.style.borderRadius = '5px';
   container.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.5)';

   // create the top bar with buttons
   var topbar = document.createElement('div');
   topbar.style.background = '#030d03';
   topbar.style.color = 'white';
   topbar.style.padding = '5px';
   topbar.style.display = 'flex';
   topbar.style.alignItems = 'center';

   var closeBtn = document.createElement('button');
   closeBtn.className = 'img-btn';
   closeBtn.innerHTML = '<img src="../img/x.png">';
   closeBtn.style.marginLeft = 'auto';
   closeBtn.onclick = function() {
     document.body.removeChild(container);
   };

   var fullscreenBtn = document.createElement('button');
   fullscreenBtn.className = 'img-btn';
   fullscreenBtn.innerHTML = '<img src="../img/FC.png">';
   fullscreenBtn.style.marginLeft = '5px';
   fullscreenBtn.onclick = function() {
     if (iframe.requestFullscreen) {
       iframe.requestFullscreen();
     } else if (iframe.webkitRequestFullscreen) { /* Safari */
       iframe.webkitRequestFullscreen();
     } else if (iframe.msRequestFullscreen) { /* IE11 */
       iframe.msRequestFullscreen();
     }
   };

   // append elements to the top bar and container div
   topbar.appendChild(fullscreenBtn);
   topbar.appendChild(closeBtn);
   container.appendChild(topbar);
   container.appendChild(iframe);

   // add the container to the document
   document.body.appendChild(container);
 }