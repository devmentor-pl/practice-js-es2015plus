const message = {
    text: (text => text)('Webpack działa! Gratulacje!'),
}

const { text } = { ...message };

console.log( text );


//?dev W tym zadaniu należało na początek w terminalu wpisać: npm i webpack@4 webpack-cli@3 -D
// czy w sumie to wystarczyło wpisać npm i bo w pliku package.json mieliśmy zdefiniowane wersje? 

//?dev //infO Sprawdzić dlaczego DevTools failed to load SourceMap: Could not load content for webpack:///node_modules/sockjs-client/dist/sockjs.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME 