
import * as functions from "./functions.js";


console.log('Hello World');

const addForm = document.getElementById('add-form');
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
        addForm.reset();
        formResult.textContent = '';
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == addFormContainer) {
            addFormContainer.style.display = "none";
            pageContainer.classList.remove('is-blurred');
            addForm.reset();
            formResult.textContent = '';
        }
    }
  })();


const handleSubmission = async () => {
    let data = {
        'request-id': 'add-restaurant',
        'data': {
            'name': name.value,
            'cuisine': cuisine.value,
            'price': price.value,
            'url': url.value,
        }
    };
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    if(functions.validateFormSubmission(data.data)) {
        //Call request
        data['data']['lat'] = functions.getRandomCoors(-180, 180, 3);
        data['data']['lon'] = functions.getRandomCoors(-90, 90, 3);
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
            setTimeout(() => {
                addForm.reset();
            }, 1500);
        } catch (e) {
            console.error(e);
        }      
    } else {
        formResult.innerHTML = 'Form Validation Failed';
    }
}

addRestaurantBtn.addEventListener('click', handleSubmission);
