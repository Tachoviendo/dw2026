import net from "node:net";
import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const cliente = net.connect(3333, "10.4.200.198", ()=>{
    console.log("Conexion establecida");
});

cliente.on('end', () => {
    console.log("byebye!")
})

cliente.on('data', (datos) => {
    console.log(datos.toString());
})

const rl = readline.createInterface({input, output});

let linea = "";
do {
    linea = await rl.question("");
    cliente.write(linea);
} while (!["salir", "quit", "end"].includes(linea.toLowerCase()));

rl.close();
cliente.end();
