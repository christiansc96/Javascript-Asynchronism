// Llamamos la promesa
const doSomethingAsync = () =>{
    return  new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Error('Error'))
    });
}

//Funcion Async
const doSomething = async () =>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//Funcion Async con capturador de errores
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync(); 
        console.log(something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before 1');
anotherFunction();
console.log('After 1');