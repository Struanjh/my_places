
console.log('Hello World');

const addRestaurantBtn = document.getElementById('add-restaurant');
const restName = document.getElementById('name');
const cuisine = document.getElementById('cuisine');
const price = document.getElementById('price');
const url = document.getElementById('url');


console.log(addRestaurantBtn);

addRestaurantBtn.addEventListener('click', async () => {
    console.log('CLICK');
    if(validateFormSubmission()) {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        let data = [];
        //Add request identifier
        data.unshift({'add-restaurant': true});
        //Prepare data from form
        let formData = {
            'name': restName.value,
            'cuisine': cuisine.value,
            'price': price.value,
            'url': url.value,
        }
        data.push(formData);
        //Call request
        let reqUrl = `/my_places/index.php?action=add-restaurant`;
        let res = await makeRequest(reqUrl, headers, 'POST', data);
        console.log(res);
    }
})

const validateFormSubmission = () => {
    console.log('FORM VALIDATION');
    return true;
}

const makeRequest = (url, headers, method, data) => {
    let options = {};
    options.headers = headers;
    options.method = method;
    if(method === 'POST') options.body = JSON.stringify(data);
    console.log(url, options);
    return fetch(url, options);
}