
const form = document.querySelector('form');
const input = document.querySelector('input');
var hash = window.location.hash;
if(hash){

    var url  = hash.replace('#','');
    openSite(`https://html5.gamedistribution.com/rvvASMiM/${url}/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-dunk`);
}



form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});



function openSite(url){
window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
}).then(() => {
    // let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

}
function isUrl(val = ''){
if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
return false;
};