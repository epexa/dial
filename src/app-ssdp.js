const Client = require('node-ssdp').Client;

const client = new Client();

client.on('response', (device) => {
    console.log('device:', device.LOCATION);
});

client.search('urn:dial-multiscreen-org:service:dial:1');
