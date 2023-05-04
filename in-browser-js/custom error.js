//builtin erros------------------

try {
    ali
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);

}

//custom errors 
try {
    throw new error("something went wrong")
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);

}
