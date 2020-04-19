const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Salio Guaya');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Hey!');
            }, 2000);
        } else {
            const error = new Error("Salio Guaya");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()]).then(response => console.log(response))
    .catch(err => console.log(err));