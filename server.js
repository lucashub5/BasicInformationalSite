const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const fileMap = {
        '/': './public/index.html',
        '/about': './public/about.html',
        '/contact-me': './public/contact-me.html',
    };

    let filePath;

    if (fileMap[req.url]) {
        filePath = fileMap[req.url];
    } else {
        filePath = './public/404.html';
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end(`Error del servidor: ${err.code}`);
        } else {
            res.writeHead(200);
            res.end(data, 'utf-8');
        }
    });

});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT}/`);
});
