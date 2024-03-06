const localtunnel = require('localtunnel');

(async () => {
  console.log('Opening tunnel');

  const tunnel = await localtunnel({ port: 3000 });

  console.log('Tunnel opened');
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();