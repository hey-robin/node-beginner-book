function say(word) {
    console.log(word);
}

function execute(aFunction, value) {
    aFunction(value);
}

execute('say', 'hi');