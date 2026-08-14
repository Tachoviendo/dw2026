import dgram from 'node:dgram';

const server = dgram.createSocker('udp4');

server.on('error', (err) => {
    console.error(err.message);
    server.close();
})

server.on('message', (msg, rinfo) => {
    console.log({msg, rinfo})
});

server.on('listening', () => {
    const adress = server.adress();
    console.log()
    
})
