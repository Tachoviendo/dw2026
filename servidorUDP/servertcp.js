import net from 'node:net';

const clientes = new Set();

const server = net.createServer((cliente) => {

    clientes.add(cliente);

    console.log("cliente conectado");


    cliente.write("Bienvenido Cliente!!");

    cliente.on('end', () => {
        console.log("cliente desconectado")
        clientes.delete(cliente);
    })

        cliente.on('data', (datos) => {
            //cliente.write(datos.toString());
            console.log(datos.toString());

            clientes.forEach(client => {
                if (client !== cliente) {
                    client.write(datos.toString());
                }
            })
        })

    cliente.on("error", (err) => {
        clientes.delete(cliente);
    })


});

server.on('error', (err)=> {
    console.error(err.message);
    //throw err;
});
server.listen(3333, () =>{
    console.log("Escuchando...");
})
