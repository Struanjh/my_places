
import * as functions from "./functions.js";


console.log('Hello World');


const pageContainer = document.querySelector('div.page-container')
const addFormContainer = document.getElementById('add-form-container');
const name = document.getElementById('name');
const cuisine = document.getElementById('cuisine');
const price = document.getElementById('price');
const url = document.getElementById('url');
const modalShow = document.getElementById('show-modal');
const modalHide = document.querySelector('span.close');
const addRestaurantBtn = document.getElementById('add-restaurant');
const formResult = document.querySelector('div.result-msg');

//Add Modal Functionality
(() => {
    //SHOW MODAL ON CLICK
    modalShow.onclick = function() {
        addFormContainer.style.display = 'block';
        pageContainer.classList.add('is-blurred');
    }
    // When the user clicks on <span> (x), close the modal
    modalHide.onclick = function() {
        addFormContainer.style.display = "none";
        pageContainer.classList.remove('is-blurred');
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == addFormContainer) {
            addFormContainer.style.display = "none";
            pageContainer.classList.remove('is-blurred');
        }
    }
  })();


const handleSubmission = async () => {
    console.log('REQUEST IS BEING SENT');
    if(functions.validateFormSubmission()) {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        let data = {
            'request-id': 'add-restaurant',
            'data': {
                'name': name.value,
                'cuisine': cuisine.value,
                'price': price.value,
                'url': url.value,
            }
        };
        //Call request
        let reqUrl = `/my_places/index.php?action=add-restaurant`;
        console.log(data, reqUrl, headers);
        try {
            let res = await functions.makeRequest(reqUrl, headers, 'POST', data);
            if(!res.ok) {
                throw new Error('Required');
            }
            //Form Success Message
            let jsonRes = await res.json();
            console.log(jsonRes);
            formResult.innerHTML = jsonRes.msg;
        } catch (e) {
            console.error(e);
        }      
    }
}

addRestaurantBtn.addEventListener('click', handleSubmission);
