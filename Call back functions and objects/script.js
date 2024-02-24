// callback
hello (leave);

function hello (callback) {
    console.log('Hello');
    callback();
}

function leave () {
    console.log('Bye');
}

function goodbye () {
    console.log('Goodbye');
}