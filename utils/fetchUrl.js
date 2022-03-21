// var fetch = require('node-fetch');

export default function fetchLink(longLink){
    return fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 1b763d7f42e0aa6b6d0e7c3ec3806ae0192cbfc9',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": longLink, "domain": "bit.ly"})
});   
}