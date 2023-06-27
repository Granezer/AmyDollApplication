import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://amy-doll-backend.onrender.com',
      changeOrigin: true,
    })
  );
}
