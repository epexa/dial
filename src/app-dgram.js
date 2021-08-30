const dgram = require('dgram'); 

const message = new Buffer.from(`
    M-SEARCH * HTTP/1.1\r\n
    HOST: 239.255.255.250:1900\r\n
    MAN: "ssdp:discover"\r\n
    MX: seconds to delay response\r\n
    ST: urn:dial-multiscreen-org:service:dial:1\r\n
    USER-AGENT: OS/version product/version\r\n` +
    `\r\n
`);

const client = dgram.createSocket('udp4');

client.on('message', (chunk) => {
    const chunkStr = chunk.toString();
    console.log(chunkStr);
});

client.bind(() => {
    client.send(message, 0, message.length, 1900, '239.255.255.250');
});
