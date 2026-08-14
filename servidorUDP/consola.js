import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});
let answer = "";

do {
    answer = await rl.question("");
    console.log({answer});

}while (!["salir", "quit", "end"].includes(answer.toString().toLowerCase()))
rl.close();
