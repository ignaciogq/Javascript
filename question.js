const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => {
        readline.question(query, resolve);
    })
}

async function main() {
    const name = await question('Whats your name? ');
    console.log(`hello ${name}!`);


 // const age = await question ('how old are u?')


    
    readline.close();
    return;
}

main();