const localtunnel = require('localtunnel');

(async () => {
  console.log('Opening tunnel');

  const tunnel = await localtunnel({ port: 3000 });

  console.log('Tunnel opened');
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  console.log('Tunnel URL:', tunnel.url);

  tunnel.on('error', (err) => {
    console.error('Error', err);
  });

  tunnel.on('request', (info) => {
    console.log('Request', info);
  });

  tunnel.on('SIGINT', () => {
    console.log('SIGINT');
    tunnel.exit();
  });

  tunnel.on('SIGTERM', () => {
    console.log('SIGTERM');
    tunnel.exit();
  });

  tunnel.on('uncaughtException', (err) => {
    console.log.error(err);
  });

  tunnel.on('unhandledRejection', (reason, promise) => {
    console.log.error(reason);
  });

  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });
})();