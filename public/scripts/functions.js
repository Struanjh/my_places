
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
export const validateFormSubmission = () => {
    console.log('FORM VALIDATION');
    return true;
}
