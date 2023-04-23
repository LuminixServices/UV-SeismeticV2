function encodeUrl(str){
    if (!str) return str;
    return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
  }
  
  function openUV(url){
    window.navigator.serviceWorker.register('../uv/sw.js', {
      scope: __uv$config.prefix
    }).then(() => {
      window.location.href = __uv$config.prefix + encodeUrl(url);
    });
  }