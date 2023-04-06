// const form = document.querySelector('form');
const form = document.getElementById('uv_search')
const input = document.getElementById('uv_input')
// const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/js/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});






function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

