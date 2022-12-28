
//MAKE REQUEST

export const makeRequest = (url, headers, method, data) => {
    let options = {};
    options.headers = headers;
    options.method = method;
    if(method === 'POST') options.body = JSON.stringify(data);
    console.log(url, options);
    return fetch(url, options);
}

//VALIDATE FORM
export const validateFormSubmission = (data) => {
    console.log('FORM VALIDATION');
    console.log(data);
    for(let x in data) {
        console.log(x, data[x]);
        if(data[x] === '') {
            return false;
        }
    }
    return true;
}
