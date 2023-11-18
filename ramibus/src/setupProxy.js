const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'http://localhost:80',
    changeOrigin: true
}

module.exports = function(app) {
    app.use(
        '/ramibus',
        createProxyMiddleware(proxy)
    );
};