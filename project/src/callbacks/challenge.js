let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    //instancia de XML
    let xhttp = new XMLHttpRequest();

    /**Abrir la peticion: Parametros son el tipo de metodo HTTP, la url, y el tercero activa el async*/
    xhttp.open('GET', url_api, true);

    //Estado de la peticion
    xhttp.onreadystatechange = function(event){

        //El estado Completed de la peticion
        if (xhttp.readyState === 4) {

            //El status code de la peticion
            if (xhttp.status === 200) {
                  //Parametros: error , result
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                //Error si falla la peticion
                const error = new Error('Error' + url_api); 
                
                //Parametros: error , result
                return callback(error, null);
            }
        }
    };

    xhttp.send();
}

fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.error(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})