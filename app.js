// function getCards() {

//     fetch("https://openapi.programming-hero.com/api/ai/tools")
//         .then(response => response.json())
//         .then(data => displayCards(data.data.tools))

//     // console.log(data.data.tools);
//     // return data.data.tools;


// }

// function loadCards() {
//     let all_cards = getCards();
//     cards = all_cards.slice(0, 6);
//     displayCards(cards);
// }


// document.getElementById('show-all').addEventListener('click', function () {

//     toggleSpinner(true);
//     all_cards = getCards();
//     cards = cards.slice(6, 12);
//     displayCards(cards, (showAll = false));

//     setTimeout(function () {
//         toggleSpinner(false);
//     }, 1000);
// })

function getCards() {
    return fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(response => response.json())
        .then(data => data.data.tools);
}

function loadCards() {
    getCards()
        .then(cards => {
            const slicedCards = cards.slice(0, 6);
            displayCards(slicedCards);
        });
}

document.getElementById('show-all').addEventListener('click', function () {
    toggleSpinner(true);
    getCards()
        .then(cards => {
            const slicedCards = cards.slice(6, 12);
            displayCards(slicedCards, (showAll = false));
            toggleSpinner(false);
        });
});



// Function to append and display cards
const displayCards = (cards, showAllButton = true) => {

    const cardsContainer = document.getElementById('card-container');
    const showAll = document.getElementById('show-all');

    if (showAllButton) {
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');

    }

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
                                   <div class="card border-radius:20% my-4">
                                     <img src="${card.image}" class="card-img-top img " alt="...">
                                      <div class="card-body my-5">
                                           <h5 class="card-title  text-start"">Features</h5>
                                         <p class="card-text my-3 feature-text ">         
                                             <ol>
                                            ${card.features ? card.features.slice(0, 3).map(feat => `<li>${feat ? feat : 'Unavailable'}</li>`).join('')
                : '<li>Unavailable</li>'}
                                            </ol>
                                                </p>

                                      </div>
                                       <hr class="container" />
                                      <div class="card-footer border-0 bg-body my-1">
                                          <div class="d-flex justify-content-between">
                                          <div>
                                             <div class="fs-3 fw-bold">${card.name}</div>
                                             <div><i class="fa-solid fa-calendar-days"></i>${card.published_in}</div>                     
                                          </div>
                                          <div> <button onclick="loadCardDetails('${card.id}')" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa-solid fa-arrow-right"></i> </button></div>
                                         
                                          </div>
                                     </div>
                                    </div>                                   
                                </div>`
        cardsContainer.appendChild(cardDiv)

    })
}


const loadCardDetails = id => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCardDetails(data.data));
}

const displayCardDetails = card => {
    console.log(card);
    const modalTitle = document.getElementById('exampleModalLabel')
    card.forEach
    modalTitle.innerHTML = `
                               
                            <div class="modal-header">
                            <h5 class="modal-title">${card.tool_name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                    <div class="d-flex justify-content-evenly row row-cols-1 row-cols-md-3 g-4"> 

                    <div class="card card-inside card-1  border-radius:20% my-4">
                        <div class="card-body ">
                          <h5 class="card-title">${card.description}</h5>

                          <div class="d-flex justify-content-evenly my-1 fw-bold git a">
                         <div class="text-success border bg-white rounded-3 mx-2 my-2"> ${card.pricing ? card.pricing[0].plan : 'Unavailable'} <br> ${card.pricing ? card.pricing[0].price : 'Unavailable'}</div>
                         <div class="text-warning  border bg-white rounded-3 mx-2 my-2""> ${card.pricing ? card.pricing[1].plan : 'Free of cost'} <br> ${card.pricing ? card.pricing[1].price : 'Unavailable'}</div>
                         <div class="text-danger border bg-white rounded-3 mx-2 my-2""> ${card.pricing ? card.pricing[2].plan : 'Unavailable'} <br> ${card.pricing ? card.pricing[2].price : 'Unavailable'}</div>
                          </div>

                          <div class="d-flex justify-content-evenly ">
                          <div><p class=" card-text mt-1 "><span class="fw-bold">Features</span> <br>${card.features ? card.features['1'].feature_name : 'No data Found'} <br> ${card.features ? card.features['2'].feature_name : 'No data Found'} <br> ${card.features ? card.features['3'].feature_name : 'No data Found'}</p> </div>
                          <div><p class=" card-text mt-1 "><span class="fw-bold">Integrations</span>${card.integrations ? card.integrations.slice(0, 3).map(integration => `<li>${integration ? integration : 'No data Found'}</li>`).join('')
            : '<li>No data Found</li>'}</p> </div>
            
                         </div>

                         </div>
                       </div>


                      <div class="card card-inside border-radius:20% my-4 position-relative">
                         <img src="${card.image_link[0]}" class="img-thumbnail my-3 " alt="...">
                         <button class="bg-danger btn btn-accuracy text-white position-absolute bottom-50 start-50 translate-middle" style="display: ${card.accuracy.score ? 'block' : 'none'};">${card.accuracy.score ? `${card.accuracy.score * 100}% Accuracy ` : ''} </button>

                        <div class="card-body mb-3">
                          <h5 class="card-title">${card.input_output_examples ? card.input_output_examples[0].input : 'Unavailable'}</h5>
                          <p class=" card-text mt-1 ">${card.input_output_examples ? card.input_output_examples[0].output : 'Unavailable'}</p>
                         </div>
                       </div>

                    </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
    `
}

const toggleSpinner = isLoading => {
    const loadSpinner = document.getElementById('spinner')
    if (isLoading) {
        loadSpinner.classList.remove('d-none')
    }
    else {
        loadSpinner.classList.add('d-none')
    }
}
