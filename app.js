const loadCards = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    displayCards(data.data.tools);
}

// Function to append and display cards
const displayCards = cards => {
    console.log(cards);
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
                                             <div>Date</div>                     
                                          </div>
                                          <div><i class="fa-solid fa-arrow-right btn rounded-circle bg-secondary"></i></div>
                                          </div>
                                     </div>
                                    </div>                                   
                                </div>`
        cardsContainer.appendChild(cardDiv)

    })
}
