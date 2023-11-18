const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("setruo proxy");
    app.use(
        '/api/',
        createProxyMiddleware({
            target: 'http://localhost:80/ramibus/',
            changeOrigin: true,
        })
    );
};