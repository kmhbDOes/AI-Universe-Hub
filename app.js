const loadCards = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCards(data.data.tools));
}

// const loadAllCards = async () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`
//     const res = await fetch(url)
//     const data = await res.json()
//     loadAllCards(data.data.tools);
// }

// Function to append and display cards
const displayCards = cards => {
    console.log(cards);

    // Display Six Phones by default

    cards = cards.slice(0, 6);

    document.getElementById('show-all').addEventListener('click', function () {
        toggleSpinner = true;
        cards = cards.slice(0, 10);

    })

    const cardsContainer = document.getElementById('card-container');

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
                                   <div class="card border-radius:20% mt-4">
                                     <img src="${card.image}" class="card-img-top " alt="...">
                                      <div class="card-body">
                                           <h5 class="card-title  text-start"">Features</h5>
                                         <p class="card-text ">
                                                  <ol>
                                                     <li>${card.features[0] ? card.features[0] : 'Unavailable'}</li>
                                                     <li>${card.features[1] ? card.features[1] : 'Unavailable'}</li>
                                                     <li>${card.features[2] ? card.features[2] : 'Unavailable'}</li>
                                                    </ol>
                                         </p>
                                      </div>
                                       <hr class="container" />
                                      <div class="card-footer border-0 bg-body">
                                          <div class="d-flex justify-content-between">
                                          <div>
                                             <div class="fs-3 fw-bold">${card.name}</div>
                                             <div>${card.published_in}</div>                     
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

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    `
}

