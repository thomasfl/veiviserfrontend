import 'whatwg-fetch'

export function erDev(): boolean {
    const url = window.location.href;
    return (url.indexOf("localhost:3000") > 0);
}

export function erHeroku(): boolean {
    const url = window.location.origin;
    return (url.indexOf("heroku") > 0) || (url.indexOf("digisos-test") > 0);
}

