const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    console.log(url);
    if (url === '/') {
        res.end('Hello From Node.js');
    } else if (url === '/contact') {
        res.end('The Contact Page');
    } else if (url === '/about') {
        res.end('Página Acerca de ...');
    } else {
        res.writeHead(404)
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});