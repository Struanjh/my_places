
import * as functions from "./functions.js";

const editForm = document.getElementById('edit-form');
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
let map;

console.log(editBtns, deleteBtns);
console.log(formResult);

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;


editSubmit.addEventListener('click', () => {
    handleSubmission(id);
});

//Add Modal Functionality
(() => {
    // When the user clicks on <span> (x), close the modal
    modalClose.onclick = function() {
        editFormContainer.style.display = "none";
        resultsContainer.classList.remove('is-blurred');
        editForm.reset();
        formResult.innerHTML = '';
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == editFormContainer) {
            editFormContainer.style.display = "none";
            resultsContainer.classList.remove('is-blurred');
            editForm.reset();
            formResult.innerHTML = '';
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

deleteBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
        container = btn.parentElement.parentElement;
        id = container.getAttribute('data-restaurant-id');
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        let data = {
            'request-id': 'delete-restaurant',
            'data': {
                'id': id
            }
        };
         //Call request
         let reqUrl = `/my_places/index.php?action=delete-restaurant`;
         try {
             let res = await functions.makeRequest(reqUrl, headers, 'POST', data);
             if(!res.ok) {
                 throw new Error('Required');
             }
             container.remove();
         } catch (e) {
             console.error(e);
             //Form Error Message
         }     
    })
})

//Doesn't need to happen for Add Form so fine to keep here..
const populateModal = (id, values) => {
    name.value = values.name;
    cuisine.value = values.cuisine;
    price.value = values.price;
    url.value = values.url;
}

//Needs to be  moved to generic functions..
const handleSubmission = async (id) => {
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
    if(functions.validateFormSubmission(data.data)) {
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
            setTimeout(() => {
                editForm.reset();
            }, 1500);
        } catch (e) {
            console.error(e);
            //Form Error Message
        }       
    } else {
        formResult.innerHTML = 'Form Validation Failed';
    }
}

const updateUI = (data) => {
    container.querySelector('.rest-attribute.name').textContent = data.data.name;
    container.querySelector('.rest-attribute.cuisine').textContent = data.data.cuisine;
    container.querySelector('.rest-attribute.price').textContent = data.data.price;
    container.querySelector('.rest-attribute.url').textContent = data.data.url;
}