# Fullstack Project Template

## Deployment

### Build

```shell
yarn build
```

### Launch API Server

```shell
npx pm2 start ./server/dist/main.js
```

### Launch Web Server

This setup includes the configuration for Caddy, a modern alternative to web servers such as Apache or Nginx. To setup the server with your domain, simply replace `localhost` in `Caddyfile`. Then, you can run the server with:

```shell
sudo caddy start --config Caddyfile
```

### Stop Servers

```shell
caddy stop
npx pm2 stop main
```