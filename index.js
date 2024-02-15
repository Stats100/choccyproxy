const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 7003;

const apiProxy = createProxyMiddleware({
    target: 'https://choccycounts.com/api/messages',
    changeOrigin: true,
    pathRewrite: {
        '^/.*': '',
    },
    onProxyRes: (proxyRes, req, res) => {
        console.log('Request made!')
        try {
            // Change the content type header to application/json
            proxyRes.headers['content-type'] = 'application/json';
        } catch (error) {
            console.error('Error modifying response headers:', error);
        }
    },
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    next();
});


app.use('*', apiProxy);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
