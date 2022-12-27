
import * as functions from "./functions.js";

const editBtns = document.querySelectorAll('div.controls button.edit');
const deleteBtns = document.querySelectorAll('div.controls button.delete');
const editFormContainer = document.getElementById('edit-form-container');
const resultsContainer = document.getElementById('results-container');
let formResult = document.querySelector('div.result-msg');
let name = document.querySelector('#name');
let cuisine = document.querySelector('#cuisine');
let price = document.querySelector('#price');
let url = document.querySelector('#url');
let editSubmit = document.querySelector('#edit-restaurant');
let modalClose = document.querySelector('span.close');
let id;
let container;

console.log(editBtns, deleteBtns);
console.log(formResult);

editSubmit.addEventListener('click', () => {
    handleSubmission(id);
});

//Add Modal Functionality
(() => {
    // When the user clicks on <span> (x), close the modal
    modalClose.onclick = function() {
        editFormContainer.style.display = "none";
        resultsContainer.classList.remove('is-blurred');
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == editFormContainer) {
            editFormContainer.style.display = "none";
            resultsContainer.classList.remove('is-blurred');
        }
    }
  })();

editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        container = btn.parentElement.parentElement;
        id = container.getAttribute('data-restaurant-id');
        let values = {
            'id': id,
            'name': container.querySelector('.rest-attribute.name').textContent,
            'cuisine': container.querySelector('.rest-attribute.cuisine').textContent,
            'price': container.querySelector('.rest-attribute.price').textContent,
            'url': container.querySelector('.rest-attribute.url').textContent,
        }
        populateModal(id, values);
        console.log('click');
        editFormContainer.style.display = 'block';
        resultsContainer.classList.add('is-blurred');
    })
});

//Doesn't need to happen for Add Form so fine to keep here..
const populateModal = (id, values) => {
    name.value = values.name;
    cuisine.value = values.cuisine;
    price.value = values.price;
    url.value = values.url;
}

//Needs to be  moved to generic functions..
const handleSubmission = async (id) => {
    console.log('REQUEST IS BEING SENT');
    if(functions.validateFormSubmission()) {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        let data = {
            'request-id': 'edit-restaurant',
            'data': {
                'id': id,
                'name': name.value,
                'cuisine': cuisine.value,
                'price': price.value,
                'url': url.value,
            }
        };
        //Call request
        let reqUrl = `/my_places/index.php?action=edit-restaurant`;
        try {
            let res = await functions.makeRequest(reqUrl, headers, 'POST', data);
            if(!res.ok) {
                throw new Error('Required');
            }
            updateUI(data);
            //Form Success Message
            formResult.innerHTML = 'Record Updated';
        } catch (e) {
            console.error(e);
            //Form Error Message
        }
             
    }
}

const updateUI = (data) => {
    container.querySelector('.rest-attribute.name').textContent = data.data.name;
    container.querySelector('.rest-attribute.cuisine').textContent = data.data.cuisine;
    container.querySelector('.rest-attribute.price').textContent = data.data.price;
    container.querySelector('.rest-attribute.url').textContent = data.data.url;
}