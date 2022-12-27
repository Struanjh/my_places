
import * as functions from "./functions.js";


console.log('Hello World');


const addRestaurantBtn = document.getElementById('add-restaurant');
const restName = document.getElementById('name');
const cuisine = document.getElementById('cuisine');
const price = document.getElementById('price');
const url = document.getElementById('url');
const submissionOutcome = document.getElementById('outcome');


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
        try {
            let res = await functions.makeRequest(reqUrl, headers, 'POST', data);
            if(!res.ok) {
                throw new Error('Required');
            }
        } catch (e) {
            console.error(e);
        }
        submissionOutcome.textContent = 'HELLO';
    }
})
